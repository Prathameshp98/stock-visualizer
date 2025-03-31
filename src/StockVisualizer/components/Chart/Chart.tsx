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
                    <linearGradient id="gradientFill" x1="0" y1="0" x2="0" y2="1">
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
                    fillOpacity={1}
                />

                {/* Main Line */}
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Chart;
