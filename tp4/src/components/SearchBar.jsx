import Header from "./Header";
import Error from "./Error";
import Section from "./Section";
function SearchBar (props)
{
    const buscar = props.buscar;
    const setModo = props.setModo;
    const productos = props.productos;
    const filtrados = productos.filter(p=> buscar && p.desc.toLowerCase().includes(buscar.toLowerCase()));

    return (
    <div>
        <Header texto={'Resultados de la busqueda'}/>
        <button onClick={()=>setModo('list') }>Volver</button>

        {filtrados.length > 0 ? ( 
            filtrados.map((producto) =>(
            <Section key={producto.id}>    
            <p>Descripción: {producto.desc}</p>
            <p>Precio Unitario: {producto.price}</p>
            <p>Descuento: {producto.disc}%</p>
            <p>Precio con rebaja: {producto.minprice}</p>
            <p>Stock: {producto.stock}</p>
            </Section>
        ))
        )   :   (
        <Error texto={'No se encontró ningún producto'}/>
        )}
    </div>
    )
}

export default SearchBar;