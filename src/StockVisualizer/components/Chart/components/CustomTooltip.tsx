import React from 'react';
import { TooltipProps } from 'recharts';

const tooltipStyles: React.CSSProperties = {
    fontSize: '18px',
    position: 'absolute',
    left: '750px', 
    backgroundColor: '#1A243A',
    color: '#fff',
    padding: '5px 20px',
    borderRadius: '5px',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
    active,
    payload,
    coordinate,
}) => {
    if (active && payload?.length && coordinate) {
        const { y } = coordinate;

        return (
            <div
                style={{
                    ...tooltipStyles,
                    top: `${y}px`,
                }}
            >
                <p style={{ margin: 0, fontWeight: '500' }}>{payload[0].value}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;
