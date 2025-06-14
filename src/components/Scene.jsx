import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/models/eye.glb');
  return <primitive object={scene} />;
}

export default function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '500px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 2]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}
