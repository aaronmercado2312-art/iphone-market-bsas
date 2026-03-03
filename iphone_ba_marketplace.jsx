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
    color: #111;
  }

  header {
    text-align: center;
    padding: 50px 20px 20px 20px;
    background: linear-gradient(90deg, #ff3b3f, #ff9f3f);
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
  }

  /* Subtítulo debajo del título */
  .subtitle {
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
    margin-top: 10px;
  }

  /* Franja azul cielo */
  .blue-bar {
    height: 40px;
    background-color: #00bfff;
  }

  /* Contenedor principal con barra lateral y contenido */
  .main-container {
    display: flex;
    background-color: #fff;
    color: #111;
    min-height: calc(100vh - 160px);
  }

  /* Barra lateral izquierda */
  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }

  .sidebar h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #00bfff;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
  }

  .sidebar ul li {
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
    margin-bottom: 5px;
  }

  .sidebar ul li:hover, .sidebar ul li.active {
    background-color: #00bfff;
    color: #fff;
  }

  /* Contenido de productos */
  .content {
    flex: 1;
    padding: 20px;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
    gap: 20px;
  }

  .product-card {
    background: #f9f9f9;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .product-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0,191,255,0.5);
  }

  .product-card img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .product-card h3 {
    margin: 5px 0;
    color: #00bfff;
  }

  .product-card p {
    margin: 3px 0;
    color: #111;
  }

  footer {
    text-align:center;
    padding:20px;
    background:#111;
    color:#aaa;
    font-size:0.9rem;
  }
</style>
</head>
<body>

<header>
  mq_iphones
  <div class="subtitle">
    Bienvenido a <b>mq_iphones</b>, el lugar donde encontrarás los mejores iPhones y accesorios de <b>calidad premium</b>.
  </div>
</header>

<div class="blue-bar"></div>

<div class="main-container">
  <div class="sidebar">
    <h3>Categorías</h3>
    <ul>
      <li id="allBtn" class="active">TODOS LOS PRODUCTOS</li>
      <li id="iphonesBtn">IPHONES</li>
      <li id="accesoriosBtn">ACCESORIOS</li>
    </ul>
  </div>

  <div class="content" id="content">
    <!-- Productos se mostrarán aquí -->
  </div>
</div>

<footer>© 2026 mq_iphones - Todos los derechos reservados</footer>

<script>
// Productos de ejemplo
const iphones = [
  {name:"iPhone 8 Plus", price:250, img:"ruta/iphone8plus.jpg"},
  {name:"iPhone 11", price:400, img:"ruta/iphone11.jpg"},
  {name:"iPhone XR", price:450, img:"ruta/iphonexr.jpg"},
  {name:"iPhone 12", price:500, img:"ruta/iphone12.jpg"},
  {name:"iPhone 13", price:650, img:"ruta/iphone13.jpg"},
  {name:"iPhone 14", price:800, img:"ruta/iphone14.jpg"},
];

const accesorios = [
  {name:"Lightning 1,2m", price:6000, img:"ruta/lightning.jpg"},
  {name:"Silicone case iPhone 12/12Pro", price:7000, img:"ruta/silicase12.jpg"},
  {name:"Silicone case iPhone 13", price:7000, img:"ruta/silicase13.jpg"},
  {name:"Earpods", price:9000, img:"ruta/earpods.jpg"},
  {name:"Airpods", price:24000, img:"ruta/airpods.jpg"},
  {name:"Silicone case iPhone 15", price:7000, img:"ruta/silicase15.jpg"},
  {name:"Silicone case iPhone 11", price:7000, img:"ruta/silicase11.jpg"},
  {name:"Silicone case iPhone 14 Pro", price:7000, img:"ruta/silicase14pro.jpg"},
  {name:"Silicone case iPhone 13 Pro", price:7000, img:"ruta/silicase13pro.jpg"},
  {name:"Silicone case iPhone 16/16 Pro", price:7000, img:"ruta/silicase16.jpg"},
  {name:"Transparente iPhone 11/14 Pro", price:4500, img:"ruta/transparente.jpg"},
];

// Función para renderizar productos
function renderProducts(list){
  const container = document.createElement("div");
  container.className = "products";
  list.forEach(p=>{
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<img src="${p.img}" alt="${p.name}">
                      <h3>${p.name}</h3>
                      <p>Precio: $${p.price}</p>`;
    container.appendChild(card);
  });
  return container;
}

// Mostrar productos según categoría
function showCategory(category){
  const content = document.getElementById("content");
  content.innerHTML = "";
  if(category==="all"){
    content.appendChild(renderProducts([...iphones, ...accesorios]));
  } else if(category==="iphones"){
    content.appendChild(renderProducts(iphones));
  } else if(category==="accesorios"){
    content.appendChild(renderProducts(accesorios));
  }

  // Activar botón de categoría
  document.querySelectorAll(".sidebar ul li").forEach(li=>li.classList.remove("active"));
  if(category==="all") document.getElementById("allBtn").classList.add("active");
  if(category==="iphones") document.getElementById("iphonesBtn").classList.add("active");
  if(category==="accesorios") document.getElementById("accesoriosBtn").classList.add("active");
}

// Eventos
document.getElementById("allBtn").addEventListener("click", ()=>showCategory("all"));
document.getElementById("iphonesBtn").addEventListener("click", ()=>showCategory("iphones"));
document.getElementById("accesoriosBtn").addEventListener("click", ()=>showCategory("accesorios"));

// Mostrar todos por defecto
showCategory("all");
</script>

</body>
</html>
