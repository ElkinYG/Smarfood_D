# 001 · Plataforma social gastronómica SmartFood

**Estado:** propuesta

## Qué hace

SmartFood conecta a comensales con restaurantes y negocios de comida mediante perfiles públicos, una galería de platillos, menús y promociones. Cada negocio dispone de un panel para mantener su presencia y su oferta; los comensales pueden explorarla y contactar al negocio para pedir directamente por WhatsApp o Instagram. La plataforma ofrece tema claro y oscuro y una experiencia adaptable a móvil y escritorio.

## Por qué

Los negocios necesitan un espacio sencillo para darse a conocer y mantener su oferta actualizada, mientras los comensales necesitan descubrir platillos y llegar al negocio sin una intermediación innecesaria. Este MVP establece esa experiencia y una base desplegable y escalable para evolucionarla.

## Criterios de aceptación

_Condiciones verificables que deben cumplirse para dar la feature por terminada. Redacta cada una de forma que se pueda comprobar con un sí/no. Marca `[x]` al cumplirse._

- [ ] Una persona visitante puede explorar restaurantes y abrir un perfil público con su galería, menú y promociones publicadas.
- [ ] Un negocio autenticado puede crear y actualizar su perfil, platillos, imágenes y promociones desde un panel; no puede modificar los datos de otro negocio.
- [ ] Desde un platillo, el comensal puede iniciar un pedido usando el canal de contacto que el negocio haya configurado: WhatsApp o Instagram. Si un canal no está configurado, no se muestra como opción.
- [ ] Las imágenes de platillos se sirven mediante Cloudinary y la interfaz funciona en móvil y escritorio.
- [ ] La persona usuaria puede cambiar entre tema claro y oscuro, y su selección se conserva al navegar.
- [ ] Los datos y credenciales de Supabase y Cloudinary se configuran mediante variables de entorno; la aplicación puede construirse y ejecutarse mediante Docker siguiendo la documentación del proyecto.
- [ ] Los fallos de carga, formularios inválidos y perfiles o platillos inexistentes muestran un estado comprensible y no exponen datos privados.

## Fuera de alcance

_Lo que esta feature NO incluye, para evitar que crezca. Si algo se difiere, enlaza a dónde (roadmap/backlog)._

- Cobro, checkout, gestión de inventario, seguimiento o historial de pedidos dentro de SmartFood.
- Mensajería o publicación automatizada en nombre de los negocios en WhatsApp o Instagram; los pedidos se completan directamente en esos canales.
- Funciones sociales avanzadas como comentarios, seguidores, chat interno o recomendaciones personalizadas.
- Aplicaciones móviles nativas y paneles analíticos avanzados.
