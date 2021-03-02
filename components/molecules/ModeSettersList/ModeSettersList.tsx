import theme from 'styles/Theme.module.scss';
import styles from './ModeSettersList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { updateMode } from 'store/actions';
import { Mode, AppState } from 'store/types';
import InputElement from 'components/molecules/InputElement/InputElement';

type Props = {
  modes: Mode[];
};

const ModeSettersList: React.FC<Props> = ({ modes }) => {
  const {
    mainReducer: { fontTheme },
  } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const textClass = theme[fontTheme];
  return (
    <div className={styles.wrapper}>
      <h4 className={textClass}>Time (minutes)</h4>
      <div className={styles.modeList}>
        {modes.map(({ mode, time: { minutes } }) => (
          <InputElement
            key={mode}
            className={styles.modeListElement}
            label={mode}
            labelFont={textClass}
            value={minutes}
            setVal={({ label, value }) =>
              dispatch(updateMode({ mode: label, time: { minutes: value } }))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ModeSettersList;
