export const SET_ACTIVE_MODE = 'SET_ACTIVE_MODE';

export enum ModeName {
  Pomodoro = 'pomodoro',
  ShortBreak = 'short break',
  LongBreak = 'long break',
}

export type TimeStamp = {
  minutes: number;
  seconds: number;
};

export interface Mode {
  mode: ModeName;
  time: TimeStamp;
  isPlayed: boolean;
}

export interface AppState {
  appModes: Mode[];
  activeMode: ModeName;
}

export interface SetActiveModeAction {
  type: typeof SET_ACTIVE_MODE;
  payload: ModeName;
}

export type AppActionTypes = SetActiveModeAction;
