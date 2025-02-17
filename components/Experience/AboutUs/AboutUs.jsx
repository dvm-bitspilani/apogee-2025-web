/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AboutUs({ scale = 1, position = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF('/models/AboutUsBoard-v1.glb')
  return (
    <group {...props} dispose={null} position={position} scale={scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.001']}
        position={[0.09, -0.03, 0]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text088.geometry}
        material={materials.Material}
        position={[0.047, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/AboutUsBoard-v1.glb')