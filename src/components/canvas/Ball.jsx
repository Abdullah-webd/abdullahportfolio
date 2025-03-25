import { Canvas, extend } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Register Canvas in React-Three-Fiber
extend({ Canvas });

const Ball = (props) => {
  const imgUrl = props.imgUrl || "/fallback-texture.png"; // Provide a fallback texture
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        {decal && <Decal map={decal} flatShading position={[0, 0, 1]} rotation={[0, 0, 0]} />}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon || "/fallback-texture.png"} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
