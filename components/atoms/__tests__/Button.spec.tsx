import { render, fireEvent } from '@testing-library/react';
import Button from '../Button/Button';
import { BgClasses, FontClasses } from 'store/types';

describe('Button', () => {
  it('render button with random text', () => {
    const randomText = 'Primary button';
    const { getByText } = render(
      <Button text={randomText} bgClass={BgClasses.Orange} fontClass={FontClasses.SpaceMonoFont} />
    );
    const buttonWithRandomText = getByText(randomText);

    expect(buttonWithRandomText).toBeInTheDocument();
  });

  it('Call callback func on clicking button', () => {
    const callback = jest.fn();

    const { getByTestId } = render(
      <Button
        bgClass={BgClasses.Orange}
        fontClass={FontClasses.SpaceMonoFont}
        callBackOnClick={callback}
      />
    );

    const button = getByTestId('button');

    fireEvent.click(button);

    expect(callback).toHaveBeenCalled();
  });
});
