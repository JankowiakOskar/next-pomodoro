import styles from './SettingsIcon.module.scss';
import Settings from 'assets/svgs/icon-settings.svg';

const SettingsIcon = (): JSX.Element => {
  return (
    <>
      <Settings className={styles.settingsIcon} />
    </>
  );
};

export default SettingsIcon;
