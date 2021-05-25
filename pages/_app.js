import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../store/reducers/root';

import '../styles/styles.css';

const store = createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main data-scroll-container>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}

export default MyApp;
