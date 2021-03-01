import styles from './ThemeChanger.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTheme } from 'store/actions';
import { FontClasses, BgClasses, AppState, Theme } from 'store/types';
import CircleSwticher from 'components/atoms/CircleSwitcher/CircleSwitcher';

type Title = 'Font' | 'Color';

type Props = {
  title: Title;
  switchesList: Array<BgClasses | FontClasses>;
};

const ThemeChanger: React.FC<Props> = ({ title, switchesList }) => {
  const {
    mainReducer: { colorTheme, fontTheme },
  } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.switchesWrapper}>
        {switchesList.map((switcher) => {
          const isActive = [colorTheme, fontTheme].includes(switcher);
          const isFontSwitcher = Object.values<FontClasses | BgClasses>(FontClasses).includes(
            switcher
          );

          return (
            <CircleSwticher
              key={switcher}
              isActive={isActive}
              isFontSwitcher={isFontSwitcher}
              switcher={switcher}
              setTheme={(theme: Theme) => dispatch(setActiveTheme(theme))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemeChanger;
