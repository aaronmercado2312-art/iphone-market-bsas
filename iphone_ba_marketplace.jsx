import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Phone, MapPin, Search } from "lucide-react";

const initialIphones = [
  { id: 1, model: "iPhone 15 Pro", price: 1200, condition: "Nuevo" },
  { id: 2, model: "iPhone 14 Pro", price: 950, condition: "Usado - Excelente" },
  { id: 3, model: "iPhone 13", price: 700, condition: "Usado - Muy Bueno" },
  { id: 4, model: "iPhone 12", price: 500, condition: "Reacondicionado" },
];

export default function IPhoneMarketplace() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredPhones = initialIphones.filter((phone) =>
    phone.model.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (phone) => {
    setCart([...cart, phone]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-2">iPhone Market BA</h1>
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <MapPin size={18} />
          <span>Buenos Aires, Argentina</span>
        </div>
        <p className="text-gray-500 mt-2">Compra y venta segura de iPhones nuevos y usados</p>
      </motion.div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10 flex items-center gap-2 bg-white p-3 rounded-2xl shadow">
        <Search size={18} />
        <input
          type="text"
          placeholder="Buscar modelo..."
          className="w-full outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhones.map((phone, index) => (
          <motion.div
            key={phone.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4" size={40} />
                <h2 className="text-xl font-semibold mb-2">{phone.model}</h2>
                <p className="text-gray-500 mb-1">{phone.condition}</p>
                <p className="text-lg font-bold mb-4">USD {phone.price}</p>
                <Button
                  onClick={() => addToCart(phone)}
                  className="rounded-2xl w-full flex items-center gap-2 justify-center"
                >
                  <ShoppingCart size={16} /> Agregar
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Cart Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-16 bg-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Carrito</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No hay productos en el carrito.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <p key={index} className="text-gray-700">{item.model} - USD {item.price}</p>
            ))}
            <p className="font-bold mt-4">Total: USD {total}</p>
            <a
              href={`https://wa.me/549XXXXXXXXXX?text=Hola,%20quiero%20comprar%20por%20USD%20${total}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-4 w-full rounded-2xl">Finalizar por WhatsApp</Button>
            </a>
          </div>
        )}
      </motion.div>

      {/* Sell Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">¿Querés vender tu iPhone?</h2>
        <p className="text-gray-600 mb-6">Cotizamos tu equipo en el momento y pagamos en efectivo o transferencia.</p>
        <a
          href="https://wa.me/549XXXXXXXXXX?text=Hola,%20quiero%20vender%20mi%20iPhone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="rounded-2xl px-8 py-4 text-lg shadow-lg hover:shadow-2xl transition-all">
            Vender por WhatsApp
          </Button>
        </a>
      </motion.div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        © 2026 iPhone Market BA - Buenos Aires, Argentina
      </footer>
    </div>
  );
}
