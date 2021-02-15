export const SET_ACTIVE_MODE = 'SET_ACTIVE_MODE';
export const UPDATE_APP_MODE = 'UPDATE_APP_MODE';

export enum FontClasses {
  SpaceMonoFont = 'spaceMonoFont',
  RobotoSlabFont = 'robotoSlabFont',
  KumbhSansFont = 'kumbhSansFont',
}

export enum BgClasses {
  Orange = 'orangeBg',
  Purple = 'purpleBg',
  LightBlue = 'lightBlueBg',
}

export type ModeName = 'pomodoro' | 'short break' | 'long break';

export type TimeStamp = {
  minutes: number;
  seconds: number;
};

export interface Mode {
  mode: ModeName;
  time: TimeStamp;
  isPlaying: boolean;
}

export interface AppState {
  appModes: Mode[];
  activeMode: ModeName;
  fontTheme: FontClasses;
  colorTheme: BgClasses;
}

export interface SetActiveModeAction {
  type: typeof SET_ACTIVE_MODE;
  payload: ModeName;
}

export interface UpdateAppModeAction {
  type: typeof UPDATE_APP_MODE;
  payload: Mode[];
}

export type AppActionTypes = SetActiveModeAction | UpdateAppModeAction;
