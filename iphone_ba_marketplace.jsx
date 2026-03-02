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
