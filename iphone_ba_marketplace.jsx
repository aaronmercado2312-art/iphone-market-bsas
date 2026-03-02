<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>mq_iphones</title>
<style>
  body { margin:0; font-family: Arial; background: #000; color: #fff; }
  header { text-align:center; padding:20px; font-size:2rem; }
  .products { display:grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap:20px; padding:20px; }
  .product-card { background:#111; border-radius:10px; padding:15px; text-align:center; transition: transform .3s; }
  .product-card:hover { transform: scale(1.05); }
  .product-card img { width:100%; border-radius:10px; }
  button { background:#ff3b3f; color:#fff; border:none; padding:10px 15px; margin-top:10px; cursor:pointer; border-radius:5px; }
  button:hover { background:#ff595d; }
  .cart { position:fixed; top:80px; right:20px; background:#111; padding:20px; border-radius:10px; width:250px; max-height:70vh; overflow-y:auto; }
</style>
</head>
<body>

<header>mq_iphones</header>

<div class="products" id="products">
  <!-- Aquí se agregarán los productos desde JS -->
</div>

<div class="cart" id="cart">
  <h2>Carrito</h2>
  <p id="cart-empty">Tu carrito está vacío</p>
  <div id="cart-items"></div>
  <p id="cart-total"></p>
</div>

<script>
const products = [
  // Aquí puedes poner tus productos
  {name:"iPhone 12", price:400, img:"ruta/iphone12.jpg"},
  {name:"iPhone 13", price:600, img:"ruta/iphone13.jpg"},
  {name:"iPhone 14", price:800, img:"ruta/iphone14.jpg"}
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
    div.textContent = `${item.name} - $${item.price}`;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });
  cartTotal.textContent = "Total: $" + total;
}
</script>

</body>
</html>
