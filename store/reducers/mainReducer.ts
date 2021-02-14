import { AppState, FontClasses, BgClasses, AppActionTypes, SET_ACTIVE_MODE } from '../types';

const initialState: AppState = {
  appModes: [
    {
      mode: 'pomodoro',
      time: {
        minutes: 25,
        seconds: 0,
      },
      isPlaying: false,
    },
    {
      mode: 'short break',
      time: {
        minutes: 5,
        seconds: 0,
      },
      isPlaying: false,
    },
    {
      mode: 'long break',
      time: {
        minutes: 15,
        seconds: 0,
      },
      isPlaying: false,
    },
  ],
  activeMode: 'pomodoro',
  fontTheme: FontClasses.KumbhSansFont,
  colorTheme: BgClasses.Orange,
};

export const mainReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_ACTIVE_MODE:
      return {
        ...state,
        activeMode: action.payload,
      };
    default:
      return state;
  }
};
