import { render, fireEvent } from '@testing-library/react';
import { Mode, ModeName } from 'store/types';
import InputElement from 'components/molecules/InputElement/InputElement';

type MockObj = {
  label: ModeName;
  value: number;
};

describe('Input Element', () => {
  it('increment passing value by one when clicking arrow up', () => {
    let mockValue: Mode = {
      mode: 'pomodoro',
      time: { minutes: 25 },
    };

    const mockInc = jest.fn((mockObj: MockObj) => {
      return (mockValue = { mode: mockObj.label, time: { minutes: mockObj.value } });
    });

    const { getByTitle } = render(
      <InputElement label={mockValue.mode} value={mockValue.time.minutes} setVal={mockInc} />
    );

    const arrowUp = getByTitle('arrow-up');

    fireEvent.click(arrowUp);

    expect(mockValue.time.minutes).toBe(26);
  });

  it('input should display proper value on change', () => {
    let mockValue: Mode = {
      mode: 'short break',
      time: { minutes: 3 },
    };

    const mockChangeFunc = jest.fn(
      (mockObj: MockObj) => (mockValue = { mode: mockObj.label, time: { minutes: mockObj.value } })
    );

    const { getByTestId, rerender } = render(
      <InputElement label={mockValue.mode} value={mockValue.time.minutes} setVal={mockChangeFunc} />
    );

    const input = getByTestId('input');

    fireEvent.change(input, { target: { value: '20' } });
    rerender(
      <InputElement label={mockValue.mode} value={mockValue.time.minutes} setVal={mockChangeFunc} />
    );
    expect(input).toHaveValue(mockValue.time.minutes);
  });
});
