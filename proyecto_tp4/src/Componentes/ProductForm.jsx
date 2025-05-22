// src/components/ProductForm.jsx
import React, { useState, useEffect } from 'react';

const initialState = {
  id: '',
  descripcion: '',
  precioUnitario: '',
  descuento: '',
  stock: '',
};

const ProductForm = ({ onSubmit, editingProduct }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    } else {
      setFormData(initialState);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const precioConDescuento = parseFloat(formData.precioUnitario) * (1 - parseFloat(formData.descuento) / 100);

    onSubmit({
      ...formData,
      precioUnitario: parseFloat(formData.precioUnitario),
      descuento: parseFloat(formData.descuento),
      stock: parseInt(formData.stock),
      precioConDescuento,
    });

    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProduct ? 'Editar Producto' : 'Agregar Producto'}</h2>

      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        disabled={!!editingProduct}
        required
      />
      <input
        type="text"
        name="descripcion"
        value={formData.descripcion}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />
      <input
        type="number"
        name="precioUnitario"
        value={formData.precioUnitario}
        onChange={handleChange}
        placeholder="Precio Unitario"
        required
      />
      <input
        type="number"
        name="descuento"
        value={formData.descuento}
        onChange={handleChange}
        placeholder="Descuento (%)"
        required
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        required
      />
      <button type="submit">
        {editingProduct ? 'Guardar Cambios' : 'Agregar Producto'}
      </button>
    </form>
  );
};

export default ProductForm;