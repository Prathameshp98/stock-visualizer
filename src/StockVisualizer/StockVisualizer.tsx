
import styles from './StockVisualizer.module.css';
import { useState } from 'react';
import { PriceCard, Tabs, ChartFlow } from "./components";
import { TAB_OPTIONS } from './constants/constants';
import data from './constants/sample_data.json';

const StockVisualizer = () => {
    const [activeTab, setActiveTab] = useState<number>(TAB_OPTIONS[0].id);
    const [durationData, setDurationData] = useState(data[0]);

    const handleSelectedDuration = (duration: number) => {
        const selectedData = data.find((each) => parseInt(each.id) === duration);
        if (selectedData) {
            setDurationData(selectedData);
        } else {
            console.error('No data found for the selected duration');
        }
    }

    return (
        <div className={styles.container}>
            <PriceCard 
                cardData={durationData.stats}
                currency="USD"
            />
            <Tabs
                options={TAB_OPTIONS}
                type='line'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {activeTab === 2 ? (
                <ChartFlow 
                    chartData={durationData.data} 
                    getSelectedDuration={handleSelectedDuration}
                />
            ) : (
                <div className={styles.comingSoon}>Coming Soon</div>
            )}
        </div>
    );
}

export default StockVisualizer;