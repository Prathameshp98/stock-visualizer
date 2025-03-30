
import styles from './StockVisualizer.module.css';
import { useState } from 'react';
import { PriceCard, Tabs, ChartFlow } from "./components";
import { TAB_OPTIONS } from './constants/constants';

const StockVisualizer = () => {
    const [activeTab, setActiveTab] = useState<number>(TAB_OPTIONS[0].id);

    return (
        <div className={styles.container}>
            <PriceCard 
                price={63197.71}
                change={2161.42}
                percentage={-3.54}
                currency="USD"
            />
            <Tabs
                options={TAB_OPTIONS}
                type='line'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <ChartFlow />
        </div>
    );
}

export default StockVisualizer;