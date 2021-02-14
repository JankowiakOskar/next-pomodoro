import theme from 'styles/Theme.module.scss';
import styles from './TimePanel.module.scss';
import classNames from 'classnames';
import { AppState } from 'store/types';
import { useSelector } from 'react-redux';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { getMode, convertMinToSec, cutStr, formatTimeFromSec } from 'utils';

const TimePanel = (): JSX.Element => {
  const { mainReducer: data } = useSelector((state: AppState) => state);
  const { appModes: modes, activeMode, fontTheme, colorTheme }: AppState = data;
  const { time, isPlaying } = getMode(activeMode, modes);
  const secondsToCount = convertMinToSec(time.minutes);
  const colorProperty = cutStr(colorTheme, 2);
  const timerBgColor = theme[colorProperty];

  const textClass = classNames(theme[fontTheme]);
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
              <h3 className={textClass}>Start</h3>
            </div>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default TimePanel;
