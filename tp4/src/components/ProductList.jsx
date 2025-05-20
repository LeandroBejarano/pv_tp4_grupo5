import React from 'react';
import ProductItem from './ProductItem.jsx';

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <ul className="product-list">
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default ProductList;