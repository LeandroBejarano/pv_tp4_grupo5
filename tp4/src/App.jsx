import { useState } from 'react'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import ProductList from './components/ProductList'

function App() {
  const [buscar, setBuscar] = useState ('');
  const [producto, setProducto] = useState({
    id:'',
    desc:'',
    price:'',
    disc:'',
    stock:'',
    minprice:'',
  });
  const [productos, setProductos] = useState([])
  const [modo, setModo] = useState('list')
  return (
    <div>
        <NavBar setBuscar={[setBuscar]} modo={[setModo]}></NavBar>
        {(() => {
          switch (modo){
            case 'new': return <ProductForm setModo={setModo} producto={[producto, setProducto]} productos={[productos, setProductos]}/>
            case 'buscar': return <SearchBar setModo={setModo} buscar={buscar} productos={productos}/>
            default: return(
              <div>
                <Header texto={'Lista de productos'}/>
                <ProductList productos={productos}/>
              </div>
              )
          }
        })()}
    </div>
  )
}

export default App
