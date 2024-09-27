# Happy Bowl - Comida Sana

![](https://vimeo.com/1013622644?share=copy)


Este es un proyecto desarrollado en **React** y consiste en una **Single Page Application (SPA)** para un e-commerce de productos alimenticios saludables llamado **Happy Bowl - Comida Sana**. 

## Funcionalidades

- **Ver el listado de artículos disponibles**: Los productos provienen de una base de datos en **Firebase**.
- **Filtrar por tipo de artículo**: Los usuarios pueden filtrar los productos según categorías específicas.
- **Ver detalles de un artículo puntual**: Cada producto tiene una vista detallada para más información.
- **Agregar al carrito**: Los productos pueden ser añadidos al carrito de compras.

### Funcionalidades del carrito:
- **Limpiar carrito**: El usuario puede vaciar todo el carrito de una sola vez.
- **Eliminar items individualmente**: Permite eliminar productos específicos del carrito.
- **Ejecutar la compra**: Luego de completar un formulario con nombre y correo, se envía la orden de compra a **Firebase**, donde se guarda en una lista.

## Validaciones

- No se pueden agregar números negativos al carrito.
- No se pueden comprar artículos sin stock.
- La compra no se puede completar sin llenar todos los campos del formulario.

## Dependencias

- **bootstrap**: Para estilos y diseño responsivo.
- **bootstrap-icons**: Íconos para la interfaz.
- **firebase**: Gestión de base de datos y autenticación.
- **react**: Librería para la creación de componentes.
- **react-dom**: Renderización de componentes en el DOM.
- **react-router-dom**: Manejo de rutas en la aplicación.
- **sweetalert2**: Alertas y notificaciones interactivas.
- **animate-css**: Animaciones.

### Desarrollado por

**Gastón Ariel Diamend Lezcano**