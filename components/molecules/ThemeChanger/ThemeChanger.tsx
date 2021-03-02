import theme from 'styles/Theme.module.scss';
import styles from './ThemeChanger.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTheme } from 'store/actions';
import { FontClasses, BgClasses, AppState, Theme } from 'store/types';
import CircleSwitcher from 'components/atoms/CircleSwitcher/CircleSwitcher';
import classNames from 'classnames';

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
  const textClasses = classNames(styles.title, theme[fontTheme]);
  return (
    <div className={styles.wrapper}>
      <h4 className={textClasses}>{title}</h4>
      <div className={styles.switchesWrapper}>
        {switchesList.map((switcher) => {
          const isActive = [colorTheme, fontTheme].includes(switcher);
          const isFontSwitcher = Object.values<FontClasses | BgClasses>(FontClasses).includes(
            switcher
          );

          return (
            <CircleSwitcher
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
