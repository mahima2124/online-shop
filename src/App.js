import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Cart from './pages/Cart';
import Item from './pages/Item';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Signup from './pages/SignUp';
import Login from './pages/Login';



function App() {
const data = JSON.parse(localStorage.getItem("user_login"));
console.log(data,'<><><><>dataaaa')
    return (
    <Provider store ={store}>
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path = "/" element={data.password?<Navigate to ='/home'/>:<Signup/>}/>
      {/* <Route path ='/login' element = {<Login/>}/> */}
      {/* <Route path ='/login' element = {data.password ?<Navigate to="/home"/> : <Navigate to="/login"/>  }/> */}
      <Route path ='/login' element = {data.password ?<Navigate to="/home"/> : <Login/>  }/>
      {/* <Route path = '/home' element = {data ?<Redirect to={<Home/>}/> : <Login/>}/> */}
       <Route path = "/home" element= {<Home/>}/>
      <Route path = "/item" element= {<Item/>}/>
      <Route path = "/cart" element= {<Cart/>}/>
     </Routes>
    </BrowserRouter>
    </Provider>
  );
        
}

export default App;
