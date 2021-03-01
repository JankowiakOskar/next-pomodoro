import styles from 'styles/pages/Home.module.scss';
import { AppState, FontClasses, BgClasses } from 'store/types';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'store/actions';
import Logo from 'assets/svgs/logo.svg';
import ModeBar from '@/components/organisms/ModeBar/ModeBar';
import TimePanel from '@/components/organisms/TimePanel/TimePanel';
import Modal from 'components/organisms/Modal/Modal';
import ModeSettersList from 'components/molecules/ModeSettersList/ModeSettersList';
import ThemeChanger from 'components/molecules/ThemeChanger/ThemeChanger';
import SettingsIcon from '@/components/atoms/SettingsIcon/SettingsIcon';

const fonts = Object.values(FontClasses);
const colors = Object.values(BgClasses);

const Home = (): React.ReactNode => {
  const {
    mainReducer: { appModes, isModalOpen },
  } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  const handleModalOpening = (): typeof toggleModal => dispatch(toggleModal());

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.modeBarWrapper}>
        <ModeBar />
      </div>
      <TimePanel />
      <div
        className={styles.settingsWrapper}
        onClick={handleModalOpening}
        onKeyPress={handleModalOpening}
        role="button"
        tabIndex={0}
      >
        <SettingsIcon />
      </div>
      <Modal modalTitle="Settings" isOpen={isModalOpen} toggleModal={handleModalOpening}>
        <ModeSettersList modes={appModes} />
        <ThemeChanger title="Font" switchesList={fonts} />
        <ThemeChanger title="Color" switchesList={colors} />
      </Modal>
    </div>
  );
};

export default Home;
