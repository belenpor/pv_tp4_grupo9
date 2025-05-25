import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ProductForm from './Componentes/ProductForm';
import ProductList from './Componentes/ProductList';
import SearchBar from './Componentes/SearchBar';

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  // Mostrar cambios en consola
  useEffect(() => {
    console.log('Lista de productos actualizada:', products);
  }, [products]);

  const handleAddOrEdit = useCallback((product) => {
    setProducts(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? product : p);
      }
      return [...prev, product];
    });
    setEditingProduct(null);
  }, []);

  const handleDelete = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  const handleEdit = useCallback((product) => {
    setEditingProduct(product);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toString().includes(searchTerm)
    );
  }, [products, searchTerm]);

  return (
    <div className="container">
      <h1>Gestión de Productos</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductForm onSubmit={handleAddOrEdit} editingProduct={editingProduct} />
      <ProductList products={filteredProducts} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;