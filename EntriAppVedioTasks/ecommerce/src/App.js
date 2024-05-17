import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import data from './Data';
import Gallary from './Routes/Gallary';
import Cart from './Routes/Cart';
import { useState } from 'react';

function App() {

    const [cartProducts, setCartProducts] = useState([])
    const handleAddCart = (product) => {
      setCartProducts(cartProducts =>[...cartProducts, {item:product,quantity:1}])
    }
    const {productItems} = data;
    console.log(data);

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/cart' element={<Cart cartProducts={cartProducts}/>}>
          </Route>
        </Routes>
        <Routes>
          <Route exact path='/' element={<Gallary productItems={productItems} handleAddCart={handleAddCart}/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
