import { useState } from 'react'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import './index.css';
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'

function App() {
  const [productoActual, setProductoActual] = useState()
  const [buscar, setBuscar] = useState('');
  const [producto, setProducto] = useState({
    id: '',
    desc: '',
    price: '',
    disc: '',
    stock: '',
    minprice: ''
  });
  const [productos, setProductos] = useState([]);
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
            case 'ver': return (
            <div>
              {console.log("Producto seleccionado:", productoActual)}
              <ProductItem setModo={setModo} producto={productoActual} />
            </div>)
            default: return(
              <div>
                <Header texto={'Lista de productos'}/>
                <ProductList setModo={setModo} productos={productos} setProductoActual={setProductoActual}/>
              </div>
              )
          }
        })()}
      </div>
    </div>
  )
}

export default App;