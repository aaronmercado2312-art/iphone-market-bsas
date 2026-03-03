<script>

/* iPhones */
const iphones=[
{
name:"iPhone 14 Pro",
price:545,
battery:"100%",
storage:"128GB",
img:"https://via.placeholder.com/400x500?text=iPhone+14+Pro"
},
{
name:"iPhone 14",
price:410,
battery:"86%",
storage:"128GB",
img:"https://via.placeholder.com/400x500?text=iPhone+14"
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
img:"https://via.placeholder.com/400x500?text=iPhone+13"
},
{
name:"iPhone 11",
price:265,
battery:"100%",
storage:"64GB",
img:"iphone11.png"   // SOLO este usa tu imagen
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
