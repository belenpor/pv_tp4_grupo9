
// src/components/ProductList.jsx
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onDelete, onEdit }) => {
  if (products.length === 0) {
    return <p>No hay productos que coincidan con la búsqueda.</p>;
  }

  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ProductList;