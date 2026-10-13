import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Gyroscope3D() {
  const mountRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wrapper = mountRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const w = wrapper.clientWidth || 300;
    const h = wrapper.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 8.5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const gyroCage = new THREE.Group();
    scene.add(gyroCage);

    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true });
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.08, 16, 50), ringMat1);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.08, 16, 50), ringMat2);
    ring2.rotation.x = Math.PI / 2;
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 1), coreMat);

    gyroCage.add(ring1);
    gyroCage.add(ring2);
    gyroCage.add(core);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseCoords.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseCoords.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    wrapper.addEventListener("mousemove", handleMouseMove);

    let animId;
    const renderLoop = () => {
      animId = requestAnimationFrame(renderLoop);
      gyroCage.rotation.x += 0.01 + mouseCoords.current.y * 0.02;
      gyroCage.rotation.y += 0.015 + mouseCoords.current.x * 0.02;
      renderer.render(scene, camera);
    };
    renderLoop();

    const handleResize = () => {
      if (!wrapper || !renderer || !camera) return;
      const rw = wrapper.clientWidth;
      const rh = wrapper.clientHeight;
      camera.aspect = rw / rh;
      camera.updateProjectionMatrix();
      renderer.setSize(rw, rh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      wrapper.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative h-[380px] sm:h-[420px] rounded-2xl bg-[#0d1222] border border-white/10 p-4 overflow-hidden flex flex-col justify-between shadow-2xl">
      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/5 pb-2 z-10">
        <span className="text-cyan-300 font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          3D GYROSCOPE CORE
        </span>
        <span className="text-[10px] text-slate-500">DRAG TO ROTATE</span>
      </div>

      <div
        ref={mountRef}
        className="absolute inset-0 top-10 bottom-10 flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="z-10 border-t border-white/5 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>QUANTUM LATTICE v4</span>
        <span className="text-emerald-400">TELEMETRY: STABLE</span>
      </div>
    </div>
  );
}