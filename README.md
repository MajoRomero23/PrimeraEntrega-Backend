# Backend-PreEntrega1

Primera entrega del curso de Backend de CoderHouse donde se desarrollo un servidor con los endpoints necesarios para controlar los carritos de un e-commerce.


## Instalación

Puedes copiar el código en el repositorio

```Instala las dependencias con: 
  npm install 
```

```Ejecuta la aplicació de manera local con: 
  npm start
```


    
## Endpoints
### 1. Productos:
- GET/products: Se obtienen todos los productos.
- POST/products/: Se agrega un nuevo producto al listado.
- GET/products/:id: Se consulta un producto específico basado en su ID.

### 2. Carrito:
- GET/carts/:id: Se consulta un carito específico con su ID.
- POST/carts: Se crea un nuevo carrito.
- POST/carts/:cid/product/:pid: Se agrega un producto nuevo al carrito o se actualiza la cantidad de un producto existente dentro del carrito. 


## Features

- Se utilizó Postman para probar con solicitudes de productos y carritos
