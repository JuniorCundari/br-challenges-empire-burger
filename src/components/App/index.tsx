import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';
import { MainContainer } from './styles';
import { Home } from '../Home';
import { Offers } from '../Offers';
import { MenuBurger } from '../MenuBurger';
import { Comments } from '../Comments';
import { Delivery } from '../Delivery';
import { Localization } from '../Localization';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <Header />
      <MainContainer>
        <Home />
        <Offers />
        <MenuBurger />
        <Comments />
        <Delivery />
        <Localization />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
