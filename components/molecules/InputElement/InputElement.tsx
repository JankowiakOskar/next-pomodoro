import styles from './InputElement.module.scss';
import { ModeName } from 'store/types';
import ArrowDown from 'assets/svgs/icon-arrow-down.svg';
import ArrowUp from 'assets/svgs/icon-arrow-up.svg';
import classNames from 'classnames';
type InputElementProps = {
  className: string;
  label: ModeName;
  value: number;
  labelFont?: string;
  setVal: (arg: { label: ModeName; value: number }) => void;
};

type UserEvent = {
  target: HTMLInputElement;
};

enum ClickAction {
  increment = 'inc',
  decrement = 'dec',
}

const InputElement: React.FC<InputElementProps> = ({
  className,
  label,
  value,
  setVal,
  labelFont,
}) => {
  const labelClasses = classNames(styles.label, labelFont);

  const disablingCondition = (val: number): boolean => val <= 0 || val > 60;

  const handleClick = (val: number, action: ClickAction): void => {
    const nextVal: number = action === ClickAction.decrement ? (val -= 1) : (val += 1);
    const notAllowedValue: boolean = disablingCondition(nextVal);
    if (notAllowedValue) return;
    setVal({ label, value: nextVal });
  };

  const handleChange = (e: UserEvent): void => {
    const newVal: number = +e.target.value;
    const notAllowedValue: boolean = disablingCondition(newVal);
    if (notAllowedValue) return;
    setVal({ label, value: newVal });
  };

  return (
    <div className={className}>
      <label className={labelClasses} htmlFor={label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          name={label}
          type="number"
          onChange={(e) => handleChange(e)}
          value={value.toString()}
        />
        <div className={styles.iconWrapper}>
          <ArrowUp
            className={styles.arrow_icon}
            onClick={() => handleClick(value, ClickAction.increment)}
          />
          <ArrowDown
            className={styles.arrowIcon}
            onClick={() => handleClick(value, ClickAction.decrement)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputElement;
