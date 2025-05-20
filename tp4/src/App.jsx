import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  const [products, setProducts] = useState([
    { id: 1, descripcion: 'Laptop Gamer', precioUnitario: 1200.00, descuento: 10, stock: 5 },
    { id: 2, descripcion: 'Mouse Inalámbrico', precioUnitario: 25.00, descuento: 0, stock: 50 },
    { id: 3, descripcion: 'Teclado Mecánico', precioUnitario: 75.00, descuento: 5, stock: 20 }
  ]);
  const [modo, setModo] = useState('list'); // 'list', 'new', 'buscar', 'edit'
  const [buscar, setBuscar] = useState('');
  const [newProduct, setNewProduct] = useState({
    id: '',
    descripcion: '',
    precioUnitario: '',
    descuento: 0,
    stock: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddProduct = (e) => {
    e.preventDefault();
    // Basic validation
    if (newProduct.descripcion && newProduct.precioUnitario && newProduct.stock) {
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      setProducts([...products, { ...newProduct, id: newId }]);
      setNewProduct({ id: '', descripcion: '', precioUnitario: '', descuento: 0, stock: '' }); // limpia formulario
      setModo('list'); // Regresar a la vista de lista
    } else {
      alert('Por favor, completa todos los campos requeridos para el nuevo producto.');
    }
  };

  const handleEditProduct = (productToEdit) => {
    setEditingProduct(productToEdit);
    setNewProduct(productToEdit); //  formulario para edición
    setModo('edit');
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setProducts(products.map(p =>
        p.id === newProduct.id ? { ...newProduct } : p
    ));
    setNewProduct({ id: '', descripcion: '', precioUnitario: '', descuento: 0, stock: '' }); // limpia formulario
    setEditingProduct(null);
    setModo('list');
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const filteredProducts = modo === 'buscar' && buscar
      ? products.filter(product => product.id === parseInt(buscar))
      : products;

  return (
      <div>
        <NavBar setModo={setModo} setBuscar={setBuscar} />

        {modo === 'list' && (
            <>
              <h1>Lista de Productos</h1>
              <ProductList
                  products={filteredProducts}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
              />
            </>
        )}

        {(modo === 'new' || modo === 'edit') && (
            <div>
              <h2>{modo === 'new' ? 'Agregar Nuevo Producto' : 'Editar Producto'}</h2>
              <form onSubmit={modo === 'new' ? handleAddProduct : handleUpdateProduct}>
                <div>
                  <label>Descripción:</label>
                  <input
                      type="text"
                      value={newProduct.descripcion}
                      onChange={(e) => setNewProduct({ ...newProduct, descripcion: e.target.value })}
                      required
                  />
                </div>
                <div>
                  <label>Precio Unitario:</label>
                  <input
                      type="number"
                      value={newProduct.precioUnitario}
                      onChange={(e) => setNewProduct({ ...newProduct, precioUnitario: parseFloat(e.target.value) })}
                      step="0.01"
                      required
                  />
                </div>
                <div>
                  <label>Descuento (%):</label>
                  <input
                      type="number"
                      value={newProduct.descuento}
                      onChange={(e) => setNewProduct({ ...newProduct, descuento: parseInt(e.target.value) || 0 })}
                      min="0"
                      max="100"
                  />
                </div>
                <div>
                  <label>Stock:</label>
                  <input
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
                      required
                  />
                </div>
                <button type="submit">{modo === 'new' ? 'Agregar Producto' : 'Actualizar Producto'}</button>
                <button type="button" onClick={() => {
                  setModo('list');
                  setNewProduct({ id: '', descripcion: '', precioUnitario: '', descuento: 0, stock: '' }); // limpia formulario en cancel
                  setEditingProduct(null);
                }}>Cancelar</button>
              </form>
            </div>
        )}

        {modo === 'buscar' && !buscar && (
            <p>Ingresa un ID para buscar un producto.</p>
        )}
        {modo === 'buscar' && buscar && filteredProducts.length === 0 && (
            <p>No se encontró ningún producto con ID: {buscar}</p>
        )}
      </div>
  );
}

export default App;