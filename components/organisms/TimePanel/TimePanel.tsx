import { useState, useEffect } from 'react';
import theme from 'styles/Theme.module.scss';
import styles from './TimePanel.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import useWindowWidth from 'hooks/useWindowWidth';
import { AppState } from 'store/types';
import { MediaBreakPoints } from 'utils/types';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { getMode, convertTimeToSec, cutStr, formatTimeFromSec } from 'utils';

enum TimerMode {
  Restart = 'restart',
  Pause = 'pause',
  Start = 'start',
}

type TimerSize<T> = {
  mobileSize: {
    timerSize: T;
    strokeWidth: T;
  };
  tabletSize: {
    timerSize: T;
    strokeWidth: T;
  };
  desktopSize: {
    timerSize: T;
    strokeWidth: T;
  };
};

const timerSize: TimerSize<number> = {
  mobileSize: {
    timerSize: 240,
    strokeWidth: 8,
  },
  tabletSize: {
    timerSize: 290,
    strokeWidth: 10,
  },
  desktopSize: {
    timerSize: 330,
    strokeWidth: 12,
  },
};

const TimePanel = (): JSX.Element => {
  const { mainReducer: data } = useSelector((state: AppState) => state);
  const { appModes: modes, activeMode, fontTheme, colorTheme }: AppState = data;
  const [isPlaying, setPlaying] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);
  const [isMounted, setMounted] = useState(false);
  const windowWidth = useWindowWidth();
  const { time } = getMode(activeMode, modes);
  const secondsToCount = convertTimeToSec(time);
  const colorProperty = cutStr(colorTheme, 2);
  const timerBgColor = theme[colorProperty];
  const textClass = classNames(theme[fontTheme]);

  const restartTimer = (): void => setReloadKey((prevValue) => (prevValue += 1));
  const toggleCounting = (): void => setPlaying((prevState) => !prevState);
  const getTimerSize = (
    size: TimerSize<number>,
    currWindowWidth: number,
    breakpoints: MediaBreakPoints
  ): [number, number] => {
    const { mobileSize, tabletSize, desktopSize } = size;
    const { tablet, desktop } = breakpoints;
    const isMinTabletDevice = currWindowWidth >= tablet;
    const isDesktopSize = currWindowWidth >= desktop;
    if (isDesktopSize) return [desktopSize.timerSize, desktopSize.strokeWidth];
    return isMinTabletDevice
      ? [tabletSize.timerSize, tabletSize.strokeWidth]
      : [mobileSize.timerSize, mobileSize.strokeWidth];
  };

  const [circleSize, strokeWidth] = getTimerSize(timerSize, windowWidth, {
    tablet: 768,
    desktop: 992,
  });

  useEffect(() => {
    setMounted(true);
    if (isMounted) {
      restartTimer();
      setPlaying(false);
    }
    return () => setMounted(false);
  }, [activeMode, secondsToCount, isMounted]);

  return (
    <div className={styles.panelWrapper}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        key={reloadKey}
        duration={secondsToCount}
        initialRemainingTime={secondsToCount}
        colors={timerBgColor}
        size={circleSize}
        strokeWidth={strokeWidth}
        trailColor="rgba(0,0,0,0)"
      >
        {({ remainingTime }) => {
          const timeLeft = remainingTime === undefined ? secondsToCount : remainingTime;
          const isTimePassed = timeLeft === 0;
          const [minutes, seconds] = formatTimeFromSec(timeLeft);
          const displayCurrTimerMode = (): TimerMode => {
            if (isTimePassed) return TimerMode.Restart;
            else {
              return isPlaying ? TimerMode.Pause : TimerMode.Start;
            }
          };

          return (
            <div className={styles.timeControlWrapper}>
              <h1 className={textClass}>{`${minutes}:${seconds}`}</h1>
              <button
                className={styles.button}
                onClick={isTimePassed ? restartTimer : toggleCounting}
              >
                <h3 className={textClass}>{displayCurrTimerMode()}</h3>
              </button>
            </div>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default TimePanel;
