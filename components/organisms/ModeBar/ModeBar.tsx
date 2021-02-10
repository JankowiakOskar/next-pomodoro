import styles from './ModeBar.module.scss';
import Button from 'components/atoms/Button/Button';

const ModeBar = (): JSX.Element => {
  return (
    <div className={styles.bar}>
      <Button text="pomodoro" />
      <Button text="short break" />
      <Button text="long break" />
    </div>
  );
};

export default ModeBar;
