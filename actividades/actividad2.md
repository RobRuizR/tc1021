# Actividad 2: Primer dibujo.

De momento tenemos un espacio casi vacío en nuestro documento. Cambiemos eso.


Sustituye el contenido del `index.html` por esto:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Desarrollo de videojuegos</title>
    <style>
      body {
        margin: 0;
      }
      .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 99vh;
      }
      .small-shadow {
        box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
      }
    </style>
  </head>
  <body>
    <main class="flex">
      <canvas
        id="game-area"
        width="400"
        height="400"
        class="small-shadow"
      ></canvas>
    </main>
    <script src="./src/index.ts"></script>
  </body>
</html>
```

Con esto, deberías poder ver un `canvas` con el que podrás interactuar por medio de javascript/typescript.

Abre ahora tu archivo `index.ts` y escribe lo siguiente:

![Código de la actividad](https://github.com/RobRuizR/tc1021/blob/master/actividades/assets/actividad2-01.png?raw=true)

Crea tu primera figura usando los siguientes comandos:

![Código de la actividad](https://github.com/RobRuizR/tc1021/blob/master/actividades/assets/actividad2-02.png?raw=true)

¿Qué es lo que ves?

---

Deberías poder ver un cuadrado morado al centro de tu documento.

Si sí, ¡Felicidades! Hiciste tu primer dibujo con Typescript.

Prueba ahora dibujando un círculo en la parte superior izquierda con la siguiente función:


```js
// Puedes leer más sobre este método en la documentación oficial:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse
context.ellipse(x, y, radioX, radioY, rotación, anguloInicial, anguloFinal);
// Ejemplo: context.ellipse(x, y, 100, 50, 0, 0, Math.PI * 2)

1. x: coordenada X que indica el centro de la elipse.
2. y: coordenada Y del centro.
3. radioX: Radio en X.
4. radioY: Radio en Y.
5. rotación: Rotación total de la elipse, expresado en radianes.
6. anguloInicial: Ángulo del inicio de la elipse, expresado en radianes.
7. anguloFinal: Ángulo donde termina la elipse, expresado en radianes
```
