# ☕ Café con Toppings - Proyecto de Pedidos

Este es un proyecto de pedidos de café que permite a los usuarios seleccionar su tipo de café preferido y agregar diversos toppings para personalizar su bebida. Este proyecto ha sido desarrollado en `node_js` y utiliza `express` para su funcionamiento.

## 🚀 Funcionalidades

- Los usuarios pueden ver una lista de diferentes tipos de café disponibles.
- Los usuarios pueden agregar toppings a su café seleccionado.
- Se muestra el precio total del pedido en función de los productos y toppings seleccionados.

## ⚙️ Instalación

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener npm instalado.
3. Ejecuta el comando `npm install` para instalar las dependencias necesarias.
4. Crea un archivo .env en la carpeta backend al mismo nivel del package.json.
5. Inicia la aplicación con el comando `npm run dev`.
6. Utiliza la extension de visual studio code Live Server para poder ver la pagina.

## 📦 Dependencias

Asegurate que en el package json esten las siguientes dependencias:

- bcryptjs (Utilizada par hacer encriptacion de datos).
  * En caso de no tener la dependecia usar el comando `npm i bcryptjs` 
- cors (Permite al servidor hacer solicitudes).
  * En caso de no tener la dependecia usar el comando `npm i cors`
- dotenv (Nos permite consumir un archivo config con los datos sensibles).
  * En caso de no tener la dependecia usar el comando `npm i dotenv`
- express (Es una infraestructura de aplicaciones web Node.js).
  * En caso de no tener la dependecia usar el comando `npm i express`
- express-validator (Se encarga de determinar si la data es correcta).
  * En caso de no tener la dependecia usar el comando `npm i express-validator`
- mongoose (Nos permite escribir consultas para bases de datos de MongoDB).
  * En caso de no tener la dependecia usar el comando `npm i mongoose`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes sugerencias para mejorar este proyecto, por favor abre un issue o envía una pull request con tus cambios.

## 👥 Autores

- Sherman(https://github.com/DaSherman0210)

## 🙏 Agradecimientos

Agradecemos a el teacher vermen, a maicol y a vicky por su apoyo y contribuciones a este proyecto.

## 📧 Contacto

Si tienes alguna pregunta o consulta relacionada con este proyecto, por favor contáctanos en sherman.sect@gmail.com.


# 🥼 Funcionalidad de las busquedas

POST- Facturas ejemplo: 

```{
  "nombreUsuario": "64c0212a03ed381f3c8be347",
  "precioTotal": 1200,
  "medioPago": "efectivo",
  "pedidos": {
    "bebidas":[
      {
        "id":"64c113dace8e81358ca28cb1",
        "size":"mediano",
        "gramosAzucar": 20,
        "cantidad": 3,
        "toppings":[
          {
            "id":"64c0294af61aa077c1b8d61a"
          }
        ]
      },
      {
        "id":"64ca585fe702fca6f1d4a000",
        "size":"grande",
        "gramosAzucar": 10,
        "cantidad": 6,
        "toppings":[
          {
            "id":"64c0294af61aa077c1b8d621"
          },
          {
            "id":"64c0294af61aa077c1b8d61d"
          }
        ]
      }
    ],
    "postres":[
      {
        "id":"64ca7cd58fa1fe6d5805062d",
        "size":"grande",
        "gramosAzucar": 70,
        "cantidad": 1,
        "toppings":[
          {
            "id":"64c0294af61aa077c1b8d619"
          }
        ]
      }
    ],
    "helados":[
      {
        "id":"64ca585fe702fca6f1d49ff8",
        "size":"pequeño",
        "gramosAzucar": 20,
        "cantidad": 8,
        "toppings":[
          {
            "id":"64c0294af61aa077c1b8d61b"
          }
        ]
      }
    ]
  }
}```
