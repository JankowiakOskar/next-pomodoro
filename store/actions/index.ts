import {
  ModeName,
  Mode,
  Theme,
  SET_ACTIVE_MODE,
  SET_ACTIVE_THEME,
  REPLACE_ALL_STORE,
  TOGGLE_MODAL,
  SetActiveModeAction,
  SetActiveThemeAction,
  UpdateAppModeAction,
  UPDATE_APP_MODE,
  ToggleModalAction,
  AppState,
  ReplaceAllStoreAction,
} from '../types';
import { RootState } from 'store/reducers';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const setActiveMode = (mode: ModeName): SetActiveModeAction => {
  return {
    type: SET_ACTIVE_MODE,
    payload: mode,
  };
};

export const setActiveTheme = (theme: Theme): SetActiveThemeAction => {
  console.log(theme);
  return {
    type: SET_ACTIVE_THEME,
    payload: theme,
  };
};

export const updateMode = (
  modeToUpdate: Mode
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch, getState): UpdateAppModeAction => {
    const {
      mainReducer: { appModes },
    } = getState();

    const updatedAppModes = appModes.map(({ mode, ...rest }: Mode) => {
      if (mode === modeToUpdate.mode) return modeToUpdate;
      return { mode, ...rest };
    });

    return dispatch({
      type: UPDATE_APP_MODE,
      payload: updatedAppModes,
    });
  };
};

export const toggleModal = (): ToggleModalAction => {
  return {
    type: TOGGLE_MODAL,
  };
};

export const ReplaceAllStore = (store: AppState): ReplaceAllStoreAction => ({
  type: REPLACE_ALL_STORE,
  payload: store,
});
