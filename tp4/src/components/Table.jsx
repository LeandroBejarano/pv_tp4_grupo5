function Table ({productos, setModo, setProductoActual, deleteProducto}){
    const style={
        width:'70%',
        borderCollapse:'collapse',
        margin:'0 auto',
        marginTop:'30px'
    }
    return (
    <table style={style} border='2' cellPadding='10'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Precio unitario</th>
                <th>Descuento</th>
                <th>Precio final</th>
                <th>Stock</th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {productos.map((prod) =>(
                <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.desc}</td>
                    <td>{prod.price}$</td>
                    <td>{prod.disc}%</td>
                    <td>{prod.minprice}$</td>
                    <td>{prod.stock} unidades</td>
                    <td><a href='#' onClick={()=>{setModo('ver'); setProductoActual(prod);} }>Ver</a></td>
                    <td><a href='#' onClick={()=>{setModo('edit'); setProductoActual(prod);}}>Editar</a></td>
                    <td><a href='#' onClick={()=> deleteProducto(prod.id) } >Eliminar</a></td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}

export default Table