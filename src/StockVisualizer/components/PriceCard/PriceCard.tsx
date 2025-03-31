import styles from './PriceCard.module.css';
import PriceCardProps from './PriceCard.d';

const PriceCard = ({ 
    cardData,
    currency = 'USD' 
}: PriceCardProps) => {
  const { current_price, price_change, percentage_change} = cardData
  const isPositive = price_change >= 0;

  return (
    <div className={styles.card}>
      <div className={styles.price}>
        {current_price.toLocaleString()} <span className={styles.currency}>{currency}</span>
      </div>
      <div className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
        {isPositive ? '+' : ''}
        {price_change.toLocaleString()} ({percentage_change.toFixed(2)}%)
      </div>
    </div>
  );
};

export default PriceCard;
