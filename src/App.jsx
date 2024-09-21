import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthRoute from './Routes/AuthRoute';
import ProtectedRoute from './Routes/ProtectedRoute';
import Signup from './Screens/Signup';
import { Route, Routes } from 'react-router-dom';
// import Dasboard from './Screens/Dasboard';
import Login from './Screens/Login';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Products from './Screens/Products';
import AddCart from './Screens/AddCart';
import CardDetail from './Screens/CartDetail'
import Table from './components/Table/Table';
function App() {

  return (
    <>
    <Routes>

     <Route element={<AuthRoute/>}>
         <Route path='/' element={<Signup />}/>
         <Route path='/login' element={<Login />}/>
     </Route>


     <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/Products' element={<Products />}/>
         <Route path='/contact' element={<Contact />}/>
         <Route path='/addCart' element={<AddCart />}/>
         <Route path='/product/productDetail/:id' element={<CardDetail />}/>
         <Route path='/table' element={<Table />}/>

     </Route>
    
   

    </Routes>
    </>
  )
}

export default App
