import { useState } from 'react'
import Titulo from './components/Titulo'
import Header from './components/Header'
import ProductForm from './components/ProductForm'
import NavBar from './components/NavBar'

function App() {
  const [modo, setModo] = useState('list')
  return (
    <div>
        <NavBar modo={[modo, setModo]}></NavBar>
        {(() => {
          switch (modo){
            case 'new': return <ProductForm></ProductForm>
            default: return(
              <Header texto={'Gestión de productos'}/>
              )
          }
        })()}
    </div>
  )
}

export default App
