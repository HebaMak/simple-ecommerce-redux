import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About ';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
