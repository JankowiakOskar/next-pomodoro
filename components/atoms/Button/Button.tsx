import styles from './Button.module.scss';
import theme from 'styles/Theme.module.scss';
import { BgClasses, FontClasses, ModeName } from 'store/types';
import classNames from 'classnames';

type Props = {
  text: ModeName;
  isActive?: boolean;
  setActiveMode?: (text: ModeName) => void;
  bgClass: BgClasses;
  fontClass: FontClasses;
};

const Button: React.FC<Props> = ({
  text,
  isActive = false,
  setActiveMode,
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
    if (setActiveMode) {
      return setActiveMode(text);
    }
    return;
  };

  return (
    <button className={btnClass} onClick={() => handleClick()}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
