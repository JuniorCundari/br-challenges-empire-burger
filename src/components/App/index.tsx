import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import { Header } from '../Header';
import { Home } from '../Home';
import { MainContainer } from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <Home />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
