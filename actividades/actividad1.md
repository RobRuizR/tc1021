# Actividad 1: Creando tu espacio de trabajo

1. Crea una carpeta para almacenar nuestro primer proyecto
2. Abre la carpeta con una consola de comandos. Ejemplo: cd  c:/ruta-de-carpeta
3. Escribe npm init -y
4. Escribe npm install --save-dev parcel-bundler
5. Crea un archivo index.html
6. Copia el siguiente contenido al index.html: 

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Desarrollo de juegos en Typescript</title>
</head>
 
<body>
  <h1></h1>
  <script src="./src/index.ts"></script>
</body>
</html>
```

7. Crea una carpeta `src`, con un archivo index.ts adentro 
8. Copia el siguiente contenido al index.ts: 

```html
const header = document.querySelector('h1');
header.innerHTML = '¡Hola, mundo!';
```

9. Sustituye el contenido de la sección “scripts” en package.json por lo siguiente: 

```
{
  "build": "parcel build index.html",
  "develop": "parcel index.html -p 8000"
}
```

10. Ejecuta npm run develop en tu consola
11. Abre localhost:8000 en tu navegador.

## ¿Qué es lo que ves?
