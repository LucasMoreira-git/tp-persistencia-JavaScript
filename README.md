# Food Store - Pagina de Login

Pagina de inicio de sesion desarrollada con HTML y CSS como trabajo practico integrador. El objetivo es aplicar conceptos fundamentales de CSS para construir un formulario profesional, accesible y adaptable a distintos dispositivos.

## Vista previa

La interfaz incluye:

- Tarjeta de login centrada en la pagina.
- Titulo principal `FOOD STORE`.
- Campo de email.
- Campo de contrasena.
- Boton de ingreso con estado hover.
- Enlace para registrarse.
- Adaptacion para celulares, tablets y monitores.

## Tecnologias utilizadas

- HTML5
- CSS3
- CSS Grid
- Flexbox
- Variables CSS
- Media Queries

No se utilizan frameworks ni dependencias externas.

## Estructura del proyecto

```text
CarpetaPrincipal/
├── login.html
├── login.css
└── README.md
```

## Como ejecutar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/LucasMoreira-git/tp-css-html5.git
   ```

2. Entrar en la carpeta del proyecto:

   ```bash
   cd CarpetaPrincipal
   ```

3. Abrir `login.html` en un navegador web.

Tambien se puede utilizar la extension Live Server de Visual Studio Code para visualizar los cambios en tiempo real.

## Modulos aprendidos y aplicados

### Modulo 1: Fundamentos de CSS

- El archivo `login.css` se vincula al documento HTML mediante la etiqueta `<link>`.
- Se utiliza una organizacion separada entre estructura y presentacion.
- Los selectores se aplican de forma especifica a elementos y clases como `.login-card`, `.login-form`, `.form-field`, `input` y `button`.
- La cascada y la especificidad se mantienen simples para facilitar el mantenimiento.
- La herencia permite compartir propiedades como color, fuente y altura de linea desde `body`.
- Las clases describen el proposito de cada componente y evitan nombres genericos.

### Modulo 2: Modelo de caja y estilos visuales

- Se aplica `box-sizing: border-box` a todos los elementos para que el ancho incluya el padding y el borde.
- La tarjeta utiliza `margin`, `padding`, `border`, `border-radius` y `box-shadow`.
- Los campos tienen ancho completo, padding, borde y esquinas redondeadas.
- Se utilizan colores de fondo, texto, borde y botones mediante variables CSS.
- El texto utiliza `line-height`, `letter-spacing`, `text-align` y `text-transform` para mejorar la legibilidad.

### Modulo 3: Posicionamiento y sistemas de layout

- CSS Grid se utiliza en `.login-layout` para centrar la tarjeta vertical y horizontalmente.
- Flexbox se utiliza en `.login-form` para organizar los campos y el boton en una columna.
- `gap` controla la separacion entre elementos sin depender de margenes acumulativos.
- El layout separa la estructura general de la organizacion interna del formulario.
- `:focus-visible` y `:hover` aportan estados claros para la interaccion del usuario.

### Modulo 4: Mobile First y responsive design

- El estilo base esta pensado primero para pantallas pequenas.
- Se utilizan unidades relativas como `rem`, `%`, `min()` y `vh` cuando corresponde al comportamiento del layout.
- La tarjeta utiliza `inline-size: min(100%, 26rem)` para evitar desbordamientos.
- La regla `@media (min-width: 48rem)` ajusta el espaciado en pantallas mas grandes.
- El meta viewport permite que la pagina se adapte correctamente en dispositivos moviles.
- Se comprobo el comportamiento en una pantalla movil sin overflow horizontal.

## Accesibilidad y buenas practicas

- El documento declara correctamente el idioma con `lang="es"`.
- Se incluye `meta charset` y `meta viewport`.
- Cada campo tiene un `label` asociado mediante los atributos `for` e `id`.
- Los inputs utilizan tipos apropiados: `email` y `password`.
- Los campos son obligatorios mediante `required`.
- La contrasena solicita un minimo de ocho caracteres.
- Se agregan atributos `autocomplete` para mejorar la experiencia de usuario.
- Los estados de foco tienen un indicador visual visible.
- La estructura utiliza elementos semanticos como `main`, `section`, `header`, `form` y `button`.

## Objetivos alcanzados

- Maquetar un formulario de login completo con HTML y CSS.
- Aplicar correctamente el modelo de caja.
- Centrar componentes mediante CSS Grid.
- Organizar elementos internos mediante Flexbox.
- Mantener colores consistentes con variables CSS.
- Aplicar pseudoclases para mejorar la interactividad.
- Crear una interfaz responsive con enfoque Mobile First.
- Separar la estructura HTML de los estilos CSS siguiendo buenas practicas.


