
import './App.css';
import Greetings from './components/Greetings';
import { Provider } from 'react-redux';
import store from './redux/conf_store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Greetings />
  </Provider>
    </>
  );
}

export default App;
