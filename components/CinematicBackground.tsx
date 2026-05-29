"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const CinematicBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 200);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x020308, 1);
    mount.appendChild(renderer.domElement);

    // --- Lighting ---
    scene.add(new THREE.AmbientLight(0x112244, 1));
    const cyanPoint = new THREE.PointLight(0x00ffff, 3, 30);
    cyanPoint.position.set(0, 0, 4);
    scene.add(cyanPoint);
    const purplePoint = new THREE.PointLight(0x7c3aed, 2, 25);
    purplePoint.position.set(-6, 4, 0);
    scene.add(purplePoint);
    const bluePoint = new THREE.PointLight(0x2563eb, 2, 25);
    bluePoint.position.set(6, -4, 0);
    scene.add(bluePoint);

    // --- Deep Star Field ---
    const buildStars = (count: number, spread: number, size: number, color: number) => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * spread;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({ color, size, sizeAttenuation: true, transparent: true, opacity: 0.8 });
      return new THREE.Points(geo, mat);
    };
    scene.add(buildStars(4000, 120, 0.08, 0xffffff));
    scene.add(buildStars(800, 60, 0.15, 0x88ccff));  // blue-tinted stars
    scene.add(buildStars(300, 40, 0.2, 0x00ffff));    // cyan glow stars

    // --- Central Glowing DNA Helix / Orbital rings ---
    const rings: THREE.Mesh[] = [];
    const ringCount = 6;
    for (let i = 0; i < ringCount; i++) {
      const r = 1.5 + i * 0.6;
      const geo = new THREE.TorusGeometry(r, 0.012, 6, 80);
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00e5ff : 0x7c3aed,
        transparent: true,
        opacity: 0.25 - i * 0.02,
      });
      const ring = new THREE.Mesh(geo, mat);
      // Tilt each ring differently
      ring.rotation.x = (Math.PI / ringCount) * i + Math.PI / 6;
      ring.rotation.y = (Math.PI / ringCount) * i;
      rings.push(ring);
      scene.add(ring);
    }

    // --- Central Core Sphere ---
    const coreGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.9 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // --- Outer wireframe icosahedron ---
    const icoGeo = new THREE.IcosahedronGeometry(4, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: 0x1e40af, wireframe: true, transparent: true, opacity: 0.06 });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // --- Floating Particles orbiting the core ---
    const orbitCount = 80;
    const orbitPositions = new Float32Array(orbitCount * 3);
    const angles = Array.from({ length: orbitCount }, () => Math.random() * Math.PI * 2);
    const radii = Array.from({ length: orbitCount }, () => 1.5 + Math.random() * 3.5);
    const heights = Array.from({ length: orbitCount }, () => (Math.random() - 0.5) * 4);
    const speeds = Array.from({ length: orbitCount }, () => 0.1 + Math.random() * 0.3);

    const orbitGeo = new THREE.BufferGeometry();
    orbitGeo.setAttribute("position", new THREE.BufferAttribute(orbitPositions, 3));
    const orbitMat = new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.06, sizeAttenuation: true, transparent: true, opacity: 0.7 });
    const orbitPoints = new THREE.Points(orbitGeo, orbitMat);
    scene.add(orbitPoints);

    // --- Scroll tracking (passive, no reflow in RAF) ---
    let scrollY = 0;
    let smoothScrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    // --- Animation Loop ---
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth scroll lerp — no layout reflow in loop
      smoothScrollY += (scrollY - smoothScrollY) * 0.05;

      // Camera gently drifts on scroll
      camera.position.y = -smoothScrollY * 0.003;
      camera.rotation.x = smoothScrollY * -0.0002;

      // Slow auto-rotation of the whole scene
      scene.rotation.y = t * 0.04 + smoothScrollY * 0.0008;
      scene.rotation.x = Math.sin(t * 0.1) * 0.05;

      // Rings spin at different speeds
      rings.forEach((ring, i) => {
        ring.rotation.z = t * (0.1 + i * 0.04);
        ring.rotation.x += 0.001;
      });

      // Orbiting particles
      const positions = orbitGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < orbitCount; i++) {
        angles[i] += speeds[i] * 0.008;
        positions[i * 3]     = Math.cos(angles[i]) * radii[i];
        positions[i * 3 + 1] = heights[i] + Math.sin(t * 0.5 + i) * 0.3;
        positions[i * 3 + 2] = Math.sin(angles[i]) * radii[i];
      }
      orbitGeo.attributes.position.needsUpdate = true;

      // Core pulse
      const pulse = 0.9 + Math.sin(t * 3) * 0.15;
      core.scale.setScalar(pulse);
      cyanPoint.intensity = 2.5 + Math.sin(t * 2.5) * 0.8;

      // Icosahedron slow drift
      ico.rotation.y = t * 0.05;
      ico.rotation.x = t * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};
