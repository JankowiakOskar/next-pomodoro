export const SET_ACTIVE_MODE = 'SET_ACTIVE_MODE';
export const UPDATE_APP_MODE = 'UPDATE_APP_MODE';
export const SET_ACTIVE_THEME = 'SET_ACTIVE_THEME';
export const REPLACE_ALL_STORE = 'UPDATE_ALL_STORE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

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

export enum ThemeType {
  ColorTheme = 'colorTheme',
  FontTheme = 'fontTheme',
}

export type ModalOpen = boolean;

export type ModeName = 'pomodoro' | 'short break' | 'long break';

export interface Theme {
  type: ThemeType;
  class: BgClasses | FontClasses;
}

export type TimeStamp = {
  minutes: number;
};

export interface Mode {
  mode: ModeName;
  time: TimeStamp;
}

export interface AppState {
  appModes: Mode[];
  activeMode: ModeName;
  fontTheme: FontClasses;
  colorTheme: BgClasses;
  isModalOpen: ModalOpen;
}

export interface SetActiveModeAction {
  type: typeof SET_ACTIVE_MODE;
  payload: ModeName;
}

export interface SetActiveThemeAction {
  type: typeof SET_ACTIVE_THEME;
  payload: Theme;
}

export interface UpdateAppModeAction {
  type: typeof UPDATE_APP_MODE;
  payload: Mode[];
}

export interface ToggleModalAction {
  type: typeof TOGGLE_MODAL;
}

export interface ReplaceAllStoreAction {
  type: typeof REPLACE_ALL_STORE;
  payload: AppState;
}

export type AppActionTypes =
  | SetActiveModeAction
  | UpdateAppModeAction
  | ToggleModalAction
  | SetActiveThemeAction
  | ReplaceAllStoreAction;
