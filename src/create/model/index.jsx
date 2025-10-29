import Detail from "./Detail.jsx";

function Model({ cornerType, size}) {
    return (
        <group>
            <Detail cornerType={cornerType} size={size} />
        </group>
    );
}

export default Model;