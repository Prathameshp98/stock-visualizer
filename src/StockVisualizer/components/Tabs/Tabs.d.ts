
export default interface TabsProps {
    options: string[];
    type: 'line' | 'button';
    activeTab: string;
    setActiveTab: (tab: string) => void;
}