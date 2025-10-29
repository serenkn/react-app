function Form ({ cornerType, onCornerChange, size, onSizeChange }) {
    return (
        <div style={{
            padding: 12,
            borderRight: "1px solid #eee",
            display: "grid",
            gap: 10,
            overflowY: "auto",
            }}>
            <h3>設定</h3>

            <label>角のタイプ</label>
            <div style={{ display: "flex", gap: 8 }}>
                <button
                className={cornerType === "sharp" ?"active" : ""}
                onClick={() => onCornerChange("sharp")}>
                角ばり</button>

            <button
                className={cornerType === "round" ?"active" : ""}
                onClick={() => onCornerChange("round")}>
                丸み</button>
            </div>

            <label>サイズw,h,d</label>
            <div style={{ display: "flex", gap: 8}}>
                <input
                type="number"
                step="0.1"
                value={size.w}
                onChange={e => onSizeChange({...size, w: +e.target.value })} />

                <input
                type="number"
                step="0.1"
                value={size.h}
                onChange={e => onSizeChange({...size, h: +e.target.value })} />

                <input
                type="number"
                step="0.1"
                value={size.d}
                onChange={e => onSizeChange({...size, d: +e.target.value })} />
            </div>
        </div>
    );
}

export default Form;