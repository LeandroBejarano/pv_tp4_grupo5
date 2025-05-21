import Header from "./Header";
import Titulo from "./Titulo";
function ProductForm (props){
    const [modo,setModo] = props.modo;
    const [productoActual, setProductoActual] = props.productoActual;
    const [producto, setProducto] = props.producto;
    const [productos, setProductos] = props.productos;
    const inputStyle={
        padding: '5px',
        borderRadius: '5px',
        display: 'block',
        margin: '0 auto',
        marginBottom: '10px'
    }

    const handleSubmit = () =>{
        if (modo === 'new')
            if (producto.desc.trim()==="" || producto.price.trim()==="" ||producto.disc.trim()==="" ||producto.stock.trim()==="")
                alert ('Error: llene todos los campos y vuelva a intentarlo');
            else{
                    props.addProducto(producto);
                    setProducto({ desc: "", disc: "", stock: "", price: "" });
                    alert ('Producto agregado')
                }
        else{
            if (productoActual.desc.trim()==="" || productoActual.price.trim()==="" || productoActual.disc.trim()==="" || productoActual.stock.trim()==="")
                alert ('Error: no puede vaciar los campos de un producto existente');
            else{
                productoActual.minprice=productoActual.price*(1-productoActual.disc/100);
                const nuevos = productos.map(p => (p.id === productoActual.id ? productoActual : p));
                setProductos (nuevos);
                alert('Producto editado');
                setModo('list');
            }
        }
    }

    
    return (
    <div>
        {(() => {
            switch(modo){
                case 'new': return(
                <div>
                    <Header texto={'Crear producto'}/>
                    <Titulo texto={'No dejar ningun campo vacio'}/>
                    <input style={inputStyle} type='text' value={producto.desc} placeholder='Descripcion' onChange={(e)=>setProducto({...producto, desc: e.target.value})}/>
                    <input style={inputStyle} type='number' value={producto.price} placeholder='Precio unitario' onChange={(e)=>setProducto({...producto, price: e.target.value})}/>
                    <input style={inputStyle} type='number' value={producto.disc} placeholder='Descuento. Ej: 25' onChange={(e)=>setProducto({...producto, disc: e.target.value})}/>
                    <input style={inputStyle} type='number' value={producto.stock} placeholder='Stock' onChange={(e)=>setProducto({...producto, stock: e.target.value})}/>
                    <button onClick={handleSubmit} >Agregar Producto</button> <br></br>
                </div>
                )
                case 'edit': return(
                <div>
                    <Header texto={'Editar producto'}/>
                    <Titulo texto={'No dejar ningun campo vacio'}/>
                    <input style={inputStyle} type='text' value={productoActual.desc} placeholder='Descripcion' onChange={(e)=> setProductoActual({...productoActual, desc: e.target.value })}/>
                    <input style={inputStyle} type='number' value={productoActual.price} placeholder='Precio unitario' onChange={(e)=> setProductoActual({...productoActual, price: e.target.value })}/>
                    <input style={inputStyle} type='number' value={productoActual.disc} placeholder='Descuento' onChange={(e)=> setProductoActual({...productoActual, disc: e.target.value })}/>
                    <input style={inputStyle} type='number' value={productoActual.stock} placeholder='Stock' onChange={(e)=> setProductoActual({...productoActual, stock: e.target.value })}/>
                    <button onClick={handleSubmit} >Guardar Cambios</button>
                </div>
                )
            }
        })()}

        <button onClick={()=>setModo('list')}>Volver</button>
    </div>
    )
}

export default ProductForm;