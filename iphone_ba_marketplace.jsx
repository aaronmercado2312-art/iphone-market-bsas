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
  font-size:1.7rem;
  padding:25px;
  background:linear-gradient(90deg,#ff3b3f,#ff9f3f);
  color:white;
}

.orange-bar{
  height:40px;
  background:#ff3b3f;
}

/* SIDEBAR TRANSPARENTE */
.sidebar{
  position:fixed;
  left:0;
  top:0;
  width:260px;
  height:100vh;
  padding:30px 20px;
  backdrop-filter: blur(12px);
  background:rgba(0,0,0,0.3);
  border-right:1px solid rgba(255,255,255,0.1);
}

.sidebar h3{
  color:#ff9f3f;
  font-size:1.6rem;
  margin-bottom:20px;
}

.sidebar ul{
  list-style:none;
  padding:0;
}

.sidebar li{
  padding:18px;
  margin-bottom:15px;
  cursor:pointer;
  border-radius:10px;
  transition:0.3s;
  font-size:1.2rem;
  font-weight:bold;
}

.sidebar li:hover,
.sidebar li.active{
  background:#ff3b3f;
  color:white;
}

/* CONTENIDO */
.content{
  margin-left:260px;
  padding:40px;
}

section{
  padding:100px 0;
}

/* HERO */
.hero{
  min-height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
}

.location-top{
  font-size:1.4rem;
  color:#ff9f3f;
  font-weight:bold;
  margin-bottom:25px;
}

.hero img{
  width:500px;
  max-width:95%;
  margin:30px 0;
  filter:drop-shadow(0 0 60px rgba(255,159,63,0.6));
  transition:0.5s;
}

.hero img:hover{
  transform:scale(1.05);
}

.hero-info{
  font-size:1.2rem;
  line-height:1.8;
  max-width:700px;
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

/* INSTAGRAM */
.insta-btn{
  position:fixed;
  bottom:20px;
  right:20px;
  background:#E1306C;
  color:white;
  padding:18px 30px;
  border-radius:50px;
  text-decoration:none;
  font-weight:bold;
  box-shadow:0 0 20px rgba(225,48,108,0.8);
  transition:0.3s;
  font-size:1.1rem;
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
Bienvenido a MQ_IPHONES, el lugar donde encontrarás los mejores iPhones y accesorios de calidad premium.
Aceptamos tu iPhone como parte de pago. Cualquier consulta, búscanos en Instagram como mq_iphones.
</div>

<div class="orange-bar"></div>

<div class="sidebar">
<h3>Categorías</h3>
<ul>
<li data-target="inicio" class="active">INICIO</li>
<li data-target="todos">TODOS LOS PRODUCTOS</li>
<li data-target="iphones">IPHONES</li>
<li data-target="accesorios">ACCESORIOS</li>
</ul>
</div>

<div class="content">

<section id="inicio" class="hero">

<div class="location-top">
📍 Estamos en Maquinista Savio, Buenos Aires, Argentina.
</div>

<img src="iphone.jpg">

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

</div>

<footer>© 2026 MQ_IPHONES - Todos los derechos reservados</footer>

<a class="insta-btn" href="https://www.instagram.com/mq_iphone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
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
</script>

</body>
</html>
