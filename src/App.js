
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Home from "./Components/Pages/Home/Home"
import Bebidas from './Components/Pages/Bebidas/Bebidas';
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail';
import SearchResults from './Components/Pages/SearchResults/SearchResults';
import ShoppingCart from './Components/Pages/ShoppingCart/ShoppingCart';
import ItemListContainerBebidas from './Components/ItemListContainerBebidas/ItemListContainerBebidas';
import Accesorios from './Components/Pages/Accesorios/Accesorios';
import Formurlario from './Components/Pages/Form/Formulario';
import Ticket from './Components/Pages/Ticket/Ticket';

function App() {
  return (

    <Router>
      <Navbar>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/search/:id" element={<SearchResults />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/accesorios" element={<Accesorios />} />
        <Route path="/formulario" element={<Formurlario />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
