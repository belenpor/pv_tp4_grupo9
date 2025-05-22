// src/components/ProductItem.jsx
import React from 'react';

const ProductItem = ({ product, onDelete, onEdit }) => {
  const {
    id,
    descripcion,
    precioUnitario,
    descuento,
    precioConDescuento,
    stock,
  } = product;

  return (
    <div style={styles.card}>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Precio Unitario:</strong> ${precioUnitario.toFixed(2)}</p>
      <p><strong>Descuento:</strong> {descuento}%</p>
      <p><strong>Precio con Descuento:</strong> ${precioConDescuento.toFixed(2)}</p>
      <p><strong>Stock:</strong> {stock}</p>

      <button onClick={() => onEdit(product)}>Editar</button>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '0.5rem 0',
    borderRadius: '8px',
  }
};

export default ProductItem;
