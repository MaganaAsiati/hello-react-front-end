import './App.css';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
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
