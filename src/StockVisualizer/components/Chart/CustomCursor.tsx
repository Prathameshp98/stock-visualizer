

const CustomCursor = ({ 
    points,
}: { 
    points?: { x: number; y: number }[] 
}) => {
    if (!points || points.length === 0) {
        return null;
    }

    const { x, y } = points[0];

    return (
        <>
            {/* Vertical Line */}
            <line
                x1={x}
                x2={x}
                y1={0}
                y2={300} 
                stroke="#6F7177"
                strokeDasharray="6 6"
                strokeWidth={1}
            />
        </>
    );
};

export default CustomCursor;