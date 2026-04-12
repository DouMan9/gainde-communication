import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const MouseParticles = () => {
  const { viewport } = useThree();
  const count = 60;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const positions = useRef<Float32Array>(new Float32Array(count * 3));
  const velocities = useRef<Float32Array>(new Float32Array(count * 3));
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useMemo(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 6;
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 2;
      velocities.current[i * 3] = 0;
      velocities.current[i * 3 + 1] = 0;
      velocities.current[i * 3 + 2] = 0;
    }
  }, []);

  useFrame((state) => {
    const { pointer } = state;
    mouse.current.set(pointer.x * viewport.width * 0.5, pointer.y * viewport.height * 0.5);

    if (!meshRef.current) return;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const dx = mouse.current.x - positions.current[i3];
      const dy = mouse.current.y - positions.current[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = Math.max(0, 1.5 - dist) * 0.008;

      velocities.current[i3] += dx * force;
      velocities.current[i3 + 1] += dy * force;
      velocities.current[i3] *= 0.96;
      velocities.current[i3 + 1] *= 0.96;

      positions.current[i3] += velocities.current[i3];
      positions.current[i3 + 1] += velocities.current[i3 + 1];

      const scale = 0.02 + Math.max(0, 1 - dist * 0.5) * 0.04;
      dummy.position.set(positions.current[i3], positions.current[i3 + 1], positions.current[i3 + 2]);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color="#D8E0E2" emissive="#ADBBC2" emissiveIntensity={0.8} transparent opacity={0.7} />
    </instancedMesh>
  );
};

const LionMesh = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });

  const maneColor = "#979EA1";
  const faceColor = "#ADBBC2";

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} scale={1.1}>
        {/* Head base */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <MeshDistortMaterial
            color={faceColor}
            metalness={0.9}
            roughness={0.15}
            distort={0.05}
            speed={1.5}
          />
        </mesh>

        {/* Mane - ring of distorted spheres */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 1.05;
          return (
            <mesh key={i} position={[Math.cos(angle) * r, Math.sin(angle) * r, -0.15]}>
              <sphereGeometry args={[0.35, 16, 16]} />
              <MeshDistortMaterial
                color={maneColor}
                metalness={0.85}
                roughness={0.2}
                distort={0.15}
                speed={2}
              />
            </mesh>
          );
        })}

        {/* Eyes */}
        {[-0.25, 0.25].map((x, i) => (
          <mesh key={`eye-${i}`} position={[x, 0.15, 0.7]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#000000" metalness={1} roughness={0} />
          </mesh>
        ))}

        {/* Nose */}
        <mesh position={[0, -0.1, 0.75]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#636464" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Ears */}
        {[-0.55, 0.55].map((x, i) => (
          <mesh key={`ear-${i}`} position={[x, 0.7, -0.1]}>
            <coneGeometry args={[0.18, 0.35, 8]} />
            <meshStandardMaterial color={maneColor} metalness={0.85} roughness={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

const LionHead3D = () => (
  <div className="absolute inset-0 z-0">
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#D8E0E2" />
      <directionalLight position={[-3, -2, 4]} intensity={0.4} color="#ADBBC2" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#D8E0E2" />
      <LionMesh />
      <MouseParticles />
    </Canvas>
  </div>
);

export default LionHead3D;
