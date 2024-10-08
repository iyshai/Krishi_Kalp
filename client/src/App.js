import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Create from './components/create/Create';
// import FoodDetails from './components/foodDetails/FoodDetails';
// import FoodCatalog from './components/foodCatalog/FoodCatalog';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import {useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Chatbot from './components/chatbot/Chatbot';
import Community from './components/community/Community';
import Ecommerce from './components/ecommerce/ecommerse';
import Yojna from './components/yogna/yojna';
import WeatherApp from './components/weather/Weather';
// import CommodityForm from './components/commodity/CommodityForm';

function App() {
 const location = useLocation()
 
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [location.pathname])


  return (
    <div>
       {/* <Navbar /> */}
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/create' element={<Create />} />
         {/* <Route path='/food/:id' element={<FoodDetails />} /> */}
         {/* <Route path='/foods/:id' element={<FoodCatalog />} /> */}
         <Route path='/cart' element={<Cart />} />
         <Route path='/checkout' element={<Checkout />} />
         <Route path='/chat-bot' element={<Chatbot/>}/>
         <Route path='/community' element={<Community/>}/>
         <Route path='/dukan' element={<Ecommerce/>}/>
         <Route path='/yojna' element={<Yojna/>}/>
         <Route path='/weather' element={<WeatherApp/>}/>
         {/* <Route path='mandi-dam' element={<CommodityForm/>}/> */}

       </Routes>
       <Footer />
    </div>
  );
}

export default App;
