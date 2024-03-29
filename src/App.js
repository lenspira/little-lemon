import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppContainer from './components/AppContainer';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
          <Header />
          <Main />
          <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
