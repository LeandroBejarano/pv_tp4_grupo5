import { useState } from 'react'
import Titulo from './components/Titulo'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import NavBar from './components/NavBar'

function App() {
  const [producto, setProducto] = useState({
    desc:'',
    price:'',
    disc:'',
    stock:'',
    minprice:''
  });
  const [productos, setProductos] = useState([''])
  const [modo, setModo] = useState('list')
  return (
    <div>
        <NavBar modo={[modo, setModo]}></NavBar>
        {(() => {
          switch (modo){
            case 'new': return <ProductForm producto={[producto, setProducto]} productos={[productos, setProductos]}/>
            default: return(
              <Header texto={'Gestión de productos'}/>
              )
          }
        })()}
    </div>
  )
}

export default App
