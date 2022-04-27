# Sprint3


Nivel 1




- Ejercicio 1
En primer lugar, al tratarse de un e-commerce, haremos que el usuario pueda añadir productos al carrito.

La función que debes completar se llama buy() , la cual recibe el id del producto a añadir. Tienes que buscar el producto utilizando este id recibido en el array products , para finalmente añadirlo al array  cartList .


Los botones negros deben ejecutar la función buy() que se encuentra en cada producto:

foto botiga

Ayuda: para buscar el producto en el array products mediante el id, puedes utilizar un bucle for.  Tómate los ejercicios con calma, no es fácil aprender a programar. 



- Ejercicio 2
Ahora implementaremos una función que permita al usuario vaciar el carrito .

En ese caso, tendrás que completar la función cleanCart() , para reinicializar la variable cartList .

Ayuda: aquí encontrarás información de cómo vaciar un array.


- Ejercicio 3
¡Genial, el e-commerce va tomando forma! es el momento de calcular el total del importe del carrito. 

Se debe implementar un bucle for  para ir sumando el importe de todos los productos.


- Ejercicio 4
Lo estás haciendo muy bien, ¡casi has completado el nivel 1!

Como habrás podido observar, tenemos muchos ítems repetidos en el carrito de compras. El objetivo de esta mejora será agrupar los productos con un nuevo campo llamado quantity y otro subtotal (será la multiplicación del precio*calidad ).

Para ello, deberás completar la función generateCart( ) , que recibe el array cartList, generando el array cart.



Un ejemplo de cada elemento del array cart es:

{


  nombre: 'aceite de cocina',
  precio: 10,5,
  tipo: 'comestibles',
  cantidad: 5,
  subtotal: 31.5,
  subtotalConDescuento: 0
},


En este ejercicio no hace falta que modifiques la función que calcula las promociones, el apartado subtotalWithDiscount lo calcularemos más adelante. 

Ayuda: Simplemente se debe realizar un bucle sobre el array cartList que recibe la función. 

- Para cada elemento de cartList, debemos validar si existe en el array cart:

En caso de que NO exista, le añadimos al array cart (cuidado, no se te olvide agregar la propiedad quantity con valor 1 al producto antes de hacer push). 
Si en cambio ya existe este producto en el carrito, deberemos incrementar el campo quantity y calcular el subtotal.


- Ejercicio 5
Por ser un buen e-commerce, nos falta  implementar las promociones,  apartado importantísimo en cualquier tienda.

Para ello, el cliente nos ha transmitido dos tipos de promociones que desea para su e-commerce:

Si el usuario compra 3 o más botellas de aceite, se aplica un descuento del 20%.
Al comprarse 10 o más mezclas para realizar pastel, se aplica un descuento del 30%.


En este ejercicio debes completar la función applyPromotionsCart() , que recibe el array cart, modificando el campo subtotalWithDiscount en caso de que se aplique promoción

Ayuda: como cada producto del carrito tiene cantidad, ya puedes validar si tiene descuento:

En caso de que un producto tenga descuento, debe guardarse el precio total con descuento en el campo: subtotalWithDiscount.
En caso de que no se le deba aplicar descuento, no hace falta que guardes nada.


- Ejercicio 6
Hasta ese ejercicio sólo hemos implementado la lógica de la pantalla principal de la tienda. Ahora implementaremos la validación del formulario de checkout que se encuentra en el archivo checkout.js.

Para acceder a esta pantalla, debes clicar en el icono del carrito de la parte superior derecha de la pantalla, apareciendo un modal con el boto que te llevará a esta pantalla.

Tu primer objetivo será validar el formulario  checkout.html utilizando el archivo  checkout.js



verificar



En este ejercicio deberás implementar la lógica para que los campos del formulario cumplan las siguientes condiciones:

- Todos los campos son obligatorios.

- Todos los campos deben tener al menos 3 caracteres.

- El nombre y apellidos deben contener sólo letras.

- El teléfono debe contener sólo números.

- La contraseña debe incluir números y letras.

- El email debe tener formato de email.



Cuando el usuario introduzca un campo que no cumpla las validaciones anteriores, el input debe resaltarse en rojo y mostrar un mensaje en la parte inferior.

Ayuda: podrás colorear en el borde del input rojo y mostrar el mensaje de error manipulando el dom, aunque también puedes usar la clase is-invalid de bootstrap.
