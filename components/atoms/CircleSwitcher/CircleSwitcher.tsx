import styles from './CircleSwitcher.module.scss';
import theme from 'styles/Theme.module.scss';
import { FontClasses, BgClasses, ThemeType, Theme } from 'store/types';
import classNames from 'classnames';

type Props = {
  isActive?: boolean;
  isFontSwitcher: boolean;
  switcher: FontClasses | BgClasses;
  setTheme: (theme: Theme) => void;
};

const CircleSwitcher: React.FC<Props> = ({ isActive, isFontSwitcher, switcher, setTheme }) => {
  const circleClass: string = classNames({
    [styles.circleGrey]: isFontSwitcher,
    [styles.circle]: !isFontSwitcher,
    [theme[switcher]]: switcher,
    [styles.activeBg]: isFontSwitcher && isActive,
    [styles.selected]: !isFontSwitcher && isActive,
  });

  const handleTheming = (): void =>
    isFontSwitcher
      ? setTheme({ type: ThemeType.FontTheme, class: switcher })
      : setTheme({ type: ThemeType.ColorTheme, class: switcher });
  return (
    <div
      className={circleClass}
      role="button"
      tabIndex={0}
      onClick={handleTheming}
      onKeyPress={handleTheming}
    >
      {isFontSwitcher && <span>Aa</span>}
    </div>
  );
};

export default CircleSwitcher;
