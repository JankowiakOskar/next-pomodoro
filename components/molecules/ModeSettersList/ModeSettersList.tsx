import styles from './ModeSettersList.module.scss';
import { useDispatch } from 'react-redux';
import { updateMode } from 'store/actions';
import { Mode } from 'store/types';
import InputElement from 'components/molecules/InputElement/InputElement';

type Props = {
  modes: Mode[];
};

const ModeSettersList: React.FC<Props> = ({ modes }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <h4>Time (minutes)</h4>
      <div className={styles.modeList}>
        {modes.map(({ mode, time: { minutes } }) => (
          <InputElement
            key={mode}
            className={styles.modeListElement}
            label={mode}
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
