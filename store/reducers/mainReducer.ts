import {
  AppState,
  FontClasses,
  BgClasses,
  AppActionTypes,
  SET_ACTIVE_MODE,
  UPDATE_APP_MODE,
  TOGGLE_MODAL,
  SET_ACTIVE_THEME,
  REPLACE_ALL_STORE,
} from '../types';

const initialState: AppState = {
  appModes: [
    {
      mode: 'pomodoro',
      time: {
        minutes: 25,
      },
    },
    {
      mode: 'short break',
      time: {
        minutes: 5,
      },
    },
    {
      mode: 'long break',
      time: {
        minutes: 15,
      },
    },
  ],
  activeMode: 'pomodoro',
  fontTheme: FontClasses.KumbhSansFont,
  colorTheme: BgClasses.Orange,
  isModalOpen: false,
};

export const mainReducer = (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case SET_ACTIVE_MODE:
      return {
        ...state,
        activeMode: action.payload,
      };
    case SET_ACTIVE_THEME:
      return {
        ...state,
        [action.payload.type]: action.payload.class,
      };
    case UPDATE_APP_MODE:
      return {
        ...state,
        appModes: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case REPLACE_ALL_STORE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
