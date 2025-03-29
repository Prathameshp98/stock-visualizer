import styles from './PriceCard.module.css';
import PriceCardProps from './PriceCard.d';

const PriceCard = ({ 
    price, 
    change, 
    percentage, 
    currency = 'USD' 
}: PriceCardProps) => {
  const isPositive = change >= 0;

  return (
    <div className={styles.card}>
      <div className={styles.price}>
        {price.toLocaleString()} <span className={styles.currency}>{currency}</span>
      </div>
      <div className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
        {isPositive ? '+' : ''}
        {change.toLocaleString()} ({percentage.toFixed(2)}%)
      </div>
    </div>
  );
};

export default PriceCard;
