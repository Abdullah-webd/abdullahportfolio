import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();

  // Detect mobile device
  const isMobile = window.innerWidth < 768;
  const starCount = isMobile ? 1500 : 3000;
  const starSize = isMobile ? 0.008 : 0.02; // Smaller stars on mobile

  // Generate star positions (memoized for performance)
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(starCount * 3), { radius: 5 });
  }, [starCount]);

  // Apply rotation animation
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05; // Adjusted rotation speed
      ref.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={starSize} // Dynamically adjust size
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
      <Canvas
        camera={{ position: [0, 0, 4] }} // Slightly adjusted camera position
        dpr={[1, 1.5]} // Lower DPR for better performance
        frameloop="always" // Keeps animation smooth
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
