# Proyecto TAM - Minimarket

## 🌟 Descripción del Proyecto

**TAM** es un minimarket en línea que ofrece una amplia gama de productos de consumo diario. El nombre "TAM" proviene de las iniciales de "Todo A La Mano", reflejando la idea de que los productos están siempre disponibles para el cliente.

##  🔨 Herramientas y Tecnologías Utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilización con enfoque en diseño responsivo.
- **Flexbox** y **Grid Layout**: Técnicas de diseño utilizadas para la organización y disposición de los elementos en la página.
- **Typescript**: Para añadir tipado estático y mejorar la mantenibilidad del código JavaScript.

## 📁 Estructura de Carpetas
La estructura de carpetas del proyecto es la siguiente:
### `/src/__mocks__`
Contiene datos simulados que se pueden usar para pruebas o desarrollo sin depender de una API real.
- `distritos.json`: Archivo JSON que contiene información de ejemplo sobre distritos.
### `/src/components`
Contiene los componentes reutilizables que forman la interfaz de usuario.

- `Banner`: Componente de banner para mostrar mensajes importantes.
- `Card`: Componente para mostrar productos de forma individual.
- `CartProducts`: Componente para mostrar los productos dentro del carrito de compras.
- `Footer`: Componente para el pie de página de la aplicación.
- `FormEnvio`: Componente para el formulario de envío.
- `Header`: Componente para el encabezado de la aplicación.
- `HeaderRightIcons`: Componente para mostrar los íconos en el lado derecho del encabezado.
- `Nav`: Componente de navegación para acceder a diferentes secciones.
- `ProductList`: Componente que muestra la lista de productos.
- `ProductQuantity`: Componente contiene los botones de disminuir y aumentar la cantidad de productos.

### `/src/context`
Contiene el estado global de la aplicación, donde se gestionan los datos compartidos entre componentes.

### `/src/domain`
Contiene la lógica relacionada con el dominio de la aplicación. Aquí encontrarás interfaces como
- `IProducts.ts` para definir la estructura de los datos de los productos.

### `/src/hooks`
Contiene los hooks personalizados que gestionan el estado y las interacciones de la aplicación.
- `useDistritos.tsx`: Hook para manejar distritos.
- `useIsDesktop.tsx`: Hook para detectar si el dispositivo es de escritorio.

### `/src/pages`
Contiene las páginas principales del proyecto.
- `Cart`: Página del carrito de compras.
- `Envio`: Página de envío.
- `Home`: Página principal de la aplicación.
- `NotFound`: Página de error 404.

### `/src/proxy`
Contiene la configuración relacionada con la API.
- `apiService.ts`: Servicio para manejar las solicitudes a la API.

### `/src/utils`
Contiene utilidades reutilizables que ayudan a organizar el código y reducir redundancias.
- `/components`: Funciones auxiliares relacionadas con componentes.
- `/helpers`: Funciones de validacion de input que pueden ser usadas en diferentes partes de la aplicación.
- `/layout`: Componentes que definen la estructura general de la aplicación como el `Header` y `Footer`, junto con un `Outlet` para renderizar contenido dinámico.


