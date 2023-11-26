import logo from './logo.svg';
import './App.css';
import User from './user/pages';
import { Provider } from 'react-redux';
import { store } from './user/store';

function App() {
  return (
    <Provider store={ store }>
      <User/>
    </Provider>
  );
}

export default App;
