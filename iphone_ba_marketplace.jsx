
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aaron Store</title>
<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #111;
    color: white;
    text-align: center;
}
header {
    padding: 40px;
    font-size: 32px;
    font-weight: bold;
}
.productos {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}
.card {
    background: #1c1c1c;
    padding: 20px;
    border-radius: 15px;
    width: 250px;
}
button {
    background: #0071e3;
    border: none;
    padding: 10px 20px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
}
button:hover {
    background: #005bb5;
}
</style>
</head>
<body>

<header>📱 Aaron Store</header>

<div class="productos">

<div class="card">
<h2>iPhone 13</h2>
<p>$800 USD</p>
<button>Comprar</button>
</div>

<div class="card">
<h2>iPhone 14</h2>
<p>$950 USD</p>
<button>Comprar</button>
</div>

<div class="card">
<h2>iPhone 15</h2>
<p>$1100 USD</p>
<button>Comprar</button>
</div>

</div>

</body>
</html>