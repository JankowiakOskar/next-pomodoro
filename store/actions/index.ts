import { ModeName, SET_ACTIVE_MODE, SetActiveModeAction } from '../types';

export const setActiveMode = (mode: ModeName): SetActiveModeAction => {
  return {
    type: SET_ACTIVE_MODE,
    payload: mode,
  };
};
