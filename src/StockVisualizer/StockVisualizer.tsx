
import { PriceCard, Tabs, ChartFlow } from "./components";
import styles from './StockVisualizer.module.css';

const StockVisualizer = () => {
  return (
    <div className={styles.container}>
        <PriceCard 
            price={63197.71}
            change={2161.42}
            percentage={-3.54}
            currency="USD"
        />
        <Tabs getSelectedTab={(tab) => console.log(tab)} />
        <ChartFlow />
    </div>
  );
}

export default StockVisualizer;