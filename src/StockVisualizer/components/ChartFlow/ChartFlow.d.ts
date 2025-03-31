
export default interface ChartFlowProps {
    chartData: {
        date: string;
        value: number;
    }[];
    getSelectedDuration: (duration: number) => void
}