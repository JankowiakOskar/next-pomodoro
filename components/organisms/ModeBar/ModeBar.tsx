import styles from './ModeBar.module.scss';
import { AppState, Mode, ModeName } from 'store/types';
import { setActiveMode } from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/atoms/Button/Button';

const ModeBar = (): JSX.Element => {
  const { mainReducer: data } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const { appModes: modes, activeMode, fontTheme, colorTheme }: AppState = data;

  return (
    <div className={styles.bar}>
      {modes.map(({ mode }: Mode) => (
        <Button
          key={mode}
          modeTitle={mode}
          isActive={activeMode === mode}
          setActiveMode={(modeName: ModeName) => dispatch(setActiveMode(modeName))}
          fontClass={fontTheme}
          bgClass={colorTheme}
        />
      ))}
    </div>
  );
};

export default ModeBar;
