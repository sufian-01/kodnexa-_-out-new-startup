import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function TechIQHologram3D() {
  const mountRef = useRef(null)
  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.z = 7.6
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    mount.appendChild(renderer.domElement)
    const rig = new THREE.Group()
    scene.add(rig)
    const shell = new THREE.Mesh(new THREE.DodecahedronGeometry(1.65, 1), new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true }))
    rig.add(shell)
    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x00f0ff })
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.58, 32, 24), coreMaterial)
    rig.add(core)
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.78, 24, 18), new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, depthWrite: false }))
    rig.add(glow)
    let dragging = false
    let last = { x: 0, y: 0 }
    const down = event => { dragging = true; last = { x: event.clientX, y: event.clientY }; renderer.domElement.setPointerCapture(event.pointerId) }
    const move = event => { if (!dragging) return; rig.rotation.y += (event.clientX - last.x) * 0.008; rig.rotation.x += (event.clientY - last.y) * 0.008; last = { x: event.clientX, y: event.clientY } }
    const up = () => { dragging = false }
    renderer.domElement.addEventListener('pointerdown', down)
    renderer.domElement.addEventListener('pointermove', move)
    renderer.domElement.addEventListener('pointerup', up)
    renderer.domElement.addEventListener('pointercancel', up)
    const resize = () => { const w = mount.clientWidth || 1; const h = mount.clientHeight || 1; camera.position.x = 0; camera.lookAt(0, 0, 0); camera.aspect = w / h; camera.updateProjectionMatrix(); rig.scale.setScalar(w < 480 ? 0.78 : 1); rig.position.x = 0; renderer.setSize(w, h, false) }
    window.addEventListener('resize', resize)
    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    resize()
    let frame
    const animate = () => { if (!dragging) { rig.rotation.y += 0.004; rig.rotation.x += 0.0015 }; const pulse = 1 + Math.sin(performance.now() * 0.002) * 0.06; core.scale.setScalar(pulse); glow.scale.setScalar(pulse); renderer.render(scene, camera); frame = requestAnimationFrame(animate) }
    animate()
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('resize', resize)
      renderer.domElement.removeEventListener('pointerdown', down); renderer.domElement.removeEventListener('pointermove', move); renderer.domElement.removeEventListener('pointerup', up); renderer.domElement.removeEventListener('pointercancel', up)
      scene.traverse(object => { object.geometry?.dispose(); if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => material.dispose()) })
      renderer.dispose(); if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])
  return <div className="relative h-[280px] overflow-hidden rounded-2xl border border-violet-500/20 bg-slate-950/5 dark:bg-[#060912]/60 sm:h-[340px]"><div ref={mountRef} className="absolute inset-0 cursor-grab touch-none active:cursor-grabbing" aria-label="Interactive 3D neural dodecahedron with glowing cyan core"/><span className="pointer-events-none absolute left-3 top-3 font-mono text-[9px] text-violet-700 dark:text-violet-300">⌜ 3D_NEURAL_DODECA</span><span className="pointer-events-none absolute right-3 top-3 font-mono text-[9px] text-cyan-700 dark:text-cyan-300">PULSE_CORE ⌝</span><span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[9px] text-emerald-600 dark:text-emerald-300">● 650+ SCORED</span></div>
}
