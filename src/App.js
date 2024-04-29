import { Provider } from 'react-redux';
import './App.css';
import { store } from './april-25th/redux/store/store';
import { Todo } from './april-25th/todos/todo';
// import { Signup } from './Google Authuntication/signup';
// import { ProductPage } from './pages/products';
// import { Navigation } from './route-stack/stack';

function App() {
  return (

  // <Navigation/>
  <Provider store={store}>
    <Todo/>
  </Provider>

  )
}

export default App;
