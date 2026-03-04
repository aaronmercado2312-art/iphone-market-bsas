<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MQ Store</title>

<style>
body{
margin:0;
font-family:Arial, Helvetica, sans-serif;
background:#0f0f0f;
color:white;
overflow-x:hidden;
}

/* 🔵 CIRCULOS ESTATICOS */
.bg-pattern{
position:fixed;
width:100%;
height:100%;
top:0;
left:0;
z-index:-1;
background:
radial-gradient(circle at 10% 20%, rgba(0,123,255,0.15) 0%, transparent 40%),
radial-gradient(circle at 80% 30%, rgba(0,123,255,0.15) 0%, transparent 40%),
radial-gradient(circle at 30% 80%, rgba(0,123,255,0.15) 0%, transparent 40%),
radial-gradient(circle at 90% 90%, rgba(0,123,255,0.15) 0%, transparent 40%);
}

/* Header */
header{
text-align:center;
padding:40px 20px 10px 20px;
}

header h1{
font-size:40px;
margin:0;
}

header p{
opacity:0.7;
margin-top:10px;
}

/* Categorías */
.categories{
display:flex;
justify-content:center;
gap:20px;
margin:20px 0;
list-style:none;
padding:0;
}

.categories li{
cursor:pointer;
padding:10px 20px;
border-radius:20px;
background:#1c1c1c;
transition:0.3s;
}

.categories li:hover,
.categories li.active{
background:#007bff;
}

/* Productos */
.section{
padding:40px 10%;
}

.products{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
}

.product-card{
background:#1a1a1a;
padding:20px;
border-radius:15px;
text-align:center;
opacity:0;
transform:translateY(30px);
transition:0.6s;
}

.product-card.show{
opacity:1;
transform:translateY(0);
}

.product-card img{
width:100%;
max-height:300px;
object-fit:contain;
margin-bottom:15px;
}

.price{
font-size:22px;
color:#00ff88;
margin:10px 0;
}

.details{
font-size:14px;
opacity:0.8;
}

.status{
margin-top:10px;
font-size:14px;
color:#00ff88;
}

</style>
</head>
<body>

<div class="bg-pattern"></div>

<header>
<h1>MQ Store</h1>
<p>iPhones y accesorios originales</p>
</header>

<ul class="categories">
<li class="active" data-target="iphones">iPhones</li>
<li data-target="accesorios">Accesorios</li>
</ul>

<!-- iPhones -->
<section id="iphones" class="section">
<h2>iPhones</h2>
<div class="products" id="iphoneProducts"></div>
</section>

<!-- Accesorios -->
<section id="accesorios" class="section">
<h2>Accesorios</h2>
<div class="products" id="accesorioProducts"></div>
</section>

<script>

/* iPhones */
const iphones=[
{
name:"iPhone 14 Pro",
price:545,
battery:"100%",
storage:"128GB",
img:"iphone14 pro.png"
},
{
name:"iPhone 14",
price:410,
battery:"86%",
storage:"128GB",
img:"iphone14.png"
},
{
name:"iPhone 13 Pro",
price:510,
battery:"-",
storage:"-",
img:"https://via.placeholder.com/400x500?text=iPhone+13+Pro"
},
{
name:"iPhone 13",
price:385,
battery:"+80%",
storage:"128GB",
img:"iphone13.png"
},
{
name:"iPhone 11",
price:265,
battery:"100%",
storage:"64GB",
img:"iphone11.png"
}
];

/* Accesorios */
const accesorios=[
{name:"Lightning 1,2m",price:6000},
{name:"Silicone Case iPh 11 Pro Max",price:8000},
{name:"Airpods",price:24000}
];

function renderIphones(){
const container=document.getElementById("iphoneProducts");
container.innerHTML="";
iphones.forEach(p=>{
container.innerHTML+=`
<div class="product-card">
<img src="${p.img}">
<h3>${p.name}</h3>
<div class="price">$${p.price} USD</div>
<div class="details">🔋 Batería: ${p.battery}</div>
<div class="details">🧠 Memoria: ${p.storage}</div>
<div class="status">🟢 Disponible</div>
</div>
`;
});
}

function renderAccesorios(){
const container=document.getElementById("accesorioProducts");
container.innerHTML="";
accesorios.forEach(p=>{
container.innerHTML+=`
<div class="product-card">
<img src="https://via.placeholder.com/400x500?text=Accesorio">
<h3>${p.name}</h3>
<div class="price">$${p.price} ARS</div>
<div class="status">🟢 Disponible</div>
</div>
`;
});
}

renderIphones();
renderAccesorios();

setTimeout(()=>{
document.querySelectorAll(".product-card").forEach(card=>{
card.classList.add("show");
});
},100);

/* Categorías */
const items=document.querySelectorAll(".categories li");
items.forEach(item=>{
item.addEventListener("click",()=>{
items.forEach(i=>i.classList.remove("active"));
item.classList.add("active");
document.getElementById(item.dataset.target)
.scrollIntoView({behavior:"smooth"});
});
});

</script>

</body>
</html>
