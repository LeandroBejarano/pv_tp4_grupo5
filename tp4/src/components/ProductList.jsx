import Error from "./Error";
import Table from "./Table";

function ProductList (props){
    const productos=props.productos;
    return (
        <div>
        {productos.length === 0 ? (
            <Error texto={'No hay productos registrados actualmente'} />    
        ) : (
            <Table productos={productos}/>
        )}
        </div>
    );
}

export default ProductList