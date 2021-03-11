import { render } from '@testing-library/react';
import { Mode } from 'store/types';
import { Provider } from 'react-redux';
import store from 'store/store';
import ModeSettersList from 'components/molecules/ModeSettersList/ModeSettersList';

describe('ModeSettersList', () => {
  it('Display every mode passing via props', () => {
    const modes: Mode[] = [
      { mode: 'pomodoro', time: { minutes: 23 } },
      { mode: 'short break', time: { minutes: 5 } },
    ];

    const { getByText, getByDisplayValue } = render(
      <Provider store={store}>
        <ModeSettersList modes={modes} />
      </Provider>
    );

    modes.forEach(({ mode, time: { minutes } }) => {
      expect(getByText(mode)).toBeInTheDocument();
      expect(getByDisplayValue(minutes)).toBeInTheDocument();
    });
  });
});
