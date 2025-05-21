import { useState, useEffect, useCallback } from 'react'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import './index.css';
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'

function App() {
  const [productoActual, setProductoActual] = useState(null)
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
  
  const addProducto = useCallback((nuevoProducto) => {
    nuevoProducto.id = Date.now();
    nuevoProducto.minprice = nuevoProducto.price * (1 - nuevoProducto.disc / 100);
    setProductos(prev => [...prev, nuevoProducto]);
  }, [setProductos]);

  const editProducto = useCallback((productoActualizado) => {
    productoActualizado.minprice = productoActualizado.price * (1 - productoActualizado.disc / 100);
    setProductos(prev => prev.map(p => p.id === productoActualizado.id ? productoActualizado : p));
  }, [setProductos]);

  const deleteProducto = useCallback((id) => {
    setProductos(prev => prev.filter(p => p.id !== id));
  }, []);

  useEffect(()=>{
    console.log('Se modifico el arreglo de productos:', productos);
  }, [productos])

  return (
    <div className="app-container">  
      <div className="sidebar">
        <NavBar setBuscar={[setBuscar]} modo={[setModo]} />
      </div>
      
      <div className="main-content">  
        {(() => {
          switch (modo){
            case 'new': return <ProductForm modo={[modo,setModo]} producto={[producto, setProducto]} productos={[productos, setProductos]} 
            productoActual={[productoActual, setProductoActual]} addProducto={addProducto} editProducto={editProducto} />
            case 'edit': return <ProductForm modo={[modo,setModo]} producto={[producto, setProducto]} productos={[productos, setProductos]} 
            productoActual={[productoActual, setProductoActual]} addProducto={addProducto} editProducto={editProducto} />
            case 'buscar': return <SearchBar setModo={setModo} buscar={buscar} productos={productos}/>
            case 'ver': return (
            <div>
              {console.log("Producto seleccionado:", productoActual)}
              <ProductItem setModo={setModo} producto={productoActual} />
            </div>)
            default: return(
              <div>
                <Header texto={'Lista de productos'}/>
                <ProductList setModo={setModo} productos={productos} setProductoActual={setProductoActual} deleteProducto={deleteProducto} />
              </div>
              )
          }
        })()}
      </div>
    </div>
  )
}

export default App;