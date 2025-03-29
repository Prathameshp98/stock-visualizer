import styles from './ChartFlow.module.css';
import ChartFlowProps from './ChartFlow.d';
import ChartOptions from '../ChartOptions/ChartOptions';

const ChartFlow = () => {
    return (
        <div className={styles.chart}>
            <div className={styles.chartOption}>
                <ChartOptions />
            </div>
        </div>
    )
}

export default ChartFlow;