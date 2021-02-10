import 'styles/globals.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../store/store';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <div>
        <Component {...pageProps} />;
      </div>
    </Provider>
  );
}

const makeStore = (): typeof store => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
