<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>mq_iphones</title>
<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #111;
    color: #fff;
  }

  header {
    text-align: center;
    padding: 30px;
    background: linear-gradient(90deg, #ff3b3f, #ff9f3f);
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    animation: fadeIn 1.5s ease-in-out;
  }

  header p {
    font-size: 1.2rem;
    margin-top: 10px;
    font-weight: normal;
  }

  .location {
    text-align:center;
    font-size: 0.9rem;
    color:#ccc;
    margin-bottom: 20px;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 25px;
    padding: 20px;
  }

  .product-card {
    background: #222;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 10px rgba(255,255,255,0.05);
  }

  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255,59,63,0.6);
  }

  .product-card img {
    width: 100%;
    border-radius: 10px;
    margin-bottom:10px;
  }

  .product-card h3 {
    margin: 10px 0 5px 0;
    font-size: 1.2rem;
    color: #ff9f3f;
  }

  .product-card p {
    margin: 5px 0;
  }

  button {
    background: #ff3b3f;
    color: #fff;
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    transition: background 0.3s;
  }

  button:hover {
    background: #ff595d;
  }

  .cart {
    position: fixed;
    top: 100px;
    right: 20px;
    background: #222;
    padding: 20px;
    border-radius: 15px;
    width: 280px;
    max-height: 75vh;
    overflow-y: auto;
    box-shadow: 0 0 20px rgba(0,0,0,0.7);
  }

  .cart h2 {
    margin-top: 0;
    color: #ff9f3f;
  }

  .cart-item {
    padding: 8px 0;
    border-bottom: 1px solid #444;
  }

  #cart-total {
    font-weight: bold;
    margin-top: 10px;
    color:#ff3b3f;
  }

  footer {
    text-align: center;
    padding: 20px;
    background: #111;
    color:#aaa;
    margin-top: 50px;
    font-size:0.9rem;
  }

  @keyframes fadeIn {
    from { opacity:0; }
    to { opacity:1; }
  }

  .section-title {
    text-align:center;
    margin-top:20px;
    margin-bottom:10px;
    font-size:1.5rem;
    color:#ff9f3f;
  }

  .section-desc {
    text-align:center;
    margin-bottom:30px;
    color:#ccc;
  }
</style>
</head>
<body>

<header>
  mq_iphones
  <p>Compra y venta de celulares iPhones y accesorios - Calidad Premium</p>
</header>

<div class="location">Ubicación: Maquinista Savio, Buenos Aires, Argentina</div>

<div class="section-title">Nuestros Productos</div>
<div class="section-desc">Modelos disponibles: iPhone 8 Plus, 11, XR, 12, 13, 14</div>

<div class="products" id="products">
  <!-- Productos se generarán con JS -->
</div>

<div class="cart" id="cart">
  <h2>Carrito</h2>
  <p id="cart-empty">Tu carrito está vacío</p>
  <div id="cart-items"></div>
  <p id="cart-total"></p>
</div>

<footer>
  © 2026 mq_iphones - Todos los derechos reservados
</footer>

<script>
// Lista de productos
const products = [
  {name:"iPhone 8 Plus", price:250, img:"ruta/iphone8plus.jpg"},
  {name:"iPhone 11", price:400, img:"ruta/iphone11.jpg"},
  {name:"iPhone XR", price:450, img:"ruta/iphonexr.jpg"},
  {name:"iPhone 12", price:500, img:"ruta/iphone12.jpg"},
  {name:"iPhone 13", price:650, img:"ruta/iphone13.jpg"},
  {name:"iPhone 14", price:800, img:"ruta/iphone14.jpg"},
  {name:"Fundas iPhone", price:20, img:"ruta/funda.jpg"}
];

const productsDiv = document.getElementById("products");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartEmpty = document.getElementById("cart-empty");
let cart = [];

products.forEach((p, idx)=>{
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>$${p.price}</p>`;
  const btn = document.createElement("button");
  btn.textContent = "Agregar al carrito";
  btn.onclick = ()=>{
    cart.push(p);
    renderCart();
  };
  card.appendChild(btn);
  productsDiv.appendChild(card);
});

function renderCart(){
  cartItemsDiv.innerHTML = "";
  if(cart.length==0){ cartEmpty.style.display="block"; cartTotal.textContent=""; return; }
  cartEmpty.style.display="none";
  let total = 0;
  cart.forEach((item)=>{
    const div = document.createElement("div");
    div.className="cart-item";
    div.textContent = `${item.name} - $${item.price}`;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });
  cartTotal.textContent = "Total: $" + total;
}
</script>

</body>
</html>
