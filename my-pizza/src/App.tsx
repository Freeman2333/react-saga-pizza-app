import { Provider } from 'react-redux';
import { GlobalStyle, Main } from './App.styles';
import Header from './components/Header';
import RoutesComponent from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <GlobalStyle />
        <RoutesComponent />
      </Main>
    </Provider>
  );
}

export default App;
