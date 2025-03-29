import { useState } from 'react';
import styles from './Tabs.module.css';
import TabsProps from './Tabs.d';

const tabs = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

const Tabs = ({
  getSelectedTab
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabSelection = (tab: string) => {
    setActiveTab(tab);
    if (getSelectedTab) {
      getSelectedTab(tab);
    }
  };
  
  const handleTabSelectionWithKey = (e: React.KeyboardEvent, tab: string) => {
    if (e.key === 'Enter') {
      handleTabSelection(tab);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => handleTabSelection(tab)}
            onKeyDown={(e) => handleTabSelectionWithKey(e, tab)}
            role="button"
            tabIndex={0}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
