/* App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      console.log(response.data);
      
      const transformedProducts = response.data.products.records.map((product) => ({
        name: product._t, // Nombre del producto
        price: product.prices.promoPrice || product.prices.salePrice, // Precio
        image: product.largeImage || product.smallImage, // Imagen
      }));

      setProducts(transformedProducts);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App; intento de api liverpool*/

// App.js
// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import './styles.css'; // Importa los estilos

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <h1 className="app-title"> Lista de Productos </h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
