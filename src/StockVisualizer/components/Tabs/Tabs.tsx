import { useState } from 'react';
import styles from './Tabs.module.css';
import TabsProps from './Tabs.d';

const Tabs = ({
  getSelectedTab,
  options,
  type
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(options[0]);
  const containerClass = `${styles.container} ${type == 'button' && styles.buttonContainer}`;
  const tabsClass = `${styles.tabs} ${type == 'button' && styles.buttonTabs}`

  const tabClass = (tab: string) => `
    ${styles.tab}
    ${type == 'line' ? styles.lineTab : styles.buttonTab} 
    ${activeTab === tab ? styles.active : ''}
  `;

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
    <div className={containerClass}>
      <div className={tabsClass}>
        {options.map((tab) => (
          <div
            key={tab}
            className={tabClass(tab)}
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
