// App.jsx o iphone_ba_marketplace.jsx
import React, { useState } from "react";
import "./App.css"; // Para estilos

const initialProducts = [
  // Aquí irán tus productos, reemplaza las imágenes con las que me mandes
  { id: 1, name: "iPhone 12", price: 400, image: "ruta/iphone12.jpg" },
  { id: 2, name: "iPhone 13", price: 600, image: "ruta/iphone13.jpg" },
  { id: 3, name: "iPhone 14", price: 800, image: "ruta/iphone14.jpg" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <header>
        <h1>mq_iphones</h1>
      </header>

      <main>
        <div className="products">
          {initialProducts.map(p => (
            <div className="product-card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button onClick={() => addToCart(p)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </main>

      <aside className="cart">
        <h2>Carrito</h2>
        {cart.length === 0 && <p>Tu carrito está vacío</p>}
        {cart.map((item, idx) => (
          <div key={idx} className="cart-item">
            {item.name} - ${item.price}
          </div>
        ))}
        {cart.length > 0 && (
          <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
        )}
      </aside>
    </div>
  );
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #000;
  color: #fff;
}

header {
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  letter-spacing: 2px;
  animation: fadeIn 1.5s ease-in-out;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  background: #111;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  border-radius: 10px;
}

button {
  background: #ff3b3f;
  color: #fff;
  border: none;
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

button:hover {
  background: #ff595d;
}

.cart {
  position: fixed;
  top: 80px;
  right: 20px;
  background: #111;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  max-height: 70vh;
  overflow-y: auto;
}

.cart-item {
  padding: 5px 0;
  border-bottom: 1px solid #333;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
