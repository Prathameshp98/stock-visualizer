
export default interface PriceCardProps {
    cardData: {
      current_price: number;
      price_change: number;
      percentage_change: number;
    }
    currency?: string;
  }