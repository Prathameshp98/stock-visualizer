import styles from './ChartFlow.module.css';
import ChartFlowProps from './ChartFlow.d';
import ChartOptions from '../ChartOptions/ChartOptions';
import Tabs from '../Tabs/Tabs';
import { TAB_DURATIONS_OPTIONS } from '../../constants/constants';

const ChartFlow = () => {
    return (
        <div className={styles.chart}>
            <div className={styles.chartOption}>
                <ChartOptions />
                <Tabs
                    getSelectedTab={(tab) => console.log(tab)} 
                    options={TAB_DURATIONS_OPTIONS}
                    type='button'
                />
            </div>
        </div>
    )
}

export default ChartFlow;