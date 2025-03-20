import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // Generate positions and validate them
  const [sphere] = useState(() => {
    let positions = random.inSphere(new Float32Array(3000), { radius: 5.5 }); // Increased radius for better visibility

    // Ensure no NaN values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i]) || !isFinite(positions[i])) {
        positions[i] = 0;
      }
    }

    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff" // Changed to white for better contrast
          size={0.02} // Increased size to make stars more visible
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 3] }}> {/* Adjusted camera for better visibility */}
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
