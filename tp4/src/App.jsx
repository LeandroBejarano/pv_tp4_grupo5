import { useState } from 'react'
import Titulo from './components/Titulo'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import './index.css';
function App() {
  const [buscar, setBuscar] = useState(0);
  const [producto, setProducto] = useState({
    id: '',
    desc: '',
    price: '',
    disc: '',
    stock: '',
    minprice: ''
  });
  const [productos, setProductos] = useState(['']);
  const [modo, setModo] = useState('list');

  return (
    <div className="app-container">  
      <div className="sidebar">
        <NavBar setBuscar={[setBuscar]} modo={[setModo]} />
      </div>
      
      <div className="main-content">  
        {(() => {
          switch (modo){
            case 'new': return <ProductForm setModo={setModo} producto={[producto, setProducto]} productos={[productos, setProductos]}/>
            case 'buscar': return <SearchBar setModo={setModo} buscar={buscar} productos={productos}/>
            default: return <Header texto={'Gestión de productos'} />;
          }
        })()}
      </div>
    </div>
  )
}

export default App;
