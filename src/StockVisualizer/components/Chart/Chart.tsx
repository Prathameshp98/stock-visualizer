import {
    LineChart,
    Line,
    Tooltip,
    ResponsiveContainer,
    Label,
    ReferenceDot,
    Area,
} from 'recharts';

// Get the last point for displaying value
// const lastPoint = data[data.length - 1];

const Chart = ({
    chartData
}: {
    chartData: {
        date: string;
        value: number;
    }[];
}) => {
    return (
        <ResponsiveContainer width={850} height={300}>
            <LineChart data={chartData} margin={{ top: 20, right: 50, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="gradientFill">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <Tooltip contentStyle={{ display: 'none' }} />

                {/* Gradient Fill Below Line */}
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="none"
                    fill="url(#gradientFill)"
                />

                {/* Main Line */}
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    dot={false}
                />

                {/* Label at End of the Line */}
                <ReferenceDot
                    x={chartData.length - 1} // Position at last point
                    // y={lastPoint.value}
                    r={0} // Hide the reference dot
                >
                    <Label
                        // value={`$${lastPoint.value.toLocaleString()}`}
                        position="right"
                        offset={15}
                        fill="#fff"
                        style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            padding: '5px 10px',
                            backgroundColor: '#4f46e5',
                            borderRadius: '10px',
                            border: '1px solid #4f46e5',
                        }}
                    />
                </ReferenceDot>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
