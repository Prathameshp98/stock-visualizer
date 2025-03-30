import styles from './ChartFlow.module.css';
import { useState } from 'react';
import ChartFlowProps from './ChartFlow.d';
import ChartOptions from '../ChartOptions/ChartOptions';
import Tabs from '../Tabs/Tabs';
import { TAB_DURATIONS_OPTIONS } from '../../constants/constants';

const ChartFlow = () => {
    const [activeTab, setActiveTab] = useState<number>(TAB_DURATIONS_OPTIONS[0].id);

    return (
        <div className={styles.chart}>
            <div className={styles.chartOption}>
                <ChartOptions />
                <Tabs
                    options={TAB_DURATIONS_OPTIONS}
                    type='button'
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
        </div>
    )
}

export default ChartFlow;