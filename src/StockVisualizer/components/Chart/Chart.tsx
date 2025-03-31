import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer,
    Label,
    CartesianGrid,
    ReferenceDot,
    Area,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomCursor from './CustomCursor';
import CustomLabel from './CustomLabel';

const Chart = ({
    chartData
}: {
    chartData: {
        date: string;
        value: number;
    }[];
}) => {
    const lastPoint = chartData[chartData.length - 1];

    return (
        <ResponsiveContainer width={850} height={300}>
            <LineChart data={chartData} margin={{ top: 20, right: 100, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Tooltip
                    content={<CustomTooltip />}
                    cursor={<CustomCursor />} 
                />

                <CartesianGrid
                    horizontal={false} 
                    verticalCoordinatesGenerator={(props) => {
                        const { width, xAxis } = props;
                        const interval = 120; 
                        const numOfLines = Math.floor(width / interval);
                        return Array.from(
                            { length: numOfLines },
                            (_, i) => i * interval + xAxis.x
                        );
                    }}
                />

                <Area
                    type="linear"
                    dataKey="value"
                    stroke="none"
                    fill="url(#gradientFill)"
                    fillOpacity={1}
                />

                <Line
                    type="linear"
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    dot={{ r: 0 }} 
                    activeDot={{ r: 0 }}
                />

                <ReferenceDot
                    x={chartData.length - 1}
                    y={lastPoint.value}
                    r={0}
                >
                    <Label
                        content={
                            <CustomLabel
                                x={chartData.length * 15}
                                y={lastPoint.value}
                                value={lastPoint.value.toFixed(2)}
                            />
                        }
                    />
                </ReferenceDot>
        
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;