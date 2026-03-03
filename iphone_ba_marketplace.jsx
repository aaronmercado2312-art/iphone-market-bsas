<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MQ_IPHONES</title>

<style>
body{
  margin:0;
  font-family:Arial, sans-serif;
  background:#111;
  color:#fff;
  scroll-behavior:smooth;
}

/* HEADER */
header{
  text-align:center;
  padding:60px 20px 10px 20px;
  font-size:3.5rem;
  font-weight:bold;
  text-transform:uppercase;
  background:linear-gradient(90deg,#ff3b3f,#ff9f3f);
  color:white;
}

.subtitle{
  text-align:center;
  font-size:1.3rem;
  padding:20px;
  background:linear-gradient(90deg,#ff3b3f,#ff9f3f);
  color:white;
}

.orange-bar{
  height:40px;
  background:#ff3b3f;
}

/* LAYOUT */
.main-container{
  display:flex;
}

.sidebar{
  position:sticky;
  top:0;
  width:220px;
  background:#111;
  padding:20px;
}

.sidebar h3{
  color:#ff9f3f;
}

.sidebar ul{
  list-style:none;
  padding:0;
}

.sidebar li{
  padding:10px;
  margin-bottom:5px;
  cursor:pointer;
  border-radius:6px;
  transition:0.3s;
}

.sidebar li:hover,
.sidebar li.active{
  background:#ff3b3f;
  color:white;
}

.content{
  flex:1;
  padding:20px;
}

section{
  padding:80px 0;
}

/* INICIO ESTILO APPLE */
.hero{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
}

.hero h1{
  font-size:4rem;
  margin-bottom:10px;
}

.hero h2{
  font-size:1.8rem;
  color:#ff9f3f;
  margin-bottom:30px;
}

.hero img{
  width:420px;
  max-width:90%;
  margin:30px 0;
  filter:drop-shadow(0 0 50px rgba(255,159,63,0.6));
  transition:0.5s;
}

.hero img:hover{
  transform:scale(1.05);
}

.hero-info{
  font-size:1.1rem;
  line-height:1.6;
  max-width:600px;
  color:#ccc;
}

/* PRODUCTOS */
.products{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
  gap:20px;
}

.product-card{
  background:#1c1c1c;
  border-radius:15px;
  padding:15px;
  text-align:center;
  transition:0.3s;
}

.product-card:hover{
  transform:scale(1.05);
  box-shadow:0 0 15px rgba(255,159,63,0.6);
}

.product-card img{
  width:100%;
  border-radius:10px;
}

.product-card h3{
  color:#ff9f3f;
}

.status{
  color:#00ff88;
  font-weight:bold;
}

/* CLIENTES */
.clientes-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
  gap:20px;
  margin-top:40px;
}

.cliente-box{
  height:150px;
  background:#1c1c1c;
  border-radius:15px;
  border:2px dashed #ff9f3f;
}

/* INSTAGRAM */
.insta-btn{
  position:fixed;
  bottom:20px;
  right:20px;
  background:#E1306C;
  color:white;
  padding:15px 25px;
  border-radius:50px;
  text-decoration:none;
  font-weight:bold;
  box-shadow:0 0 15px rgba(225,48,108,0.7);
  transition:0.3s;
}

.insta-btn:hover{
  transform:scale(1.1);
}

footer{
  text-align:center;
  padding:20px;
  color:#aaa;
}
</style>
</head>

<body>

<header>MQ_IPHONES</header>

<div class="subtitle">
Bienvenido a MQ_IPHONES. Calidad premium en cada equipo.
</div>

<div class="orange-bar"></div>

<div class="main-container">

<div class="sidebar">
<h3>Categorías</h3>
<ul>
<li data-target="inicio" class="active">INICIO</li>
<li data-target="todos">TODOS LOS PRODUCTOS</li>
<li data-target="iphones">IPHONES</li>
<li data-target="accesorios">ACCESORIOS</li>
<li data-target="clientes">CLIENTES ❤️</li>
</ul>
</div>

<div class="content">

<!-- INICIO NUEVO -->
<section id="inicio" class="hero">
<h1>iPhone. Potencia. Elegancia.</h1>
<h2>Compra y Venta de iPhones 🔥</h2>

<img src="11aee4d9-cbfa-4976-bae5-f440ac750293.png">

<div class="hero-info">
✅ Equipos 100% originales<br>
🔋 Baterías en excelente estado<br>
📱 Tomamos tu iPhone como parte de pago<br>
🚚 Entregas en Maquinista Savio y alrededores<br>
💎 Calidad Premium garantizada
</div>
</section>

<section id="todos">
<h2 style="color:#ff9f3f;">TODOS LOS PRODUCTOS</h2>
<div class="products" id="allProducts"></div>
</section>

<section id="iphones">
<h2 style="color:#ff9f3f;">IPHONES</h2>
<div class="products" id="iphoneProducts"></div>
</section>

<section id="accesorios">
<h2 style="color:#ff9f3f;">ACCESORIOS</h2>
<div class="products" id="accesorioProducts"></div>
</section>

<section id="clientes">
<h2 style="color:#ff9f3f;">CLIENTES ❤️</h2>
<div class="clientes-grid">
<div class="cliente-box"></div>
<div class="cliente-box"></div>
<div class="cliente-box"></div>
<div class="cliente-box"></div>
<div class="cliente-box"></div>
</div>
</section>

</div>
</div>

<footer>© 2026 MQ_IPHONES - Todos los derechos reservados</footer>

<a class="insta-btn" href="https://www.instagram.com/mq_iphones/" target="_blank">
📲 Seguinos en Instagram
</a>

<script>
const iphones=[
{name:"iPhone 8 Plus",price:250,img:"https://via.placeholder.com/300"},
{name:"iPhone 11",price:400,img:"https://via.placeholder.com/300"},
{name:"iPhone XR",price:450,img:"https://via.placeholder.com/300"},
{name:"iPhone 12",price:500,img:"https://via.placeholder.com/300"},
{name:"iPhone 13",price:650,img:"https://via.placeholder.com/300"},
{name:"iPhone 14",price:800,img:"https://via.placeholder.com/300"}
];

const accesorios=[
{name:"Lightning 1,2m",price:6000,img:"https://via.placeholder.com/300"},
{name:"Silicone case iPhone 12/12Pro",price:7000,img:"https://via.placeholder.com/300"},
{name:"Silicone case iPhone 13",price:7000,img:"https://via.placeholder.com/300"},
{name:"Earpods",price:9000,img:"https://via.placeholder.com/300"},
{name:"Airpods",price:24000,img:"https://via.placeholder.com/300"}
];

function renderProducts(list,id){
const container=document.getElementById(id);
container.innerHTML="";
list.forEach(p=>{
container.innerHTML+=`
<div class="product-card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>Precio: $${p.price}</p>
<p class="status">🟢 Disponible</p>
</div>
`;
});
}

renderProducts([...iphones,...accesorios],"allProducts");
renderProducts(iphones,"iphoneProducts");
renderProducts(accesorios,"accesorioProducts");

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".sidebar li");

window.addEventListener("scroll",()=>{
let current="";
sections.forEach(sec=>{
if(scrollY>=sec.offsetTop-200){
current=sec.id;
}
});
navItems.forEach(li=>{
li.classList.remove("active");
if(li.dataset.target===current){
li.classList.add("active");
}
});
});

navItems.forEach(li=>{
li.addEventListener("click",()=>{
document.getElementById(li.dataset.target).scrollIntoView({behavior:"smooth"});
});
});
</script>

</body>
</html>
