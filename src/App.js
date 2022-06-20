import {useEffect} from "react";
import {db, storage} from "./firebase/firebase";
import {collection, getDocs} from "@firebase/firestore";
import {getAllProducts} from "./redux/reducers/products";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Shops from "./pages/Home/Shops/Shops";
import Orphanage from "./pages/Home/Orphanage/Orphanage";
import Layout from "./Layout/Layout";
import Auth from "./pages/Auth/Auth";
import './app.scss'
import Confirm from "./pages/Auth/Confirm/Confirm";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Service from "./pages/Service/Service";
import Phones from "./pages/Phones/Phones";
import Advertisement from "./pages/Advertisement/Advertisement";
import Buying from "./pages/Buying/Buying";
import {findUser} from "./redux/reducers/user";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Home/Shops/Shop/Shop";
import Online from "./pages/Online/Online";
import Charity from "./pages/Home/Charity/Charity";


function App() {
  const dispatch = useDispatch();

  const products = useSelector((s) => s.products.products);

  useEffect(() => {
    getDocs(collection(db, 'products'))
        .then((res) => dispatch(getAllProducts({arr: res.docs.map(el => ({...el.data(), id:el.id}))})));

   localStorage.getItem('user') ?
    dispatch(findUser({user: JSON.parse(localStorage.getItem('user')) })) : console.log('empty local')
  }, []);


  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Layout/>}>
         <Route path='' element={<Home/>}/>
         <Route path='shops/' element={<Shops/>}/>
         <Route path='shop/:id' element={<Shop/>}/>
         <Route path='phone' element={<Phones/>}/>
         <Route path='charity' element={<Charity/>}/>
         <Route path='advertisement' element={<Advertisement/>}/>
         <Route path='service' element={<Service/>}/>
         <Route path='buying' element={<Buying/>}/>
         <Route path='online' element={<Online/>}/>
       </Route>
       <Route path='/auth' element={<Auth/>}/>
       <Route path='/confirm' element={<Confirm/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/*' element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
