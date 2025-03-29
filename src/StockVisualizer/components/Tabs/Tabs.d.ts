
export default interface TabsProps {
    getSelectedTab: (tab: string) => void;
    options: string[];
    type: 'line' | 'button' 
}