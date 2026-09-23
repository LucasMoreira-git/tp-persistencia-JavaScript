# Food Store - Aplicación Web Dinámica

## Descripción del proyecto

Food Store es un catalogo web de alimentos desarrollado con HTML5, CSS3 y JavaScript vanilla. El proyecto transforma una maqueta estatica en una aplicacion dinamica: las categorias y los productos ya no se escriben manualmente en el HTML, sino que se almacenan en un catalogo local y se renderizan automaticamente en el navegador.

La aplicacion incluye una vista principal de productos, un menu de categorias, botones de compra con interaccion, una pantalla de inicio de sesion y un panel de administracion. La separacion entre datos, estructura, estilos y logica facilita el mantenimiento y permite reemplazar posteriormente el catalogo local por una API.

## Tecnologias utilizadas

- HTML5 y etiquetas semanticas.
- CSS3, variables CSS, Flexbox, CSS Grid y media queries.
- JavaScript vanilla, sin frameworks ni dependencias externas.
- Manipulacion del DOM y eventos del navegador.
- Git y GitHub para el control de versiones y la publicacion del proyecto.

## Estructura del proyecto

```text
.
├── README.md
├── CarpetaPrincipal/
│   ├── index.html       # Catalogo principal
│   ├── login.html       # Pantalla de inicio de sesion
│   └── admin.html       # Panel de administracion
├── CSS/
│   ├── login.css        # Estilos de la pantalla de login
│   └── admin.css        # Estilos del panel administrativo
├── JS/
│   ├── data.js          # Categorias y productos del catalogo local
│   └── main.js          # Renderizado e interaccion del catalogo
└── img/                 # Imagenes locales del proyecto, si se agregan
```

## Módulos aprendidos y aplicados en la materia

### Módulo 1: Comprensión del lenguaje y su entorno

El proyecto utiliza JavaScript como lenguaje principal para agregar comportamiento a la pagina web. Se aplica separacion de responsabilidades:

- HTML define la estructura y los contenedores de la interfaz.
- CSS define la presentacion visual y la adaptacion responsive.
- JavaScript administra los datos, genera contenido y responde a las acciones del usuario.

### Módulo 2: Manejo de datos y estructuras

Se utilizan variables declaradas con `const` y `let` segun corresponda, junto con tipos de datos primarios como strings, numeros y valores booleanos.

El archivo `data.js` simula una base de datos local mediante:

- Un array de objetos llamado `productos`, donde cada producto contiene `id`, `nombre`, `descripcion`, `precio`, `imagen` y `categoria`.
- Un array de cadenas llamado `categorias`, que almacena los nombres de las categorias disponibles.

Esta organizacion permite modificar la informacion del catalogo sin cambiar la estructura de `index.html`.

### Módulo 3: Control de flujo, funciones y modularidad

La logica se organiza en funciones flecha constantes:

- `cargarCategorias` recorre las categorias y crea los enlaces del menu lateral.
- `cargarProductos` recorre el catalogo y genera las tarjetas de productos.

Tambien se aplican iteradores de arrays como `forEach` para procesar cada elemento y `find` para localizar el producto asociado al boton seleccionado. Los scripts se vinculan al HTML mediante etiquetas `<script>` ubicadas al final del `body`, lo que permite que los elementos del DOM ya esten disponibles al ejecutar la logica.

### Módulo 4: Interacción con el DOM y Eventos

La aplicacion selecciona los contenedores HTML con `document.getElementById()`:

- `lista-categorias` recibe los enlaces de las categorias.
- `contenedor-productos` recibe los articulos generados dinamicamente.

Cada tarjeta se construye mediante Template Strings usando comillas invertidas (`` ` ``), lo que permite insertar los valores de cada producto dentro de una estructura HTML. Luego, el contenido se inyecta con `.innerHTML`.

Los botones `Agregar` se conectan mediante `addEventListener`. Al hacer clic, se identifica el producto seleccionado y se muestra un `alert` con su nombre.

### Módulo 5: Persistencia y asincronía (nota conceptual)

Durante la materia se comprendieron los conceptos de asincronia, incluyendo `fetch`, `async` y `await`, y los mecanismos de almacenamiento del navegador, como `localStorage` y `sessionStorage`.

Sin embargo, este trabajo practico utiliza una simulacion de base de datos estatica local en `data.js`, tal como solicita la consigna. Por ese motivo, no se implementan llamadas a una API externa ni persistencia de datos en el navegador. La estructura queda preparada para incorporar esas funcionalidades en una etapa posterior.

### Módulo 6: Pensamiento crítico y proyecto integrador

El proyecto transforma una maqueta estatica en un catalogo automatizado. Esta mejora reduce la duplicacion de HTML, facilita la actualizacion de productos y categorias, y demuestra como JavaScript puede actuar como intermediario entre los datos y la interfaz visual.

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone URL_DEL_REPOSITORIO
   ```

2. Entrar en la carpeta del proyecto:

   ```bash
   cd Practica-JavaScript
   ```

3. Abrir la carpeta del proyecto en Visual Studio Code.

4. Instalar la extension **Live Server** si aun no esta instalada.

5. Hacer clic derecho sobre `CarpetaPrincipal/index.html` y seleccionar **Open with Live Server**.

6. Navegar desde el catalogo hacia `login.html` o el panel administrativo usando los enlaces de la interfaz.

Tambien es posible abrir `CarpetaPrincipal/index.html` directamente en un navegador, aunque se recomienda utilizar un servidor local para trabajar con rutas y recursos de forma consistente.

## Objetivo del proyecto

El objetivo es aplicar arrays, objetos, funciones, iteradores, Template Strings, manipulacion del DOM y eventos para construir una aplicacion web mantenible. El resultado deja separada la informacion del catalogo respecto de la vista y prepara la logica para futuras mejoras, como filtros, carrito de compras, persistencia local o consumo de una API.


