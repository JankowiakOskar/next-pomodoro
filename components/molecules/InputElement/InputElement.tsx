import { useState } from 'react';
import styles from './InputElement.module.scss';
import ArrowDown from 'assets/icon-arrow-down.svg';
import ArrowUp from 'assets/icon-arrow-up.svg';

type InputElementProps = {
  label: string;
  initValue: number;
};

type UserEvent = {
  target: HTMLInputElement;
};

enum ClickAction {
  increment = 'inc',
  decrement = 'dec',
}

const InputElement: React.FC<InputElementProps> = ({ label, initValue }) => {
  const [value, setValue] = useState(initValue);
  const disablingCondition = (val: number): boolean => val < 0 || val > 60;

  const handleClick = (val: number, action: ClickAction): void => {
    const nextVal: number = action === ClickAction.decrement ? (val -= 1) : (val += 1);
    const notAllowedValue: boolean = disablingCondition(nextVal);
    if (notAllowedValue) return;
    setValue(nextVal);
  };

  const handleChange = (e: UserEvent): void => {
    const newVal: number = +e.target.value;
    const notAllowedValue: boolean = disablingCondition(newVal);
    if (notAllowedValue) return;
    setValue(newVal);
  };

  return (
    <div>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input}
          name={label}
          type="tel"
          onChange={(e) => handleChange(e)}
          value={value}
        />
        <div className={styles.icon_wrapper}>
          <ArrowUp
            className={styles.arrow_icon}
            onClick={() => handleClick(value, ClickAction.increment)}
          />
          <ArrowDown
            className={styles.arrow_icon}
            onClick={() => handleClick(value, ClickAction.decrement)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputElement;
