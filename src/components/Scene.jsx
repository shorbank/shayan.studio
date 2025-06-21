import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

function Model() {
  const gltf = useGLTF('/models/eye.glb');
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return <primitive object={scene} scale={1} />;
}

export default function Scene() {
  return (
    <Canvas style={{ width: '100%', height: '500px' }} camera={{ position: [0, 0, 0.15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 2]} />
      <directionalLight position={[0, 5, 5]} color="fff" />
      <Model />
    </Canvas>
  );
}
