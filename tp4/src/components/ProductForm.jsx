import Header from "./Header";
import Titulo from "./Titulo";
function ProductForm (props){
    const setModo = props.setModo;
    const [producto, setProducto] = props.producto;
    const [productos, setProductos] = props.productos;
    const inputStyle={
        padding: '5px',
        borderRadius: '5px',
        display: 'block',
        margin: '0 auto',
        marginBottom: '10px'
    }

    const addProducto = () =>{
        if (producto.desc.trim()==="" || producto.price.trim()==="" ||producto.disc.trim()==="" ||producto.stock.trim()==="")
            alert ('Error: llene todos los campos y vuelva a intentarlo');
        else
        {
            producto.id=Date.now();
            producto.minprice=producto.price*(1-producto.disc/100);
            alert ('Producto agregado');
            setProductos([...productos,producto]);
            setProducto({desc:'', disc:'', stock:'', price:''});
        }
    }

    return (
    <div>
        <Header texto={'Crear producto'}/>
        <Titulo texto={'No dejar ningun campo vacio'}/>

        <input style={inputStyle} type='text' value={producto.desc} placeholder='Descripcion' onChange={(e)=>setProducto({...producto, desc: e.target.value})}/>
        <input style={inputStyle} type='number' value={producto.price} placeholder='Precio unitario' onChange={(e)=>setProducto({...producto, price: e.target.value})}/>
        <input style={inputStyle} type='number' value={producto.disc} placeholder='Descuento. Ej: 25' onChange={(e)=>setProducto({...producto, disc: e.target.value})}/>
        <input style={inputStyle} type='number' value={producto.stock} placeholder='Stock' onChange={(e)=>setProducto({...producto, stock: e.target.value})}/>
        <h1 ></h1>
        <button onClick={addProducto} >Agregar Producto</button> <br></br>
        <button onClick={()=>setModo('list')}>Volver</button>
    </div>
    )
}

export default ProductForm;