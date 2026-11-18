// ====== Datos del almacén ======
// Para cambiar un precio: editá "price" (número en pesos, sin puntos). null = "Consultar precio".
// unit: 'promo' (se pide por unidad), 'kg' (se pide por kilo, de a medio kilo) o 'u' (por paquete/unidad).
// group: en qué bloque aparece (promos, nuevos, extra). cats: en qué filtros aparece.
// options: si el cliente tiene que elegir algo (sabor, tipo), va acá.
const WHATSAPP = '5493816267224';
const STORE = 'Almacén de Pollos';
const ADDRESS = 'Av. Solano Vera 390';

const CATEGORIES = [
  { id: 'todo', label: 'Todo', icon: 'squares-four' },
  { id: 'promos', label: 'Promos', icon: 'tag' },
  { id: 'pollo', label: 'Pollo', icon: 'bird' },
  { id: 'carnes', label: 'Ternera y cerdo', icon: 'cow' },
  { id: 'pescado', label: 'Pescado', icon: 'fish' },
  { id: 'hornear', label: 'Listo para hornear', icon: 'oven' },
  { id: 'papas', label: 'Papas y bocaditos', icon: 'smiley' },
];

const GROUPS = [
  { id: 'promos', title: 'Promos de la semana', sub: 'Combos armados para llenar el freezer y ahorrar.' },
  { id: 'nuevos', title: 'Nuevos productos', sub: 'Recién llegados al almacén.' },
  { id: 'extra', title: 'Y además…', sub: 'Siempre tenemos estos. Consultá precio por WhatsApp.' },
];

const PRODUCTS = [
  {
    id: 'promo-1', group: 'promos', tag: 'Promo 1', cats: ['promos', 'pollo'],
    name: 'Patitas, supremas y hamburguesas',
    items: ['1 kg de patitas de pollo', '1 kg de supremas', '1 kg de hamburguesas'],
    price: 24900, unit: 'promo', kg: 3,
    imgs: ['patitas', 'supremas', 'hamburguesas'],
  },
  {
    id: 'promo-2', group: 'promos', tag: 'Promo 2', cats: ['promos', 'pollo'],
    name: '2 kg de supremas',
    items: ['Supremas de pollo, 2 kg'],
    price: 17900, unit: 'promo', kg: 2, hot: 'La más pedida',
    imgs: ['supremas'],
  },
  {
    id: 'promo-3', group: 'promos', tag: 'Promo 3', cats: ['promos', 'pollo'],
    name: '2 kg de filet de pollo fresco',
    items: ['Filet de pollo fresco, 2 kg'],
    price: 22500, unit: 'promo', kg: 2,
    imgs: ['filet'],
  },
  {
    id: 'promo-4', group: 'promos', tag: 'Promo 4', cats: ['promos', 'pollo', 'pescado'],
    name: 'Medallones, supremas y albóndigas',
    items: ['1 kg de medallones de pollo o merluza', '1 kg de supremas', '1 kg de albóndigas de pollo'],
    price: 24900, unit: 'promo', kg: 3,
    options: { label: 'Medallones de', values: ['Pollo', 'Merluza'] },
    imgs: ['medallones', 'supremas', 'albondigas'],
  },
  {
    id: 'promo-5', group: 'promos', tag: 'Promo 5', cats: ['promos', 'pollo'],
    name: '3 kg de pata muslo fresca',
    items: ['Pata muslo fresca, 3 kg'],
    price: 14500, unit: 'promo', kg: 3, hot: 'Precio más bajo',
    imgs: ['patamuslo'],
  },
  {
    id: 'promo-6', group: 'promos', tag: 'Promo 6', cats: ['promos', 'hornear'],
    name: 'Docena de empanadas',
    items: ['12 empanadas listas para hornear', 'Carne, pollo, jamón y queso, ternera y queso o sfijas'],
    price: 17000, unit: 'promo',
    options: { label: 'Sabor', values: ['Carne', 'Pollo', 'Jamón y queso', 'Ternera y queso', 'Sfijas', 'Surtidas'] },
    imgs: ['empanadas'],
  },
  {
    id: 'promo-7', group: 'promos', tag: 'Promo 7', cats: ['promos', 'pollo', 'hornear'],
    name: '1 kg de supremas + 2 tartas',
    items: ['1 kg de supremas', '2 tartas a elección'],
    price: 24900, unit: 'promo',
    note: 'Los sabores de las tartas los elegís por WhatsApp.',
    imgs: ['tartas', 'supremas'],
  },
  {
    id: 'promo-8', group: 'promos', tag: 'Promo 8', cats: ['promos', 'hornear'],
    name: '2 docenas de sorrentinos',
    items: ['24 sorrentinos a elección'],
    price: 16000, unit: 'promo',
    note: 'Los sabores los elegís por WhatsApp.',
    imgs: ['sorrentinos'],
  },

  { id: 'mila-ternera', group: 'nuevos', cats: ['carnes'], name: 'Milanesas de ternera', price: 18000, unit: 'kg', imgs: ['mila-ternera'], items: ['Listas para freír u hornear'] },
  { id: 'mila-cerdo', group: 'nuevos', cats: ['carnes'], name: 'Milanesas de cerdo', price: 10500, unit: 'kg', imgs: ['mila-cerdo'], items: ['Listas para freír u hornear'] },
  { id: 'costeleta', group: 'nuevos', cats: ['carnes'], name: 'Costeletas de cerdo', price: 11000, unit: 'kg', imgs: ['costeleta'], items: ['Para la parrilla, el horno o la plancha'] },
  { id: 'caritas', group: 'nuevos', cats: ['papas'], name: 'Papas caritas', price: 10200, unit: 'kg', imgs: ['caritas'], items: ['Las que vuelven locos a los chicos 🙂'] },
  { id: 'daditos', group: 'nuevos', cats: ['papas'], name: 'Daditos de papa y queso', price: 4100, unit: 'u', size: '400 g', imgs: ['daditos'], items: ['Paquete de 400 g'] },

  { id: 'merluza', group: 'extra', cats: ['pescado'], name: 'Filet y milanesa de merluza', price: null, unit: 'kg', imgs: ['merluza'],
    options: { label: 'Tipo', values: ['Filet', 'Milanesa'] }, items: ['Filet al natural o milanesa rebozada'] },
  { id: 'nuggets', group: 'extra', cats: ['pollo', 'papas'], name: 'Nuggets de pollo', price: null, unit: 'kg', imgs: ['nuggets'], items: ['Rebozados, listos para el horno o la freidora'] },
  { id: 'med-pollo', group: 'extra', cats: ['pollo'], name: 'Medallones de pollo', price: null, unit: 'kg', imgs: ['medallones'], items: ['Rebozados, ideales para sándwich'] },
  { id: 'med-pescado', group: 'extra', cats: ['pescado'], name: 'Medallones de pescado', price: null, unit: 'kg', imgs: ['med-pescado'], items: ['Rebozados, sin espinas'] },
];

// ====== Helpers ======
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const money = (n) => '$' + Math.round(n).toLocaleString('es-AR');
const img = (name) => `img/${name}.webp`;
const find = (id) => PRODUCTS.find((p) => p.id === id);
const wa = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const storage = (fn, fallback) => { try { return fn(); } catch { return fallback; } };

const unitLabel = (p) => (p.unit === 'kg' ? 'el kg' : p.unit === 'u' ? `x ${p.size}` : '');
const priceHTML = (p) => p.price
  ? `<span class="price">${money(p.price)}</span>${unitLabel(p) ? `<span class="per">${unitLabel(p)}</span>` : ''}`
  : `<span class="price ask">Consultar precio</span>`;
const step = (p) => (p.unit === 'kg' ? 0.5 : 1);
const qtyLabel = (p, q) => (p.unit === 'kg' ? `${String(q).replace('.', ',')} kg` : p.unit === 'u' ? `${q} ${q === 1 ? 'paquete' : 'paquetes'}` : `${q}`);

// ====== Pedido (carrito) ======
// cada línea: { key, id, opt, qty }
let cart = storage(() => JSON.parse(localStorage.getItem('adp-cart')) || [], []).filter((l) => find(l.id));

function saveCart() {
  storage(() => localStorage.setItem('adp-cart', JSON.stringify(cart)));
  renderCart();
  syncCards();
}

function addToCart(id, opt) {
  const p = find(id);
  const key = id + (opt ? '|' + opt : '');
  const line = cart.find((l) => l.key === key);
  if (line) line.qty += step(p);
  else cart.push({ key, id, opt: opt || null, qty: 1 });
  saveCart();
  bump();
  toast(`Agregado: ${p.tag ? p.tag + ' · ' : ''}${p.name}${opt ? ` (${opt})` : ''}`);
}

function changeQty(key, dir) {
  const line = cart.find((l) => l.key === key);
  if (!line) return;
  const p = find(line.id);
  line.qty = Math.round((line.qty + dir * step(p)) * 10) / 10;
  if (line.qty <= 0) cart = cart.filter((l) => l.key !== key);
  saveCart();
}

function qtyOf(id) {
  return cart.filter((l) => l.id === id).reduce((a, l) => a + l.qty, 0);
}

function bump() {
  const b = $('#cartCount');
  b.classList.remove('bump');
  void b.offsetWidth;
  b.classList.add('bump');
}

let toastTimer;
function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

function cartTotals() {
  let total = 0, pending = 0;
  cart.forEach((l) => { const p = find(l.id); if (p.price) total += p.price * l.qty; else pending++; });
  return { total, pending };
}

function orderMessage() {
  const f = $('#cartFoot');
  const entrega = f.entrega.value;
  const dir = f.direccion.value.trim();
  const nombre = f.nombre.value.trim();
  const lines = cart.map((l) => {
    const p = find(l.id);
    const name = `${p.tag ? p.tag + ': ' : ''}${p.name}${l.opt ? ` (${p.options.label.toLowerCase()}: ${l.opt.toLowerCase()})` : ''}`;
    const qty = p.unit === 'promo' ? `${l.qty} x ` : `${qtyLabel(p, l.qty)} de `;
    const price = p.price ? ` = ${money(p.price * l.qty)}` : ' (a consultar)';
    return `• ${qty}${name}${price}`;
  });
  const { total, pending } = cartTotals();
  let msg = `¡Hola! Quiero hacer este pedido del catálogo de ${STORE}:\n\n${lines.join('\n')}\n\n`;
  if (total) msg += `Total estimado: ${money(total)}${pending ? ' + lo que hay que consultar' : ''}\n`;
  msg += entrega === 'envio' ? `Entrega: envío a domicilio${dir ? ` (${dir})` : ''}\n` : `Entrega: retiro en el local\n`;
  if (nombre) msg += `Nombre: ${nombre}\n`;
  if (cart.some((l) => find(l.id).note)) msg += `\nSabores de tartas/sorrentinos: `;
  return msg;
}

function renderCart() {
  const n = cart.length;
  const units = cart.reduce((a, l) => a + (find(l.id).unit === 'kg' ? 1 : l.qty), 0);
  $('#cartCount').textContent = units;
  $('#cartCount').hidden = n === 0;
  const { total, pending } = cartTotals();
  $('.fab').classList.toggle('show', n > 0);
  $('#fabText').textContent = n ? `Ver mi pedido · ${total ? money(total) : units + ' ítems'}` : 'Ver mi pedido';

  const list = $('#cartList');
  if (!n) {
    list.innerHTML = `<div class="cart-empty"><i class="ph ph-shopping-bag"></i><p>Tu pedido está vacío.</p><button class="btn btn-line" data-close>Ver las promos</button></div>`;
    $('#cartFoot').hidden = true;
    return;
  }
  list.innerHTML = cart.map((l) => {
    const p = find(l.id);
    return `<div class="cart-item">
      <img class="cart-thumb" src="${img(p.imgs[0])}" alt="">
      <div class="cart-info">
        <p class="cart-name">${p.tag ? `<span>${p.tag}</span>` : ''}${p.name}</p>
        <p class="cart-meta">${l.opt ? `${p.options.label}: ${l.opt} · ` : ''}${p.price ? money(p.price) + (p.unit === 'kg' ? '/kg' : '') : 'Consultar precio'}</p>
      </div>
      <div class="stepper" role="group" aria-label="Cantidad de ${p.name}">
        <button type="button" data-dec="${l.key}" aria-label="Menos"><i class="ph ph-${l.qty <= step(p) ? 'trash' : 'minus'}"></i></button>
        <span>${qtyLabel(p, l.qty)}</span>
        <button type="button" data-inc="${l.key}" aria-label="Más"><i class="ph ph-plus"></i></button>
      </div>
    </div>`;
  }).join('');
  $('#cartTotal').textContent = total ? money(total) : 'A consultar';
  const note = $('#cartTotalNote');
  note.hidden = !(pending && total);
  note.textContent = pending ? `Más ${pending === 1 ? 'un producto' : pending + ' productos'} con precio a consultar.` : '';
  $('#cartFoot').hidden = false;
  updateSend();
}

function updateSend() {
  const f = $('#cartFoot');
  $('#addrField').hidden = f.entrega.value !== 'envio';
  $('#cartSend').href = wa(orderMessage());
}

// ====== Catálogo ======
let current = storage(() => sessionStorage.getItem('adp-cat'), null) || 'todo';

function media(p) {
  const n = p.imgs.length;
  return `<div class="media m${n}">${p.imgs.map((im, i) => `<img src="${img(im)}" alt="${i === 0 ? p.name : ''}" loading="lazy" width="800" height="600">`).join('')}</div>`;
}

function optionPicker(p) {
  if (!p.options) return '';
  return `<div class="opts" role="radiogroup" aria-label="${p.options.label}">
    <span class="opts-label">${p.options.label}:</span>
    ${p.options.values.map((v, i) => `<label><input type="radio" name="opt-${p.id}" value="${v}" ${i === 0 ? 'checked' : ''}><span>${v}</span></label>`).join('')}
  </div>`;
}

function card(p, i) {
  const q = qtyOf(p.id);
  const isPromo = p.group === 'promos';
  return `<article class="card ${isPromo ? 'card-promo' : ''} reveal" style="--i:${i % 4}" data-id="${p.id}">
    <button class="card-media" data-open="${p.id}" aria-label="Ver ${p.name}">
      ${media(p)}
      ${p.tag ? `<span class="badge">${p.tag}</span>` : ''}
      ${p.group === 'nuevos' ? '<span class="badge badge-new">Nuevo</span>' : ''}
      ${p.hot ? `<span class="hot"><i class="ph-fill ph-fire"></i> ${p.hot}</span>` : ''}
    </button>
    <div class="card-body">
      <h3 class="card-name">${p.name}</h3>
      ${isPromo && p.items.length > 1 ? `<ul class="card-items">${p.items.map((t) => `<li>${t}</li>`).join('')}</ul>` : `<p class="card-desc">${p.items[0]}</p>`}
      ${p.kg && p.price ? `<p class="card-kg">Sale ${money(p.price / p.kg)} el kg</p>` : ''}
      ${optionPicker(p)}
      <div class="card-foot">
        <div class="card-price">${priceHTML(p)}</div>
        <button class="add ${q ? 'on' : ''}" data-add="${p.id}">${q ? `<i class="ph ph-check"></i> ${qtyLabel(p, q)}` : `<i class="ph ph-plus"></i> Agregar`}</button>
      </div>
    </div>
  </article>`;
}

function renderSections() {
  const root = $('#sections');
  const groups = GROUPS.map((g) => {
    const items = PRODUCTS.filter((p) => p.group === g.id && (current === 'todo' || p.cats.includes(current)));
    if (!items.length) return '';
    return `<section class="group" id="g-${g.id}">
      <div class="group-head">
        <h2 class="sec-title">${g.title}</h2>
        <p>${g.sub}</p>
      </div>
      <div class="grid ${g.id === 'promos' ? 'grid-promos' : ''}">${items.map(card).join('')}</div>
    </section>`;
  }).join('');
  root.innerHTML = groups;
  observe(root);
}

function renderFilters() {
  $('#filters').innerHTML = CATEGORIES.map((c) => {
    const n = c.id === 'todo' ? PRODUCTS.length : PRODUCTS.filter((p) => p.cats.includes(c.id)).length;
    return `<button class="chip ${c.id === current ? 'on' : ''}" data-cat="${c.id}" aria-pressed="${c.id === current}"><i class="ph ph-${c.icon}"></i>${c.label}<span>${n}</span></button>`;
  }).join('');
}

function syncCards() {
  $$('.card').forEach((c) => {
    const p = find(c.dataset.id);
    const q = qtyOf(p.id);
    const b = $('.add', c);
    b.classList.toggle('on', q > 0);
    b.innerHTML = q ? `<i class="ph ph-check"></i> ${qtyLabel(p, q)}` : `<i class="ph ph-plus"></i> Agregar`;
  });
  const d = $('#detailBody [data-add]');
  if (d) {
    const q = qtyOf(d.dataset.add);
    d.innerHTML = q ? `<i class="ph ph-check"></i> En el pedido (${qtyLabel(find(d.dataset.add), q)}) · sumar otro` : `<i class="ph ph-plus"></i> Agregar al pedido`;
  }
}

// ====== Detalle ======
const dlg = $('#detail');
function openDetail(id) {
  const p = find(id);
  const q = qtyOf(p.id);
  $('#detailBody').innerHTML = `
    <div class="detail">
      <div class="detail-media">${media(p)}${p.tag ? `<span class="badge">${p.tag}</span>` : ''}</div>
      <div class="detail-info">
        <h2 id="detailTitle">${p.name}</h2>
        <div class="detail-price">${priceHTML(p)}</div>
        ${p.kg && p.price ? `<p class="card-kg">Sale ${money(p.price / p.kg)} el kg</p>` : ''}
        <ul class="card-items">${p.items.map((t) => `<li>${t}</li>`).join('')}</ul>
        ${p.note ? `<p class="detail-note"><i class="ph ph-info"></i> ${p.note}</p>` : ''}
        ${optionPicker(p)}
        <div class="detail-cta">
          <button class="btn btn-dark" data-add="${p.id}">${q ? `<i class="ph ph-check"></i> En el pedido (${qtyLabel(p, q)}) · sumar otro` : `<i class="ph ph-plus"></i> Agregar al pedido`}</button>
          <a class="btn btn-line" href="${wa(`¡Hola! Quería consultar por ${p.tag ? 'la ' + p.tag + ' (' + p.name + ')' : p.name} que vi en el catálogo.`)}" target="_blank" rel="noopener"><i class="ph ph-whatsapp-logo"></i> Consultar</a>
        </div>
      </div>
    </div>`;
  dlg.showModal();
}

// ====== Animaciones de entrada ======
const io = 'IntersectionObserver' in window && !reduceMotion
  ? new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -6% 0px' })
  : null;
function observe(root = document) {
  $$('.reveal:not(.in)', root).forEach((el) => (io ? io.observe(el) : el.classList.add('in')));
}

// ====== Eventos ======
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-open],[data-add],[data-cat],[data-inc],[data-dec],[data-close],[data-cart]');
  if (!t) return;
  if (t.dataset.open) openDetail(t.dataset.open);
  else if (t.dataset.add) {
    const scope = t.closest('.card, .detail');
    const opt = scope && $(`input[name="opt-${t.dataset.add}"]:checked`, scope);
    addToCart(t.dataset.add, opt ? opt.value : null);
  }
  else if (t.dataset.inc) changeQty(t.dataset.inc, 1);
  else if (t.dataset.dec) changeQty(t.dataset.dec, -1);
  else if (t.dataset.cat) {
    current = t.dataset.cat;
    storage(() => sessionStorage.setItem('adp-cat', current));
    renderFilters();
    renderSections();
    $('.chip.on')?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    const top = $('#catalogo').getBoundingClientRect().top + scrollY;
    if (scrollY > top) scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  else if (t.hasAttribute('data-cart')) $('#cart').showModal();
  else if (t.hasAttribute('data-close')) {
    t.closest('dialog')?.close();
    $('#catalogo').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }
});

$$('dialog').forEach((d) => {
  d.addEventListener('click', (e) => { if (e.target === d) d.close(); });
  $('.dlg-close', d).addEventListener('click', () => d.close());
});

const form = $('#cartFoot');
form.addEventListener('input', updateSend);
form.addEventListener('change', updateSend);
form.addEventListener('submit', (e) => e.preventDefault());
storage(() => {
  const saved = JSON.parse(localStorage.getItem('adp-datos')) || {};
  if (saved.direccion) form.direccion.value = saved.direccion;
  if (saved.nombre) form.nombre.value = saved.nombre;
  if (saved.entrega) form.entrega.value = saved.entrega;
});
form.addEventListener('input', () => storage(() => localStorage.setItem('adp-datos', JSON.stringify({ direccion: form.direccion.value, nombre: form.nombre.value, entrega: form.entrega.value }))));

$$('[data-wa]').forEach((a) => (a.href = wa(`¡Hola! Vi el catálogo de ${STORE} y quería hacer una consulta.`)));

renderFilters();
renderSections();
renderCart();
observe();
