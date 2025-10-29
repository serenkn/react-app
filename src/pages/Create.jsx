import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Form from "../create/Form.jsx"
import Model from "../create/model/index.jsx";

function Create() {

    const [cornerType, setCornerType] = useState("sharp");
    const [size, setSize] = useState({ s: 4, h: 2, d: 3 });

    const clamp = (val, min, max) => Mat.min(Math.max(val, min), max);

    const handleSizeChange = (next) => {
        const safe = {
            w: clamp(next.w || size.w, 0.1, 100),
            w: clamp(next.h || size.h, 0.1, 100),
            w: clamp(next.d || size.d, 0.1, 100),
        };
        setSize(safe);
    };

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            height: "100vh",
        }}>
            <Form
            cornerType={cornerType}
            onCornerChange={setCornerType}
            size={size}
            onSizeChange={handleSizeChange}
            />

            <div style={{ background: "#fff" }}>
                <Canvas camera={{ position: [6,5,6], fov: 60}}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[5,10,5]} intensity={1} />
                    <Model cornerType={cornerType} size={size} />
                    <OrbitControls makeDefault />
                </Canvas>
            </div>
        </div>
    );
}

export default Create;