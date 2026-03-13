"use client";

import { Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const keywords = [
  { label: "SEO", position: [0.1, 0.82, 0.25] as [number, number, number] },
  { label: "Traffic", position: [-0.82, 0.18, 0.3] as [number, number, number] },
  { label: "Growth", position: [0.84, 0.12, 0.2] as [number, number, number] },
  { label: "Analytics", position: [-0.18, -0.72, 0.3] as [number, number, number] },
  { label: "Conversion", position: [0.18, -0.06, 0.92] as [number, number, number] },
  { label: "Ranking", position: [0.04, 0.1, -0.86] as [number, number, number] }
];

function ParticleSphere({ particleCount }: { particleCount: number }) {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const points = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i += 1) {
      const radius = 1.28 + Math.random() * 0.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      points[i * 3] = x;
      points[i * 3 + 1] = y;
      points[i * 3 + 2] = z;
    }

    return points;
  }, [particleCount]);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const time = state.clock.elapsedTime;
    const pointerX = state.pointer.x * 0.12;
    const pointerY = state.pointer.y * 0.1;

    group.current.rotation.y = time * 0.14 + pointerX;
    group.current.rotation.x = Math.sin(time * 0.32) * 0.05 + pointerY;
    group.current.position.y = Math.sin(time * 0.55) * 0.05;
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#8cc4ff"
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.88}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <mesh>
        <sphereGeometry args={[1.12, 24, 24]} />
        <meshBasicMaterial color="#6bb3ff" transparent opacity={0.038} wireframe />
      </mesh>

      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.52, 0.01, 20, 128]} />
        <meshBasicMaterial color="#d7ebff" transparent opacity={0.34} />
      </mesh>

      <mesh rotation={[0.9, 0.6, 0.25]}>
        <torusGeometry args={[1.78, 0.012, 20, 128]} />
        <meshBasicMaterial color="#ff9f73" transparent opacity={0.2} />
      </mesh>

      {keywords.map((keyword, index) => (
        <Html key={keyword.label} position={keyword.position} center distanceFactor={8.5} transform>
          <div
            className="rounded-full border border-white/15 bg-[rgba(8,16,30,0.72)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white shadow-[0_0_24px_rgba(107,179,255,0.14)] backdrop-blur-md"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {keyword.label}
          </div>
        </Html>
      ))}
    </group>
  );
}

export function HeroCanvas() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches || !window.matchMedia("(pointer:fine)").matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  const particleCount = reducedMotion ? 520 : 920;

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }} dpr={reducedMotion ? 1 : [1, 1.25]} performance={{ min: 0.5 }} gl={{ antialias: false, powerPreference: "low-power" }}>
        <color attach="background" args={["#050b14"]} />
        <ambientLight intensity={0.55} />
        <pointLight position={[3, 2, 4]} intensity={12} color="#6bb3ff" />
        <pointLight position={[-2, -1, 3]} intensity={7} color="#ff9f73" />
        <ParticleSphere particleCount={particleCount} />
      </Canvas>
    </div>
  );
}
