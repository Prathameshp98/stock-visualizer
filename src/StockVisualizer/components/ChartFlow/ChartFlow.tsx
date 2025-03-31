import styles from './ChartFlow.module.css';
import { useState, useEffect } from 'react';
import ChartFlowProps from './ChartFlow.d';
import { TAB_DURATIONS_OPTIONS } from '../../constants/constants';
import ChartOptions from '../ChartOptions/ChartOptions';
import Tabs from '../Tabs/Tabs';
import Chart from '../Chart/Chart';

const ChartFlow = ({
    chartData,
    getSelectedDuration
}: ChartFlowProps) => {
    const [activeTab, setActiveTab] = useState<number>(TAB_DURATIONS_OPTIONS[0].id);

    useEffect(() => {
        getSelectedDuration(activeTab);
    }, [activeTab])

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
            <Chart chartData={chartData} />
        </div>
    )
}

export default ChartFlow;