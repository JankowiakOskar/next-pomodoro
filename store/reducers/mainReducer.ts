import { AppState, ModeName, AppActionTypes, SET_ACTIVE_MODE } from '../types';

const initialState: AppState = {
  appModes: [
    {
      mode: ModeName.Pomodoro,
      time: {
        minutes: 25,
        seconds: 0,
      },
      isPlayed: false,
    },
    {
      mode: ModeName.ShortBreak,
      time: {
        minutes: 5,
        seconds: 0,
      },
      isPlayed: false,
    },
    {
      mode: ModeName.LongBreak,
      time: {
        minutes: 15,
        seconds: 0,
      },
      isPlayed: false,
    },
  ],
  activeMode: ModeName.Pomodoro,
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
