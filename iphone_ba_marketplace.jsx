
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MQ_IPHONES</title>

<style>
  /* ===== NUEVA PALETA AZUL (AGREGADO SIN BORRAR NADA) ===== */

body{
  background:#f4f9ff !important;
  color:#1a1a1a !important;
}

body::before{
  background:#4da3ff !important;
}

body::after{
  background:#8ed0ff !important;
}

header{
  background:linear-gradient(90deg,#4da3ff,#8ed0ff) !important;
}

.subtitle{
  background:linear-gradient(90deg,#4da3ff,#8ed0ff) !important;
}

.orange-bar{
  background:#4da3ff !important;
}

.categories{
  background:#eaf4ff !important;
}

.categories li{
  background:#d6ebff !important;
  color:#1a1a1a !important;
}

.categories li:hover,
.categories li.active{
  background:#4da3ff !important;
  color:white !important;
}

.location-top{
  color:#4da3ff !important;
}

.hero img{
  filter:drop-shadow(0 0 60px rgba(142,208,255,0.6)) !important;
}

.product-card{
  background:white !important;
  box-shadow:0 5px 15px rgba(0,0,0,0.05) !important;
}

.product-card:hover{
  box-shadow:0 0 25px rgba(142,208,255,0.8) !important;
}

.product-card h3{
  color:#4da3ff !important;
}

.details{
  color:#555 !important;
}

.client-box{
  background:white !important;
}

.client-box:hover{
  box-shadow:0 0 25px rgba(142,208,255,0.8) !important;
}

footer{
  color:#555 !important;
}
body{
  margin:0;
  font-family:Arial, sans-serif;
  background:#111;
  color:#fff;
  scroll-behavior:smooth;
  overflow-x:hidden;
}

body::before,
body::after{
  content:"";
  position:fixed;
  width:500px;
  height:500px;
  border-radius:50%;
  filter:blur(150px);
  z-index:-1;
}

body::before{
  background:#ff3b3f;
  top:-150px;
  left:-150px;
}

body::after{
  background:#ff9f3f;
  bottom:-150px;
  right:-150px;
}

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
  font-size:1.5rem;
  padding:25px;
  background:linear-gradient(90deg,#ff3b3f,#ff9f3f);
  color:white;
}

.orange-bar{
  height:40px;
  background:#ff3b3f;
}

.categories{
  width:100%;
  display:flex;
  justify-content:center;
  background:#1a1a1a;
  padding:15px 0;
  position:sticky;
  top:0;
  z-index:1000;
}

.categories ul{
  list-style:none;
  display:flex;
  gap:20px;
  padding:0;
  margin:0;
}

.categories li{
  padding:12px 20px;
  cursor:pointer;
  border-radius:8px;
  font-weight:bold;
  transition:all 0.3s ease;
  background:#222;
}

.categories li:hover,
.categories li.active{
  background:#ff3b3f;
}

.content{
  padding:40px;
  max-width:1300px;
  margin:auto;
}

section{
  padding:100px 0;
}

.hero{
  .logo-hero{
  width:220px;
  max-width:90%;
  margin:40px 0 10px 0;
  filter:drop-shadow(0 0 25px rgba(255,59,63,0.6));
}
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

.hero-text{
  max-width:700px;
  font-size:1.2rem;
  line-height:1.6;
  color:#ddd;
  margin-top:20px;
}

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
  transition:0.4s;
  opacity:0;
  transform:translateY(40px);
}

.product-card.show{
  opacity:1;
  transform:translateY(0);
}

.product-card:hover{
  transform:scale(1.05);
  box-shadow:0 0 25px rgba(255,159,63,0.8);
}

.product-card img{
  width:100%;
  border-radius:10px;
}

.product-card h3{
  color:#ff9f3f;
}

.price{
  font-weight:bold;
  margin-top:5px;
}

.details{
  font-size:0.9rem;
  color:#ccc;
}

.status{
  color:#00ff88;
  font-weight:bold;
  margin-top:5px;
}

.clients-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(180px,1fr));
  gap:25px;
  margin-top:40px;
  justify-items:center;
}

.client-box{
  width:180px;
  height:320px; /* formato vertical tipo historia */
  border-radius:20px;
  overflow:hidden;
  transition:0.3s;
  background:#1c1c1c;
}

.client-box img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.client-box:hover{
  transform:scale(1.05);
  box-shadow:0 0 25px rgba(255,159,63,0.9);
}

.client-box img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.client-box:hover{
  transform:scale(1.05);
  box-shadow:0 0 20px rgba(255,159,63,0.8);
}

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
  /* ===== LETRAS NEGRAS DEFINITIVAS ===== */

body{
  color:#000 !important;
  background:#f4f9ff !important;
}

header,
.subtitle,
h1,h2,h3,h4,h5,h6,
p,
li,
.price,
.details,
.status,
.hero-text,
.location-top,
footer{
  color:#000 !important;
}

.categories li{
  color:#000 !important;
}

.categories li:hover,
.categories li.active{
  color:#000 !important;
}

.product-card{
  background:#ffffff !important;
  color:#000 !important;
}

.client-box{
  background:#ffffff !important;
}
</style>
</head>

<body>

<header>MQ_IPHONES</header>

<div class="subtitle">
Bienvenido a MQ_IPHONES, el lugar donde encontrarás los mejores iPhones y accesorios de calidad premium.
Aceptamos tu iPhone como parte de pago.
</div>

<div class="orange-bar"></div>

<div class="categories">
<ul>
<li data-target="inicio" class="active">INICIO</li>
<li data-target="todos">TODOS</li>
<li data-target="iphones">IPHONES</li>
<li data-target="accesorios">ACCESORIOS</li>
<li data-target="clientes">CLIENTES ❤️</li>
</ul>
</div>

<div class="content">

<section id="inicio" class="hero">

<!-- IMAGEN MQIPHONE -->
<img src="mqiphone.png" class="logo-hero">

<div class="location-top">
📍 Estamos en Maquinista Savio, Buenos Aires, Argentina.
</div>

<img src="iphone.jpg">

<div class="hero-text">
Equipos 100% originales 🔋  
Baterías en excelente estado 📱  
Tomamos tu iPhone como parte de pago 💰  
Entregas en Maquinista Savio y alrededores 🚚  
Calidad Premium garantizada 💎
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
<h2 style="color:#ff9f3f;"> ALGUNOS CLIENTES ❤️</h2>

<div class="clients-grid">
<div class="client-box"><img src="cliente1.png"></div>
<div class="client-box"><img src="cliente2.png"></div>
<div class="client-box"><img src="cliente3.png"></div>
<div class="client-box"><img src="cliente4.png"></div>
<div class="client-box"><img src="cliente5.png"></div>
</div>

</section>

</div>

<footer>© 2026 MQ_IPHONES - Todos los derechos reservados</footer>

<script>

/* FUNCIONAMIENTO DE CATEGORÍAS */
const items=document.querySelectorAll(".categories li");

items.forEach(item=>{
item.addEventListener("click",()=>{
items.forEach(i=>i.classList.remove("active"));
item.classList.add("active");

document.getElementById(item.dataset.target)
.scrollIntoView({behavior:"smooth"});
});
});

/* IPHONES */
const iphones=[
{name:"iPhone 14 Pro",price:545,battery:"100%",storage:"128GB",img:"iphone14 pro.png"},
{name:"iPhone 14",price:410,battery:"86%",storage:"128GB",img:"iphone14.png"},
{name:"iPhone 13",price:385,battery:"+80%",storage:"128GB",img:"iphone13.png"},
{name:"iPhone 11",price:265,battery:"100%",storage:"64GB",img:"iphone11.png"}
];

/* ACCESORIOS */
const accesorios=[
{name:"Lightning 1,2m",price:6000,img:"lightning1,2m.png"},
{name:"Silicone Case iPh 11",price:7000,img:"siliconecaseiph11.png"},
{name:"Silicone Case iPh 13 Pro",price:7000,img:"siliconecaseiph13pro.png"},
{name:"Silicone Case iPh 14 Pro",price:7000,img:"siliconecaseiph14pro.png"},
{name:"Silicone Case iPh 16 Pro Max",price:7000,img:"siliconecaseiph16promax.png"},
{name:"Silicone Case iPh 16 / 16 Pro",price:7000,img:"siliconecaseiph16.png"},
{name:"Silicone case iPhone 13",price:7000,img:"siliconecaseiph13.png"},
{name:"Earpods",price:9000,img:"earpods.png"},
{name:"Airpods",price:24000,img:"airpods.png"},
{name:"Fashion Case iPh 11 / 12 / 14 Pro",price:8500,img:"fashioncase2.png"},
{name:"Transparentes iPh 11 / 14 Pro",price:4500,img:"transparentesiph1114pro.png"},
{name:"MagSafe iPh 12 / 12 Pro / 13 Pro / 14 Pro / 15",price:10000,img:"magfaseiphall.png"},
{name:"Clear Case iPh 12 / 12 Pro / 13 Pro / 14 Pro",price:8000,img:"clearcase.png"},
{name:"Transparentes Magnéticas",price:5000,img:"transparentesmagneticas.png"},
{name:"Importadas con Correa",price:8000,img:"importadasconcorrea.png"},
{name:"Case Animal Print",price:9000,img:"caseanimalprint.png"},
{name:"Magnetic iPh 13 / 14",price:8500,img:"magnetic.png"},
{name:"Fashion Case iPh 11 / 13 / 13 Pro",price:8000,img:"fashioncase.png"},
{name:"Metal Case iPh 13 / 14",price:8500,img:"metalcase.png"},
{name:"Glass 9D",price:1800,img:"glass9d.png"},
{name:"Antiespía",price:2500,img:"antiespia.png"},
{name:"Cargadores MagSafe",price:17000,img:"cargadoresmagsafe.png"},
{name:"Protectores de Cámaras",price:2500,img:"protectoresdecamara.png"}
];

function renderProducts(list,id){
const container=document.getElementById(id);
container.innerHTML="";

list.forEach(p=>{
let isIphone = p.battery !== undefined;

container.innerHTML+=`
<div class="product-card">
<img src="${p.img}">
<h3>${p.name}</h3>
<div class="price">$${p.price} ${isIphone ? "USD" : "ARS"}</div>
${isIphone ? `
<div class="details">🔋 Batería: ${p.battery}</div>
<div class="details">🧠 Memoria: ${p.storage}</div>
` : ``}
<div class="status">🟢 Disponible</div>
</div>
`;
});

setTimeout(()=>{
document.querySelectorAll(".product-card").forEach(card=>{
card.classList.add("show");
});
},100);
}

renderProducts([...iphones,...accesorios],"allProducts");
renderProducts(iphones,"iphoneProducts");
renderProducts(accesorios,"accesorioProducts");

</script>

<a class="insta-btn" href="https://www.instagram.com/mq_iphone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
📲 Seguinos en Instagram
</a>

</body>
</html>
