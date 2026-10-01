# Imagen ligera de Nginx para servir el frontend estático
FROM nginx:alpine

# Copiar archivos estáticos al directorio web de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto estándar HTTP
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
