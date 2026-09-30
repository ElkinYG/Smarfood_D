# 001 · Plataforma social gastronómica SmartFood — Tareas

_Checklist accionable derivada del `plan.md`. Tareas pequeñas y concretas; marca `[x]` al completarlas._

- [ ] Inicializar la aplicación Next.js con TypeScript y Tailwind CSS; incorporar Lucide React y `next-themes`.
- [ ] Añadir `.env.example`, ignorar archivos con secretos y documentar las variables requeridas para Supabase y Cloudinary.
- [ ] Crear migraciones para negocios, perfiles, platillos y promociones con relaciones e índices necesarios.
- [ ] Configurar autenticación y políticas RLS; verificar que cada negocio solo pueda leer o modificar los registros que le corresponden.
- [ ] Implementar páginas públicas para descubrir negocios y consultar perfiles, galería, menú y promociones publicadas.
- [ ] Implementar el panel autenticado para editar el perfil del negocio y crear, editar, publicar y retirar platillos y promociones.
- [ ] Integrar carga, optimización y visualización de imágenes de platillos mediante Cloudinary, incluidos estados de error.
- [ ] Añadir selección de platillos y acciones de pedido a los canales WhatsApp o Instagram configurados; ocultar las acciones sin destino válido.
- [ ] Implementar y comprobar el cambio persistente entre tema claro y oscuro.
- [ ] Cubrir con pruebas los permisos, validaciones, datos vacíos y destinos de pedido; comprobar vistas móvil y escritorio.
- [ ] Añadir `Dockerfile` y `.dockerignore`, y verificar build y arranque con la configuración documentada.
- [ ] Validar contra todos los criterios de aceptación de `spec.md` y actualizar sus casillas al verificarlos.
- [ ] Validar contra los criterios de aceptación de `spec.md`.
- [ ] Mover la feature a "Hecho" en `../../constitution/roadmap.md`.

## Mantenimiento (checklist recurrente)

_Opcional. Pasos a repetir cada vez que se toque esta feature en el futuro (revisar datos, regenerar algo, etc.). Borra esta sección si no aplica._

- [ ] Revisar que las migraciones y políticas RLS sigan cubriendo las nuevas tablas y relaciones.
- [ ] Comprobar vigencia de variables y configuración de Supabase y Cloudinary sin incluir secretos en el repositorio.
