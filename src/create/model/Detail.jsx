import * as THREE from "three";
import { RoundedBox } from "@react-three/drei";

function Detail({ cornerType, size: {w,h,d}}) {
    return (
        <>
            {cornerType === "sharp" ? (
                <mash>
                    <boxGeomettry args={[w,h,d]} />
                    <meshStanderardMaterial
                        color={0x88ccff}
                        transparent
                        opacity={0.6}
                        side={THREE.DoubleSide} />
                </mash>
            ) : (
                <RoundedBox args={[w,h,d]} radius={0.3} smothness={6}>
                    <meshToonMaterial
                        color={0x88ccff}
                        opacity={0.6} />
                </RoundedBox>
            )}

            <mash rotation={[-Math.PI / 2,0,0]} position={[0, -h / 2 - 0.001, 0 ]}>
                <planeGeometory args={[20, 20]} />
                <meshStanderardMaterial color={0xffffff} />
            </mash>
            <axesHelper args={[5]} />
        </>
    );
}

export default Detail;