// Configuración de la API del Backend (en Docker Compose corre en el puerto 5000)
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000/api'
  : '/api';

const menuGrid = document.getElementById('menu-grid');
const backendStatus = document.getElementById('backend-status');
const statusDot = document.querySelector('.status-dot');
const addDishForm = document.getElementById('add-dish-form');
const filterBtns = document.querySelectorAll('.filter-btn');

let allDishes = [];
let currentCategory = 'all';

// Verificar estado del backend
async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (res.ok) {
      backendStatus.textContent = 'Backend Online (API 5000)';
      statusDot.classList.add('online');
    } else {
      throw new Error('No 200 response');
    }
  } catch (err) {
    backendStatus.textContent = 'Backend no disponible';
    statusDot.classList.remove('online');
  }
}

// Cargar platillos del Backend
async function fetchMenu() {
  try {
    const res = await fetch(`${API_BASE_URL}/menu`);
    if (!res.ok) throw new Error('Error al cargar menú');
    allDishes = await res.json();
    renderMenu();
  } catch (error) {
    console.error(error);
    menuGrid.innerHTML = `<div class="loader">⚠️ No se pudo conectar al backend (${API_BASE_URL}/menu). Verifica que los contenedores estén corriendo.</div>`;
  }
}

// Renderizar tarjetas en pantalla
function renderMenu() {
  const filtered = currentCategory === 'all' 
    ? allDishes 
    : allDishes.filter(d => d.category.toLowerCase() === currentCategory.toLowerCase());

  if (filtered.length === 0) {
    menuGrid.innerHTML = `<div class="loader">No hay platillos en la categoría seleccionada.</div>`;
    return;
  }

  menuGrid.innerHTML = filtered.map(dish => `
    <article class="menu-card">
      <img src="${dish.image}" alt="${dish.name}" class="menu-card-img" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop'" />
      <div class="menu-card-body">
        <span class="menu-card-badge">${dish.category}</span>
        <h4 class="menu-card-title">${dish.name}</h4>
        <p class="menu-card-desc">${dish.description || 'Sin descripción disponible.'}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">$${parseFloat(dish.price).toFixed(2)}</span>
          <button class="order-btn" onclick="alert('¡Has seleccionado: ${dish.name}!')">Ordenar</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Filtros de categoría
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.getAttribute('data-category');
    renderMenu();
  });
});

// Manejo de formulario de alta
addDishForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('dish-name').value;
  const category = document.getElementById('dish-category').value;
  const price = document.getElementById('dish-price').value;
  const description = document.getElementById('dish-desc').value;

  try {
    const res = await fetch(`${API_BASE_URL}/menu`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, category, price, description })
    });

    if (res.ok) {
      addDishForm.reset();
      await fetchMenu();
    } else {
      alert('Error guardando platillo');
    }
  } catch (error) {
    console.error(error);
    alert('Error al comunicar con la API');
  }
});

// Inicialización
checkBackendHealth();
fetchMenu();
// Re-chequear estado periódicamente
setInterval(checkBackendHealth, 10000);
