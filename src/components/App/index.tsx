import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';
import { Home } from '../Home';
import { Offers } from '../Offers';
import { MainContainer } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <Home />
        <Offers />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
