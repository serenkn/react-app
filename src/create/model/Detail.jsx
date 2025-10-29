import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

function Detail({ cornerType, size: {w,h,d}}) {
    return (
        <>
            {cornerType === "sharp" ? (
                <mesh>
                    <boxGeometry args={[w,h,d]} />
                    <meshStandardMaterial
                        color={0x88ccff}
                        transparent
                        opacity={0.6}
                        side={THREE.DoubleSide} />
                </mesh>
            ) : (
                <RoundedBox args={[w,h,d]} radius={0.3} smothness={6}>
                    <meshToonMaterial
                        color={0x88ccff}
                        opacity={0.6} />
                </RoundedBox>
            )}

            <mesh rotation={[-Math.PI / 2,0,0]} position={[0, -h / 2 - 0.001, 0 ]}>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial  color={0xffffff} />
            </mesh>
            <axesHelper args={[5]} />
        </>
    );
}

export default Detail;