import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useMemo(() => useGLTF("./planet/scene.gltf", true), []);

  return (
    <primitive
      object={earth.scene}
      scale={2.2} // Slightly reduced for better performance
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 1.5]} // Lowered DPR to balance performance & quality
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40, // Slightly reduced FOV for better framing
        near: 0.1,
        far: 150, // Adjusted for better depth rendering
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5} // Slower auto-rotation for smoothness
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
