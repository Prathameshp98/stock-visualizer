import styles from './ChartOptions.module.css';
import { CHART_OPTIONS } from '../../constants/constants';

const ChartOptions = () => {
    return (
        <div className={styles.options}>
            {CHART_OPTIONS.map((option) => (
                <div 
                    key={option.id}
                    className={styles.option}
                >
                    <img 
                        alt={option.name}
                        src={option.icon}
                    />
                    <p>{option.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ChartOptions;