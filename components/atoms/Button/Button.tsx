import styles from './Button.module.scss';
import theme from 'styles/Theme.module.scss';
import { BgClasses, FontClasses, ModeName } from 'store/types';
import classNames from 'classnames';

type Props = {
  text?: string;
  modeTitle?: ModeName;
  isActive?: boolean;
  setActiveMode?: (text: ModeName) => void;
  callBackOnClick?: () => void;
  bgClass: BgClasses;
  fontClass: FontClasses;
};

const Button: React.FC<Props> = ({
  text,
  modeTitle,
  isActive = false,
  setActiveMode,
  callBackOnClick,
  bgClass,
  fontClass,
}): JSX.Element => {
  const btnClass: string = classNames(styles.button, {
    [styles.orange]: isActive && bgClass === BgClasses.Orange,
    [styles.purple]: isActive && bgClass === BgClasses.Purple,
    [styles.lightBlue]: isActive && bgClass === BgClasses.LightBlue,
    [theme[fontClass]]: fontClass,
  });

  const handleClick = (): void => {
    if (modeTitle && setActiveMode) {
      return setActiveMode(modeTitle);
    }
    if (callBackOnClick) {
      callBackOnClick();
    }
    return;
  };

  return (
    <button className={btnClass} onClick={() => handleClick()}>
      <span>{text || modeTitle}</span>
    </button>
  );
};

export default Button;
