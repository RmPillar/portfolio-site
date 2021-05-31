import '../styles/styles.css';

import { MenuProvider } from '../contexts/MenuContext';
import { CursorProvider } from '../contexts/CursorContext';

function MyApp({ Component, pageProps }) {
  return (
    <CursorProvider>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </CursorProvider>
  );
}

export default MyApp;
