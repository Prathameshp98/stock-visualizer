
import { PriceCard } from "./components";

const StockVisualizer = () => {
  return (
    <div>
      <PriceCard 
        price={63197.71}
        change={2161.42}
        percentage={-3.54}
        currency="USD"
      />
    </div>
  );
}

export default StockVisualizer;