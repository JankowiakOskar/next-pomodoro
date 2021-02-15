import styles from 'styles/pages/Home.module.scss';
import Logo from 'assets/logo.svg';
import ModeBar from '@/components/organisms/ModeBar/ModeBar';
import TimePanel from '@/components/organisms/TimePanel/TimePanel';
import Settings from 'assets/icon-settings.svg';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Logo />
      <ModeBar />
      <TimePanel />
      <Settings />
    </div>
  );
}
