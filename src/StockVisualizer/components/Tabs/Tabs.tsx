import styles from './Tabs.module.css';
import TabsProps from './Tabs.d';

const Tabs = ({
  options,
  type,
  activeTab,
  setActiveTab
}: TabsProps) => {
  
  const containerClass = `${styles.container} ${type == 'button' && styles.buttonContainer}`;
  const tabsClass = `${styles.tabs} ${type == 'button' && styles.buttonTabs}`

  const tabClass = (tab: number) => `
    ${styles.tab}
    ${type == 'line' ? styles.lineTab : styles.buttonTab} 
    ${activeTab === tab ? styles.active : ''}
  `;


  const handleTabSelection = (tab: number) => {
    setActiveTab(tab);
  };
  
  const handleTabSelectionWithKey = (e: React.KeyboardEvent, tab: number) => {
    if (e.key === 'Enter') {
      handleTabSelection(tab);
    }
  };

  return (
    <div className={containerClass}>
      <div className={tabsClass}>
        {options.map((tab) => (
          <div
            key={tab.id}
            className={tabClass(tab.id)}
            onClick={() => handleTabSelection(tab.id)}
            onKeyDown={(e) => handleTabSelectionWithKey(e, tab.id)}
            role="button"
            tabIndex={0}
          >
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
