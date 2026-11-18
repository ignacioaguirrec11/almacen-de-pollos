# Almacén de Pollos · Catálogo web

Catálogo online de **Almacén de Pollos** (Av. Solano Vera 390) con promos, filtros y pedido armado por WhatsApp.

En vivo: https://almacen-de-pollos.vercel.app

## Qué tiene

- Promos, nuevos productos y "Y además…" (precio a consultar)
- Filtros: Promos, Pollo, Ternera y cerdo, Pescado, Listo para hornear, Papas y bocaditos
- Carrito ("Mi pedido") con cantidades, opciones (sabor de empanadas, etc.), envío o retiro, y botón que manda el pedido por WhatsApp
- Imagen de vista previa para cuando se comparte el link

## Cómo verlo en tu compu

Es una página estática: no hace falta instalar nada. Abrí `public/index.html` en el navegador.

## Cómo cambiar precios o productos

Todo está al principio de `public/app.js`:

- `WHATSAPP`: número al que llegan los pedidos (formato `549` + característica + número).
- `PRODUCTS`: la lista de productos. `price` es el precio en pesos sin puntos (`null` muestra "Consultar precio"). `unit` puede ser `'promo'`, `'kg'` o `'u'`.
- Las fotos van en `public/img/` en formato `.webp`, y se nombran en `imgs` sin la extensión.

## Publicarlo

Con [Vercel](https://vercel.com): importá este repositorio y elegí `public` como carpeta raíz (Root Directory / Output), sin comando de build. También funciona con GitHub Pages o Netlify apuntando a `public/`.

## Herramientas (opcional)

Requieren Node.js y `npm install`.

- `npm run og`: regenera la imagen para compartir (`public/img/og.jpg`).
- `npm run shots`: saca capturas de la página en `tmp/` (necesita Google Chrome).
- `tools/fetch.mjs` y `tools/pick.mjs`: buscan y preparan fotos. Las fotos candidatas originales (`src/cand`) no están en el repo.

Las fotos son ilustrativas, sacadas de internet.
