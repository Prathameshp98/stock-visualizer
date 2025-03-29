
import styles from './StockVisualizer.module.css';
import { PriceCard, Tabs, ChartFlow } from "./components";
import { TAB_OPTIONS } from './constants/constants';

const StockVisualizer = () => {
  return (
    <div className={styles.container}>
        <PriceCard 
            price={63197.71}
            change={2161.42}
            percentage={-3.54}
            currency="USD"
        />
        <Tabs
            getSelectedTab={(tab) => console.log(tab)} 
            options={TAB_OPTIONS}
            type='line'
        />
        <ChartFlow />
    </div>
  );
}

export default StockVisualizer;