# Aurea Aviarios — Demo B2C

Demo comercial para visualizar el salto de fabricante B2B a marca de venta directa. Incluye catálogo de 12 piezas, carrito persistente, checkout demo, configurador y recomendador.

## Modo demo

La versión publicada funciona sin credenciales y simula la confirmación de pedido. Para producción, sustituir el checkout demo por Mercado Pago mediante `MERCADOPAGO_ACCESS_TOKEN` y `MERCADOPAGO_PUBLIC_KEY`, siempre del lado del servidor.

## Personalización

El nombre temporal, WhatsApp, textos y los productos de ejemplo se concentran en el script de la experiencia. Reemplaza `525500000000`, las entradas de producto y `/images/hero-aviario.png` con los activos finales.

## Entrega

La salida pública es estática y compatible con hosting; sus flujos de carrito usan `localStorage` para conservar la demostración en el dispositivo.
