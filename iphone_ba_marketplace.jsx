<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MQ_IPHONES</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: Arial, Helvetica, sans-serif;
scroll-behavior: smooth;
}

body{
background:black;
color:white;
display:flex;
}

/* ===== SIDEBAR ===== */

.sidebar{
width:220px;
background:#111;
height:100vh;
position:fixed;
padding-top:40px;
}

.sidebar a{
display:block;
color:white;
text-decoration:none;
padding:20px;
font-weight:bold;
transition:0.3s;
}

.sidebar a:hover{
background:orange;
color:black;
}

/* ===== CONTENIDO ===== */

.main{
margin-left:220px;
width:100%;
}

/* ===== HEADER ===== */

header{
background:orange;
text-align:center;
padding:40px 20px;
}

header h1{
font-size:55px;
letter-spacing:3px;
}

.subtitulo{
background:orange;
color:white;
font-size:22px;
padding:20px;
text-align:center;
font-weight:bold;
}

/* ===== HERO IPHONE ===== */

.hero{
height:90vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding:40px;
}

.hero img{
width:350px;
max-width:90%;
margin-bottom:30px;
}

.hero h2{
font-size:45px;
margin-bottom:20px;
}

.hero p{
font-size:20px;
color:#ccc;
max-width:700px;
}

/* ===== INFO IMPORTANTE ===== */

.info{
text-align:center;
padding:50px 20px;
}

.info h3{
font-size:35px;
margin-bottom:25px;
}

.info p{
font-size:20px;
margin:10px 0;
}

/* ===== PRODUCTOS ===== */

.section{
padding:60px 20px;
text-align:center;
}

.section h2{
font-size:40px;
margin-bottom:40px;
}

.productos{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:30px;
}

.card{
background:#111;
padding:20px;
border-radius:15px;
width:230px;
transition:0.3s;
}

.card:hover{
transform:scale(1.05);
}

.card img{
width:100%;
border-radius:10px;
margin-bottom:15px;
}

.card h4{
margin-bottom:10px;
}

.disponible{
color:lime;
font-weight:bold;
}

/* ===== BOTON INSTAGRAM ===== */

.instagram{
margin-top:40px;
}

.instagram a{
background:orange;
color:black;
padding:15px 30px;
border-radius:30px;
font-weight:bold;
text-decoration:none;
transition:0.3s;
}

.instagram a:hover{
background:white;
}

footer{
background:#111;
text-align:center;
padding:30px;
margin-top:50px;
color:#888;
}
</style>
</head>
<body>

<div class="sidebar">
<a href="#inicio">INICIO</a>
<a href="#todos">TODOS LOS PRODUCTOS</a>
<a href="#iphones">IPHONES</a>
<a href="#accesorios">ACCESORIOS</a>
</div>

<div class="main">

<header>
<h1>MQ_IPHONES</h1>
</header>

<div class="subtitulo">
Bienvenido a MQ_IPHONES, el lugar donde encontrarás los mejores iPhones y accesorios de calidad premium. Aceptamos tu iPhone como parte de pago. Buscanos en Instagram como mq_iphones.
</div>

<!-- HERO -->
<section class="hero" id="inicio">
<img src="iphone-hero.png" alt="iPhone">
<h2>Potencia. Diseño. Calidad Premium.</h2>
<p>Compra y venta de iPhones originales en Maquinista Savio, Buenos Aires. Equipos seleccionados con el mejor rendimiento y estética impecable.</p>
</section>

<!-- INFO IMPORTANTE (más chica y apenas bajás ya aparece) -->
<section class="info">
<h3>¿Por qué elegir MQ_IPHONES?</h3>
<p>📱 Equipos 100% originales</p>
<p>🔋 Baterías en excelente estado</p>
<p>💰 Tomamos tu iPhone como parte de pago</p>
<p>🚚 Entregas en Maquinista Savio y alrededores</p>
<p>💎 Calidad Premium garantizada</p>

<div class="instagram">
<a href="https://instagram.com/mq_iphones" target="_blank">IR A INSTAGRAM</a>
</div>
</section>

<!-- TODOS -->
<section class="section" id="todos">
<h2>TODOS LOS PRODUCTOS</h2>
<div class="productos">

<div class="card">
<h4>iPhone 11</h4>
<p>$ --- ARS</p>
<p class="disponible">Disponible</p>
</div>

<div class="card">
<h4>iPhone XR</h4>
<p>$ --- ARS</p>
<p class="disponible">Disponible</p>
</div>

<div class="card">
<h4>iPhone 12</h4>
<p>$ --- ARS</p>
<p class="disponible">Disponible</p>
</div>

<div class="card">
<h4>iPhone 13</h4>
<p>$ --- ARS</p>
<p class="disponible">Disponible</p>
</div>

<div class="card">
<h4>iPhone 14</h4>
<p>$ --- ARS</p>
<p class="disponible">Disponible</p>
</div>

<div class="card">
<h4>AirPods</h4>
<p>$24000 ARS</p>
<p class="disponible">Disponible</p>
</div>

</div>
</section>

<!-- IPHONES -->
<section class="section" id="iphones">
<h2>IPHONES</h2>
<p>Modelos disponibles: 8 Plus, XR, 11, 12, 13 y 14</p>
</section>

<!-- ACCESORIOS -->
<section class="section" id="accesorios">
<h2>ACCESORIOS</h2>
<p>Lightning 1,2m - $6000</p>
<p>Silicone Case - $7000</p>
<p>Earpods - $9000</p>
<p>Airpods - $24000</p>
<p>Fundas transparentes - $4500</p>
</section>

<footer>
MQ_IPHONES © 2026 - Maquinista Savio, Buenos Aires, Argentina
</footer>

</div>
</body>
</html>
