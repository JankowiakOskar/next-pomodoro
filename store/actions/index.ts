import {
  ModeName,
  Mode,
  SET_ACTIVE_MODE,
  SetActiveModeAction,
  UpdateAppModeAction,
  UPDATE_APP_MODE,
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

export const updateMode = (
  modeToUpdate: Mode
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch, getState): UpdateAppModeAction => {
    const {
      mainReducer: { appModes },
    } = getState();
    console.log(modeToUpdate);
    const updatedAppModes = appModes.map(({ mode, ...rest }: Mode) => {
      if (mode === modeToUpdate.mode) return modeToUpdate;
      return { mode, ...rest };
    });

    console.log(updatedAppModes);
    return dispatch({
      type: UPDATE_APP_MODE,
      payload: updatedAppModes,
    });
  };
};
