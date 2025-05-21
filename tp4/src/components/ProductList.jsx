import Error from "./Error";
import Table from "./Table";

function ProductList (props){
    const productos=props.productos;
    return (
        <div>
        {productos.length === 0 ? (
            <Error texto={'No hay productos registrados actualmente'} />    
        ) : (
            <Table productos={productos} setProductos={props.setProductos} setModo={props.setModo} setProductoActual={props.setProductoActual} deleteProducto={props.deleteProducto} />
        )}
        </div>
    );
}

export default ProductList