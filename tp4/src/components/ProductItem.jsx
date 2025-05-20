import React from 'react';


const ProductItem = ({product, onEdit, onDelete}) => {
    const precioConDescuento = product.precioUnitario * (1 - (product.descuento || 0) / 100);

    return (
        <li className="product-item">
            <div className="product-details">
                <strong>ID:</strong> {product.id}<br/>
                <strong>Descripción:</strong> {product.descripcion}<br/>
                <strong>Precio:</strong> ${product.precioUnitario.toFixed(2)}<br/>
                {(product.descuento > 0) && (
                    (product.descuento) % <br/>
                )}
                <strong>Precio con Descuento:</strong> ${precioConDescuento.toFixed(2)}<br/>
                <strong>Stock:</strong> {product.stock}
            </div>
            <div className="product-actions">
                <button onClick={() => onEdit(product)}>Editar</button>
                <button onClick={() => onDelete(product.id)}>Eliminar</button>
            </div>
        </li>
    );
};

export default ProductItem;