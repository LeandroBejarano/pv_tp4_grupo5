import Header from "./Header";
import Error from "./Error";
function SearchBar (props)
{
    const buscar = props.buscar;
    const setModo = props.setModo;
    const productos = props.productos;

    const producto = productos.find(p => p.id === parseInt(buscar));
    return (
    <div>
        <Header texto={'Resultados de la busqueda'}/>
        <button onClick={()=>setModo('list') }>Volver</button>
        {producto ? ( 
            <div>
            <p>Descripción: {producto.desc}</p>
            </div>
        ) : (
        <Error texto={'No se encontró ningún producto'}/>
        )}
    </div>
    )
}

export default SearchBar;