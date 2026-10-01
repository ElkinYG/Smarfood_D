const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Datos en memoria representativos de SmartFood (menú de restaurante)
let menuItems = [
  {
    id: 1,
    name: 'Hamburguesa Gourmet Trufada',
    category: 'Hamburguesas',
    description: 'Carne angus seleccionada, queso brie fundido, rúcula y mayo trufada.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Pizza Artesanal Margherita',
    category: 'Pizzas',
    description: 'Masa madre fermentada 48h, salsa pomodoro San Marzano y albahaca fresca.',
    price: 10.50,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Bowl Poké Salmón Fresco',
    category: 'Saludable',
    description: 'Salmón fresco marinado, arroz jazmín, aguacate, edamame y aderezo sésamo.',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Tacos de Birria Res (x3)',
    category: 'Tacos',
    description: 'Carne deshebrada cocida a fuego lento con consomé especial y cebollita.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&auto=format&fit=crop'
  }
];

// Rutas de la API
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'SmartFood Backend API', timestamp: new Date() });
});

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.post('/api/menu', (req, res) => {
  const { name, category, description, price, image } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Nombre y precio son requeridos' });
  }

  const newItem = {
    id: Date.now(),
    name,
    category: category || 'General',
    description: description || '',
    price: parseFloat(price),
    image: image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop'
  };

  menuItems.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 SmartFood Backend corriendo en http://0.0.0.0:${PORT}`);
});
