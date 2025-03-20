import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Suspense } from 'react';

const Ball = (props) => {
  console.log("Ball Component imgUrl:", props.imgUrl); // Debugging log

  if (!props.imgUrl) {
    console.error("Error: imgUrl is missing in Ball component", props);
    return null;
  }

  const [decal] = useTexture([props.imgUrl || "/fallback-texture.png"]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Replace icosahedronGeometry with boxGeometry to test */}
        <icosahedronGeometry args={[1, 1]} />
        
        {/* Check if position attribute contains NaN before rendering */}
        {decal && (
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
        )}

        {decal && (
          <Decal
            map={decal}
            flatShading
            position={[0, 0, 1]}
            rotation={[0, 0, 0]} // Fixed rotation
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {icon ? <Ball imgUrl={icon} /> : console.error("Error: Icon is missing in BallCanvas")}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
