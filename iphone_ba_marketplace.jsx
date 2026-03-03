<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MQ iPhone</title>

<style>
body{
  margin:0;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background:#000;
  color:white;
  text-align:center;
}

/* UBICACION */
.ubicacion{
  background:#111;
  padding:10px;
  font-size:14px;
}

/* TITULO */
h1{
  font-size:50px;
  margin-top:30px;
}

.subtitulo{
  font-size:20px;
  opacity:0.8;
  margin-bottom:40px;
}

/* IMAGEN PRINCIPAL */
.hero img{
  width:80%;
  max-width:900px;
  border-radius:20px;
  margin-bottom:40px;
}

/* CATEGORIAS */
.categorias{
  position:sticky;
  top:20px;
  width:60%;
  margin:0 auto;
  display:flex;
  justify-content:space-around;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.1);
  padding:15px;
  border-radius:20px;
  z-index:1000;
}

.categorias a{
  color:white;
  text-decoration:none;
  font-weight:bold;
  font-size:18px;
}

/* SECCIONES */
section{
  padding:100px 20px;
}

.producto{
  margin:30px 0;
}

.producto img{
  width:250px;
  border-radius:15px;
}

/* INSTAGRAM */
.instagram{
  margin:60px 0;
}

.instagram a{
  background:white;
  color:black;
  padding:15px 30px;
  border-radius:30px;
  text-decoration:none;
  font-weight:bold;
}
</style>
</head>

<body>

<div class="ubicacion">
📍 Estamos en Maquinista Savio, Buenos Aires, Argentina.
</div>

<h1>MQ iPhone</h1>
<div class="subtitulo">Calidad premium en cada producto</div>

<div class="hero">
  <!-- CAMBIA el nombre si tu imagen se llama distinto -->
  <img src="imagen-principal.jpg" alt="MQ iPhone">
</div>

<div class="categorias">
  <a href="#todos">Todos</a>
  <a href="#iphones">iPhones</a>
  <a href="#accesorios">Accesorios</a>
</div>

<section id="todos">
  <h2>Todos los productos</h2>

  <div class="producto">
    <img src="iphone1.jpg" alt="iPhone">
    <p>iPhone 15 Pro</p>
  </div>

  <div class="producto">
    <img src="accesorio1.jpg" alt="Accesorio">
    <p>AirPods</p>
  </div>
</section>

<section id="iphones">
  <h2>iPhones</h2>

  <div class="producto">
    <img src="iphone1.jpg" alt="iPhone">
    <p>iPhone 15 Pro</p>
  </div>

  <div class="producto">
    <img src="iphone2.jpg" alt="iPhone">
    <p>iPhone 14</p>
  </div>
</section>

<section id="accesorios">
  <h2>Accesorios</h2>

  <div class="producto">
    <img src="accesorio1.jpg" alt="Accesorio">
    <p>AirPods</p>
  </div>

  <div class="producto">
    <img src="accesorio2.jpg" alt="Accesorio">
    <p>Fundas Premium</p>
  </div>
</section>

<div class="instagram">
  <a href="https://www.instagram.com/mq_iphone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
    Seguinos en Instagram
  </a>
</div>

</body>
</html>
