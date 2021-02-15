import theme from 'styles/Theme.module.scss';
import styles from './TimePanel.module.scss';
import classNames from 'classnames';
import { AppState, TimeStamp, Mode } from 'store/types';
import { updateMode } from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { getMode, convertTimeToSec, cutStr, formatTimeFromSec } from 'utils';

const TimePanel = (): JSX.Element => {
  const { mainReducer: data } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();
  const { appModes: modes, activeMode, fontTheme, colorTheme }: AppState = data;
  const { mode, time, isPlaying } = getMode(activeMode, modes);
  const secondsToCount = convertTimeToSec(time);
  const colorProperty = cutStr(colorTheme, 2);
  const timerBgColor = theme[colorProperty];
  const textClass = classNames(theme[fontTheme]);
  const toggleTimer = (time: TimeStamp): void => {
    const changedMode: Mode = {
      mode,
      time,
      isPlaying: !isPlaying,
    };
    dispatch(updateMode(changedMode));
  };
  return (
    <div className={styles.panelWrapper}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        key={activeMode}
        duration={secondsToCount}
        colors={timerBgColor}
        size={240}
        strokeWidth={8}
        trailColor="rgba(0,0,0,0)"
      >
        {({ remainingTime }) => {
          const timeLeft = remainingTime || secondsToCount;
          const [minutes, seconds] = formatTimeFromSec(timeLeft);

          return (
            <div className={styles.timeControlWrapper}>
              <h1 className={textClass}>{`${minutes}:${seconds}`}</h1>
              <button
                className={styles.button}
                onClick={() => toggleTimer({ minutes: +minutes, seconds: +seconds })}
              >
                <h3 className={textClass}>{isPlaying ? 'Pause' : 'Start'}</h3>
              </button>
            </div>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default TimePanel;
