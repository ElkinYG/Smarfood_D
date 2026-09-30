# Tech stack y convenciones

Tecnologías y reglas conocidas de SmartFood. Los detalles que no están definidos en el README deben concretarse antes de planificar features que dependan de ellos.

## Tecnologías

- **Lenguaje:** TypeScript.
- **Framework / runtime:** Next.js sobre React.
- **Estilos:** Tailwind CSS.
- **Base de datos:** Supabase.
- **Imágenes:** Cloudinary para optimización y gestión de imágenes.
- **Iconos:** Lucide React Icons.
- **Temas:** next-themes para tema claro y oscuro.
- **Despliegue:** contenedores Docker, con una configuración preparada para escalar.
- **Tests:** no especificados todavía en el README; definir la herramienta y el comando antes de añadir una suite.

## Archivos / módulos clave

La estructura de módulos y rutas de la aplicación aún no está documentada en el README. Cada feature debe actualizar esta sección cuando establezca una ubicación reutilizable o relevante para el proyecto.

## Comandos

Los comandos de desarrollo, pruebas, lint y build aún no están especificados en el README. Deben tomarse del `package.json` y de la configuración Docker cuando estén disponibles; no se inventan comandos en esta constitución.

## Modelo de datos / dominio

- **Negocio de comida** — restaurante o negocio que publica su información, menú, platillos y promociones.
- **Platillo** — elemento gastronómico mostrado en la galería o el menú; puede incluir una imagen optimizada.
- **Menú** — agrupación ordenada de platillos administrada por el negocio.
- **Promoción** — contenido comercial que el negocio comparte con su audiencia.
- **Canal de contacto** — enlace a WhatsApp o Instagram usado para consultas y pedidos directos.

## Convenciones

- Mantener TypeScript como lenguaje principal y reutilizar los patrones propios de Next.js y React.
- Usar Tailwind CSS para los estilos, evitando introducir un sistema visual paralelo sin necesidad.
- Usar Lucide React Icons para iconografía en lugar de iconos dibujados manualmente.
- Mantener la interfaz compatible con tema claro y oscuro mediante next-themes.
- Validar y proteger los datos administrados por los negocios antes de persistirlos en Supabase.
- Mantener el contenido y las etiquetas de la interfaz en español, salvo que una feature establezca explícitamente soporte multidioma.

## Estilo visual

- La interfaz debe soportar tema claro y oscuro de forma consistente.
- Las imágenes de platillos deben optimizarse con Cloudinary antes de mostrarse.
- La experiencia debe ser responsive para facilitar el descubrimiento y la gestión desde distintos dispositivos.
- Los iconos de acciones e interfaz deben provenir de Lucide React Icons.
- Los tokens de color, tipografía y breakpoints concretos deben definirse en la configuración de Tailwind del proyecto.

## Límites duros

- No almacenar imágenes sin optimización cuando deban servirse públicamente; usar Cloudinary para ese flujo.
- No exponer credenciales ni variables sensibles de Supabase, Cloudinary o Docker en el repositorio.
- No añadir otro framework de estilos o biblioteca de iconos sin justificarlo y mantener consistencia con Tailwind y Lucide.
- No convertir SmartFood en un sistema de reparto, contabilidad, inventario o pagos internos sin ampliar explícitamente el alcance de la misión.
- No documentar como hecho una feature que aún no tenga su especificación y validación correspondiente.
