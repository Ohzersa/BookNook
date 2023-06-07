# BookNook
 
Una vez que se haya clonado o descargado el proyecto, instalaremos las dependencias de node:

```
npm install
```

Ya que haya terminado de instalar las dependencias, ejecutamos el proyecto:

```
ng serve
```

Y podremos visualizar el proyecto en la siguiente url:

[http://localhost:4200/](http://localhost:4200/)

## Aplicación en funcionamiento

- Lo primero que se mostrará, será el inicio de la página, donde se podra visualizar la lista de los libros que adquirimos del **api** *Google Books*:

![](/src/assets/images-git/inicio.png)

Tenemos un header con el titulo y un **buscador** para que los usuarios puedan buscar libros por nombre, también, un **filtro** por categoría.

Cabe mencionar, que el filtro funciona con la lista principal o al realizar una búsqueda.

- Si queremos algunos detalles del libro de nuestro interes,el botón detalles mostrará un **modal**.

![](/src/assets/images-git/modal.png)

- Al realizar una búsqueda, se mostrará una nueva lista de los libros de acuerdo al titulo.

![](/src/assets/images-git/busqueda.png)

- Al filtrar por alguna categoría, nos muestra los libros que coinciden con el filtro de la lista.

![](/src/assets/images-git/filtro.png)

- Podemos regresar al incio dando *click* en el titulo de la página.