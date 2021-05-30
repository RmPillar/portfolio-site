import '../styles/styles.css';

import { MenuProvider } from '../contexts/MenuContext';

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

export default MyApp;
