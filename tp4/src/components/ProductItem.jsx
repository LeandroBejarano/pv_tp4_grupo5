import Section from "./Section"
function ProductItem ({setModo, producto}){
    return(
        <div>
            <Section>
                <p>Descripción: {producto.desc}</p>
                <p>Precio Unitario: {producto.price}</p>
                <p>Descuento: {producto.disc}%</p>
                <p>Precio con rebaja: {producto.minprice}</p>
                <p>Stock: {producto.stock}</p>
            </Section>
            <button onClick={()=>setModo('list')}>Volver</button>
        </div>
    )
}

export default ProductItem