import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function InvoiceHologram3D() {
  const mountRef = useRef(null)
  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.z = 8.1
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    mount.appendChild(renderer.domElement)
    const rig = new THREE.Group()
    scene.add(rig)
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true })
    const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.35, 2), coreMat)
    rig.add(core)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true })
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2, 0.045, 12, 96), ringMat)
    ring.rotation.set(0.85, 0.25, 0.38)
    rig.add(ring)
    const halo = new THREE.Mesh(new THREE.TorusGeometry(2.16, 0.012, 8, 96), new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.45 }))
    halo.rotation.copy(ring.rotation)
    rig.add(halo)
    let dragging = false
    let last = { x: 0, y: 0 }
    const down = event => { dragging = true; last = { x: event.clientX, y: event.clientY }; renderer.domElement.setPointerCapture(event.pointerId) }
    const move = event => { if (!dragging) return; rig.rotation.y += (event.clientX - last.x) * 0.008; rig.rotation.x += (event.clientY - last.y) * 0.008; last = { x: event.clientX, y: event.clientY } }
    const up = () => { dragging = false }
    renderer.domElement.addEventListener('pointerdown', down)
    renderer.domElement.addEventListener('pointermove', move)
    renderer.domElement.addEventListener('pointerup', up)
    renderer.domElement.addEventListener('pointercancel', up)
    const resize = () => { const w = mount.clientWidth || 1; const h = mount.clientHeight || 1; camera.position.x = 0; camera.lookAt(0, 0, 0); camera.aspect = w / h; camera.updateProjectionMatrix(); rig.scale.setScalar(w < 480 ? 0.74 : 1); rig.position.x = 0; renderer.setSize(w, h, false) }
    window.addEventListener('resize', resize)
    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    resize()
    let frame
    const animate = () => { if (!dragging) { rig.rotation.y += 0.004; rig.rotation.x += 0.0015 } renderer.render(scene, camera); frame = requestAnimationFrame(animate) }
    animate()
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('resize', resize)
      renderer.domElement.removeEventListener('pointerdown', down); renderer.domElement.removeEventListener('pointermove', move); renderer.domElement.removeEventListener('pointerup', up); renderer.domElement.removeEventListener('pointercancel', up)
      scene.traverse(object => { object.geometry?.dispose(); if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => material.dispose()) })
      renderer.dispose(); if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])
  return <div className="relative h-[280px] overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-950/5 dark:bg-[#060912]/60 sm:h-[340px]"><div ref={mountRef} className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing" aria-label="Interactive 3D quantum octahedron and inclined violet orbit ring"/><span className="pointer-events-none absolute left-3 top-3 font-mono text-[9px] text-cyan-700 dark:text-cyan-300">⌜ 3D_QUANTUM_OCTACORE</span><span className="pointer-events-none absolute right-3 top-3 font-mono text-[9px] text-violet-600 dark:text-violet-300">ORBIT_RING ⌝</span><span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[9px] text-emerald-600 dark:text-emerald-300">● PARSER ONLINE</span></div>
}
