"use client";
import { Canvas } from "@react-three/fiber";

function Three() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 10, near: 0.01, far: 500, position: [3, 3, 5] }}>
        <boxGeometry args={[10, 10, 10]} />
        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Three />
    </main>
  );
}
