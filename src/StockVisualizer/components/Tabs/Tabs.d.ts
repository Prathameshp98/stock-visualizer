
export default interface TabsProps {
    options: {
        id: number;
        name: string;
    }[];
    type: 'line' | 'button';
    activeTab: number;
    setActiveTab: (tab: number) => void;
}