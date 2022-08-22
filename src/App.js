import logo from './logo.svg';
import './App.css';
import {Link,NavLink,Route,Routes} from 'react-router-dom';

import Login from './Validations/Login';

import Home from './Home';

import Shopping from './Components/MovieList';
import NavBar from './Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './Components/WatchList';

import {fetchUser} from './store/dataSlice';
store.dispatch(fetchUser())

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
     
      <Route path ='/login' element = {<Login></Login>}></Route>
     
      <Route path ='/movies' element = {<Shopping></Shopping>}></Route>
      <Route path = '/cart' element={<Cart></Cart>}></Route>
      </Routes>

     </Provider>
    </div>
  );
}

export default App;
