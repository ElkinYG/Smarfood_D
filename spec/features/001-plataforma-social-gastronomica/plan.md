# 001 · Plataforma social gastronómica SmartFood — Plan

_Cómo se implementa lo descrito en `spec.md`. Debe respetar la `constitution/`._

## Enfoque

Construir una aplicación web responsive con Next.js, React y TypeScript, separando la experiencia pública del panel de gestión. Supabase será la fuente de datos y autenticación; sus políticas de acceso limitarán cada negocio a sus propios registros. Cloudinary gestionará las imágenes y los pedidos se iniciarán mediante enlaces a los canales externos configurados por cada negocio. Empaquetar la aplicación con Docker y mantener secretos fuera del cliente.

## Implementación

_Pasos técnicos concretos, en orden. Indica los archivos/módulos que se tocan._

1. Crear la estructura Next.js con TypeScript, Tailwind CSS y Lucide React para las vistas públicas, el área de administración y los componentes compartidos (`app/`, `components/`).
2. Definir configuración segura por entorno y cliente de Supabase (`.env.example`, `lib/supabase/`); implementar el esquema y migraciones para negocios, perfiles, platillos y promociones, junto con autenticación y políticas RLS.
3. Implementar el descubrimiento y los perfiles públicos de negocios, con galería, menú y promociones publicadas (`app/`, `components/`).
4. Crear el panel de gestión para editar el perfil y administrar platillos, imágenes y promociones; validar entradas y aplicar autorización tanto en servidor como en la base de datos (`app/admin/`, `lib/`).
5. Integrar carga y entrega de imágenes con Cloudinary (`lib/cloudinary/`); añadir selector de platillos y enlaces de pedido a WhatsApp o Instagram según los datos del negocio, sin procesar el pedido en SmartFood.
6. Añadir cambio persistente de tema claro/oscuro con `next-themes` y comprobar estados de carga, error, ausencia de datos y diseño responsive.
7. Añadir validaciones automatizadas acordes con las herramientas de prueba del proyecto y configuración de contenedor (`Dockerfile`, `.dockerignore`); documentar instalación, variables de entorno y ejecución.

## Decisiones

_Elecciones de diseño relevantes y su justificación. Alternativas descartadas y por qué._

- **Pedidos directos, sin checkout propio** — mantiene la compra en los canales ya usados por los negocios; se descartan pagos, órdenes persistidas y seguimiento dentro del MVP.
- **Supabase RLS como límite de acceso a los datos** — el aislamiento entre negocios se aplica también en la base de datos, no solo ocultando controles de interfaz.
- **Cloudinary para imágenes** — centraliza optimización y entrega de la galería; no se almacenan archivos de imagen en la base de datos.
- **Next.js como aplicación web única** — cubre descubrimiento público y administración sin mantener una aplicación móvil nativa en esta etapa.

## Riesgos

_Qué puede salir mal o requerir cuidado, y cómo se mitiga._

- **Políticas RLS incompletas podrían filtrar o permitir modificar datos de otro negocio** — probar acceso permitido y denegado por rol y negocio antes de publicar.
- **Configuración de proveedores ausente o incorrecta** — validar variables al iniciar, documentar las necesarias y mostrar un estado accionable sin revelar secretos.
- **Enlaces de Instagram no permiten el mismo mensaje prellenado en todos los dispositivos** — abrir el perfil o canal configurado y dejar claro que el pedido se completa fuera de SmartFood; usar enlace con resumen cuando el canal lo soporte.
- **Imágenes grandes o fallos del proveedor afectan la experiencia** — entregar transformaciones optimizadas desde Cloudinary y definir estados alternativos de carga y error.
