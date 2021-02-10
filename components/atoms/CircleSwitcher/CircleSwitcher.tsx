import styles from './CircleSwitcher.module.scss';
import theme from 'styles/Theme.module.scss';
import { FontClasses, BgClasses } from 'utils/types';
import classNames from 'classnames';

type Props = {
  fontClass?: FontClasses;
  isActive?: boolean;
  bgClass?: BgClasses;
};

const CircleSwitcher: React.FC<Props> = ({
  fontClass = '',
  isActive,
  bgClass = '',
}): JSX.Element => {
  const circleClass: string = classNames(styles.circle, {
    [theme[bgClass]]: bgClass,
    [theme[fontClass]]: fontClass,
    [styles.active_bg]: fontClass && isActive,
    [styles.selected]: bgClass && isActive,
  });
  return <div className={circleClass}>{!bgClass && <span>Aa</span>}</div>;
};

export default CircleSwitcher;
