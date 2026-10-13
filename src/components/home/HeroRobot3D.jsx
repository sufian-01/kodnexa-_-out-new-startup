import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import * as THREE from 'three'

const HeroRobot3D = forwardRef(function HeroRobot3D(_props, ref) {
  const mountRef = useRef(null)
  const audioRef = useRef(null)
  const targetRotationY = useRef(0)
  const mousePosition = useRef({ x: 0, y: 0 })

  useImperativeHandle(ref, () => ({
    rotate: direction => { targetRotationY.current += direction * 0.75 },
    reset: () => { targetRotationY.current = 0; mousePosition.current = { x: 0, y: 0 } },
    center: () => { mousePosition.current = { x: 0, y: 0 } },
    setAudioEnabled: enabled => {
      if (enabled && !audioRef.current) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext
        if (!AudioContextClass) return
        const context = new AudioContextClass()
        const master = context.createGain()
        const filter = context.createBiquadFilter()
        filter.type = 'lowpass'
        filter.frequency.value = 520
        master.gain.value = 0
        filter.connect(master)
        master.connect(context.destination)
        ;[110, 164.8, 220].forEach((frequency, index) => {
          const oscillator = context.createOscillator()
          const voiceGain = context.createGain()
          oscillator.type = index === 1 ? 'triangle' : 'sine'
          oscillator.frequency.value = frequency
          voiceGain.gain.value = index === 0 ? 0.35 : 0.15
          oscillator.connect(voiceGain)
          voiceGain.connect(filter)
          oscillator.start()
        })
        audioRef.current = { context, master }
      }
      const audio = audioRef.current
      if (!audio) return
      if (enabled) {
        audio.context.resume().then(() => audio.master.gain.setTargetAtTime(0.075, audio.context.currentTime, 0.25))
      } else {
        audio.master.gain.setTargetAtTime(0, audio.context.currentTime, 0.12)
      }
    },
  }), [])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 1000)
    camera.position.set(0, 0, 15.5)
    camera.updateProjectionMatrix()

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.AmbientLight(0xffffff, 1.05))
    const cyanLight = new THREE.DirectionalLight(0x00f0ff, 2.2)
    cyanLight.position.set(5, 7, 8)
    scene.add(cyanLight)
    const purpleLight = new THREE.DirectionalLight(0x8b5cf6, 1.8)
    purpleLight.position.set(-5, -4, -6)
    scene.add(purpleLight)
    const cyanRim = new THREE.PointLight(0x00eaff, 38, 12)
    cyanRim.position.set(0, 1.2, 4)
    scene.add(cyanRim)
    const violetRim = new THREE.PointLight(0x8b5cf6, 22, 10)
    violetRim.position.set(-3, -1.5, 2)
    scene.add(violetRim)

    const robot = new THREE.Group()
    scene.add(robot)

    const metal = new THREE.MeshStandardMaterial({ color: 0x28354c, metalness: 0.62, roughness: 0.24 })
    const cyan = new THREE.MeshStandardMaterial({ color: 0x18f7ff, emissive: 0x00ddeb, emissiveIntensity: 1.8, metalness: 0.25, roughness: 0.2 })
    const purple = new THREE.MeshStandardMaterial({ color: 0xa78bfa, emissive: 0x7c3aed, emissiveIntensity: 1.15, metalness: 0.2, roughness: 0.24 })
    const glow = new THREE.MeshBasicMaterial({ color: 0x00eaff, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false })
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.18,
      roughness: 0.1,
      transmission: 0.9,
      thickness: 0.3,
      side: THREE.DoubleSide,
    })
    const addMesh = (geometry, material, position, parent = robot) => {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(...position)
      parent.add(mesh)
      return mesh
    }

    // Reference suspension base, illuminated ring and paired gripper arms.
    addMesh(new THREE.CylinderGeometry(1.8, 2.1, 0.6, 24), metal, [0, 3.8, 0])
    const topRing = addMesh(new THREE.TorusGeometry(1.7, 0.12, 16, 32), cyan, [0, 3.5, 0])
    topRing.rotation.x = Math.PI / 2
    const topHalo = addMesh(new THREE.TorusGeometry(1.7, 0.24, 12, 32), glow, [0, 3.5, 0])
    topHalo.rotation.x = Math.PI / 2
    addMesh(new THREE.BoxGeometry(0.35, 3.4, 0.45), metal, [-2, 1.4, 0])
    addMesh(new THREE.BoxGeometry(0.35, 3.4, 0.45), metal, [2, 1.4, 0])
    addMesh(new THREE.BoxGeometry(0.5, 0.25, 0.8), cyan, [-2, -0.3, 0])
    addMesh(new THREE.BoxGeometry(0.5, 0.25, 0.8), cyan, [2, -0.3, 0])

    // Transparent containment pod, colored caps, and orbit ring.
    const pod = addMesh(new THREE.CylinderGeometry(1.65, 1.65, 3.6, 24, 1, true), glass, [0, 0, 0])
    addMesh(new THREE.CylinderGeometry(1.75, 1.75, 0.35, 24), metal, [0, 1.8, 0])
    addMesh(new THREE.CylinderGeometry(1.75, 1.75, 0.35, 24), metal, [0, -1.8, 0])
    const podRing = addMesh(new THREE.TorusGeometry(1.7, 0.1, 14, 32), cyan, [0, 1.8, 0])
    podRing.rotation.x = Math.PI / 2
    const podHalo = addMesh(new THREE.TorusGeometry(1.7, 0.2, 12, 32), glow, [0, 1.8, 0])
    podHalo.rotation.x = Math.PI / 2
    const baseLight = new THREE.MeshBasicMaterial({ color: 0xdfffff, toneMapped: false })
    const baseGlow = new THREE.MeshBasicMaterial({ color: 0x63f6ff, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })
    const baseRing = addMesh(new THREE.TorusGeometry(1.75, 0.035, 10, 48), baseLight, [0, -1.59, 0])
    baseRing.rotation.x = Math.PI / 2
    const baseHalo = addMesh(new THREE.TorusGeometry(1.75, 0.095, 10, 48), baseGlow, [0, -1.59, 0])
    baseHalo.rotation.x = Math.PI / 2

    // Small robot mascot suspended inside the pod.
    const mascot = new THREE.Group()
    robot.add(mascot)
    addMesh(new THREE.BoxGeometry(0.9, 0.9, 0.8), metal, [0, 0, 0], mascot)
    const visor = addMesh(new THREE.BoxGeometry(0.72, 0.42, 0.12), new THREE.MeshBasicMaterial({ color: 0x00f0ff }), [0, 0.08, 0.42], mascot)
    visor.material.toneMapped = false
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x07090e })
    addMesh(new THREE.SphereGeometry(0.07, 12, 12), eyeMaterial, [-0.18, 0.08, 0.49], mascot)
    addMesh(new THREE.SphereGeometry(0.07, 12, 12), eyeMaterial, [0.18, 0.08, 0.49], mascot)
    addMesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35), metal, [0, 0.62, 0], mascot)
    addMesh(new THREE.SphereGeometry(0.1, 12, 12), purple, [0, 0.85, 0], mascot)

    const resize = () => {
      const width = mount.clientWidth || 1
      const height = mount.clientHeight || 1
      camera.position.set(0, 0, 15.5)
      camera.fov = 38
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    const onPointerMove = event => {
      const rect = renderer.domElement.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      mousePosition.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mousePosition.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }
    const onPointerLeave = () => {
      mousePosition.current.x = 0
      mousePosition.current.y = 0
    }
    renderer.domElement.addEventListener('pointermove', onPointerMove)
    renderer.domElement.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('resize', resize)
    resize()

    const clock = new THREE.Clock()
    let frameId
    const render = () => {
      const time = clock.getElapsedTime()
      robot.rotation.y += (targetRotationY.current + mousePosition.current.x * 0.4 - robot.rotation.y) * 0.05
      robot.rotation.x += (-mousePosition.current.y * 0.2 - robot.rotation.x) * 0.05
      mascot.position.y = Math.sin(time * 2.2) * 0.16
      mascot.rotation.y += 0.015
      pod.rotation.y -= 0.005
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      renderer.domElement.removeEventListener('pointermove', onPointerMove)
      renderer.domElement.removeEventListener('pointerleave', onPointerLeave)
      scene.traverse(object => {
        object.geometry?.dispose()
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach(material => material.dispose())
        }
      })
      renderer.dispose()
      if (audioRef.current) {
        audioRef.current.context.close()
        audioRef.current = null
      }
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="relative mx-auto h-[460px] w-full max-w-[420px] select-none overflow-hidden lg:h-[500px]">
    <div ref={mountRef} className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing" aria-label="Interactive 3D robotic apparatus holding an AI mascot" />
  </div>
})

export default HeroRobot3D
