import { ModeName, Mode, TimeStamp } from 'store/types';

export const getMode = (modeName: ModeName, allModes: Mode[]): Mode => {
  const [matchedMode] = allModes.filter((mode) => mode.mode === modeName);
  return matchedMode;
};

export const convertTimeToSec = ({ minutes }: TimeStamp): number => minutes * 60;

export const formatTimeFromSec = (sec: number): [string, string] => {
  let minutes = Math.floor(sec / 60).toString();
  let seconds = (sec % 60).toString();
  const formatAbove10 = (value: string): string => (+value < 10 ? '0' + value : value);
  minutes = formatAbove10(minutes);
  seconds = formatAbove10(seconds);
  return [minutes, seconds];
};

export const cutStr = (str: string, numChar: number): string => str.slice(0, -numChar);
