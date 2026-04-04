'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Particle {
  position: THREE.Vector3
  velocity: THREE.Vector3
  originalPosition: THREE.Vector3
}

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const pointsRef = useRef<THREE.Points | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Setup Scene
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color('#050d1a')

    // Setup Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 50
    cameraRef.current = camera

    // Setup Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight * 0.7)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer
    containerRef.current.appendChild(renderer.domElement)

    // Create Particles
    const particleCount = 1500
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200
      const y = (Math.random() - 0.5) * 150
      const z = (Math.random() - 0.5) * 100

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Cyan and blue color mix
      const isCyan = Math.random() > 0.5
      if (isCyan) {
        colors[i * 3] = 0 // R
        colors[i * 3 + 1] = Math.random() * 0.8 + 0.2 // G
        colors[i * 3 + 2] = 1 // B
      } else {
        colors[i * 3] = 0 // R
        colors[i * 3 + 1] = Math.random() * 0.4 // G
        colors[i * 3 + 2] = 1 // B
      }

      particles.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.05
        ),
        originalPosition: new THREE.Vector3(x, y, z),
      })
    }

    particlesRef.current = particles

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.6,
    })

    const points = new THREE.Points(geometry, material)
    pointsRef.current = points
    scene.add(points)

    // Add Background Glowing Orbs
    const orbGeometry = new THREE.IcosahedronGeometry(50, 16)
    const orbMaterial = new THREE.MeshBasicMaterial({
      color: '#f97316',
      transparent: true,
      opacity: 0.06,
      wireframe: false,
    })

    const orb1 = new THREE.Mesh(orbGeometry, orbMaterial)
    orb1.position.set(100, 50, -100)
    scene.add(orb1)

    const orb2Material = new THREE.MeshBasicMaterial({
      color: '#ea580c',
      transparent: true,
      opacity: 0.08,
      wireframe: false,
    })
    const orb2 = new THREE.Mesh(orbGeometry, orb2Material)
    orb2.position.set(-80, 0, -80)
    scene.add(orb2)

    // Mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Rotate points
      if (pointsRef.current) {
        pointsRef.current.rotation.x += 0.0002
        pointsRef.current.rotation.y += 0.0001
      }

      // Update particle positions
      const positionAttribute = geometry.getAttribute('position') as THREE.BufferAttribute
      const positions = positionAttribute.array as Float32Array

      particles.forEach((particle, i) => {
        // Slow drift
        particle.position.add(particle.velocity)

        // Mouse repel effect
        const mouseWorldPos = new THREE.Vector3(
          mouseRef.current.x * 100,
          mouseRef.current.y * 75,
          0
        )
        const distance = particle.position.distanceTo(mouseWorldPos)

        if (distance < 100) {
          const direction = particle.position.clone().sub(mouseWorldPos).normalize()
          direction.multiplyScalar((100 - distance) * 0.5)
          particle.position.add(direction)
        }

        // Pull back to original position
        const returnForce = particle.originalPosition
          .clone()
          .sub(particle.position)
          .multiplyScalar(0.01)
        particle.position.add(returnForce)

        // Bounds check
        if (particle.position.length() > 150) {
          particle.position.copy(particle.originalPosition)
        }

        positions[i * 3] = particle.position.x
        positions[i * 3 + 1] = particle.position.y
        positions[i * 3 + 2] = particle.position.z
      })

      positionAttribute.needsUpdate = true

      // Rotate orbs
      orb1.rotation.x += 0.0002
      orb1.rotation.y += 0.0001
      orb2.rotation.x -= 0.0001
      orb2.rotation.y -= 0.0002

      renderer.render(scene, camera)
    }

    animate()

    // Handle Resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight * 0.7
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      orbGeometry.dispose()
      orbMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{
        filter: 'blur(0px)',
      }}
    />
  )
}
