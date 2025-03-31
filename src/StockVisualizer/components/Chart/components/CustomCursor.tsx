
import { CSSProperties } from 'react';

const labelStyle: CSSProperties = { 
  backgroundColor: '#4f46e5',
  color: '#fff',
  padding: '5px 0px',
  borderRadius: '5px',
  fontSize: '18px',
  fontWeight: '500',
  textAlign: 'center', 
};

const CustomLabel = ({
  x,
  y,
  value,
}: {
  x?: number;
  y?: number;
  value?: number | string;
}) => {
  if (!x || !y || value === undefined) return null;

  return (
    <foreignObject
      x={x}
      y={200 - y}
      width={value.toString().length * 10 + 40}
      height={32}
    >
      <div style={labelStyle}>${value}</div>
    </foreignObject>
  );
};

export default CustomLabel;