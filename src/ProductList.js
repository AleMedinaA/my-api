/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Función para obtener los productos desde la API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://tu-api-url.com/products');
        console.log(response.data.products); // Verifica la estructura de los productos

        console.log(response.data); // Verifica la estructura de los datos
        const transformedProducts = response.data.products.records.map((product) => ({
          name: product._t,
          price: product.allMeta.maximumListPrice,
          image: product.variants[0]?.largeImage, // Si existe una imagen
        }));
        
        setProducts(transformedProducts);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;*/
// ProductList.js
/*import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <img src={product.image} alt={product.name} style={{ width: '100px', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
}

export default ProductList; intento de liverpool*/

// ProductList.js
// ProductList.js
// ProductList.js

/*import React from 'react';

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;*/

import React, { useEffect, useState } from 'react'; // Importa React y los hooks
import './styles.css'; // Importa el archivo CSS

const ProductList = () => {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Llama al backend para obtener productos
  useEffect(() => {
    fetch('http://localhost:4000/products') // URL del backend
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Actualiza los productos en el estado
        setLoading(false); // Cambia el estado de carga a falso
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('No se pudieron cargar los productos.'); // Maneja errores
        setLoading(false); // Cambia el estado de carga a falso
      });
  }, []);

  // Muestra un mensaje de carga
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  // Muestra un mensaje de error si ocurre
  if (error) {
    return <p>{error}</p>;
  }

  // Renderiza la lista de productos
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          {/* Imagen del producto */}
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          {/* Nombre del producto */}
          <h3 className="product-name">{product.name}</h3>
          {/* Precio del producto */}
          <p className="product-price">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;