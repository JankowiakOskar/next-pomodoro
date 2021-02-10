import styles from './Button.module.scss';
import classNames from 'classnames';

type Props = {
  text: string;
  isActive?: boolean;
};

const Button: React.FC<Props> = ({ text, isActive = false }): JSX.Element => {
  const btnClass: string = classNames(styles.button, {
    [styles.orange]: isActive,
  });

  return (
    <button className={btnClass}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
