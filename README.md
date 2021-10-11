# Modelos Computacionales de Gestión Administrativa

Primer parcial. Fecha de entrega: 15/10/2021. 


## Comenzando 🚀

Desarrollar un servidor API REST que cumpla con los siguientes requisitos:

● El servidor debe estar desarrollado con Node.js, preferentemente usando el framework
express. :heavy_check_mark:

● La ruta raíz del servidor debe responder con un texto plano que diga “Servidor ok”. Es decir
que al ingresar a la URL del servidor, este me debe responder con ese mensaje. :heavy_check_mark:

● Un método GET para poder obtener datos de la base de datos. :heavy_check_mark:

● Un método GET para poder obtener un elemento por id de la base de datos. :heavy_check_mark:

● Un método POST para poder agregar un elemento a la base de datos. :heavy_check_mark:

● Un método PUT para poder editar un elemento a la base de datos. :heavy_check_mark:

● Un método DELETE para poder eliminar un elemento a la base de datos. :heavy_check_mark:

● Respetar la arquitectura de carpetas (Rutas, Modelos, Controladoras) :heavy_check_mark:

● Los datos necesarios para conectar la base de datos con el servidor deben estar
configurados desde una variable de entorno, no pueden estar directamente escritos en el
código del servidor. :heavy_check_mark:

● El proyecto del servidor debe estar subido a un repositorio de Github a nombre del alumno
(o uno de los alumnos del grupo). :heavy_check_mark:

● El repositorio debe contener código prolijo, segmentado en commits. :heavy_check_mark:

● El servidor debe estar deployado en Heroku, se debe poder acceder desde una URL desde
cualquier navegador web con conexión a internet. :heavy_check_mark:

● Debe estar conectado a una base de datos noSQL hosteada en la nube usando MongoDB
Atlas. :heavy_check_mark:

● Creación de un readme donde se especifiquen los pasos a seguir para la correcta
ejecución de la aplicación, url del repositorio y nombre del o los alumnos. :heavy_check_mark:

● Creación de una colección de Postman con todos los métodos del servidor documentados,
listos para ser testeados. :heavy_check_mark:


El proceso de evaluación será:

1. Abrir la URL que provee heroku y mostrar la leyenda que refiere a que el servidor se
encuentra corriendo correctamente.

2. En Postman, se revisará que los endpoints estén contenidos en una colección.

3. Proba cada uno de los endpoints solicitados, los cuales deberán funcionar correctamente.

4. Revisar la calidad del código del backend en Github y que el alumno tenga commits a su
nombre.

5. Revisar el correcto entendimiento de las funcionalidades desarrolladas, revisando el código
y charlando sobre el flujo de datos en la aplicación


### Colección / Entidad / 📋

Utilizando MongoDB, Atlas y Mockaroo se constituyó una base de datos no relacional con una colección de "Employees".

El formato de dicha colección se puede ver en el siguiente ejemplo:

```
 "firstName": "Facundo",
  "lastName": "Zambuto",
  "title": "Mr",
  "dateOfBirth": "1991-07-25T00:00:00.000Z",
  "email": "facundozambuto@hotmail.com",
  "gender": "Male",
  "deparment": "Research and Development",
  "city": "Rosario",
  "country": "Argentina",
  "jobTitle": "Developer",
  "phone": "3416201040",
  "createdDatetime": "2021-10-11T02:59:28.116Z",
  "updatedDatetime": "2021-10-11T04:48:23.523Z"
}
```

### Documentación de API :notebook_with_decorative_cover:

En el siguiente link (repositorio del parcial, rama "develop") puede encontrarse la colección de Postman con la API documentado y con data para realizar pruebas. La URL de cada request ya está actualizada con la desplegada en Heroku:

https://github.com/facundozambuto/parcialMCGA2021/blob/develop/api/resources/ParcialMCGA2021.postman_collection.json

## Despliegue 📦

El deployment fue realizado en Heroku y se puede acceder a la API a través de la URL https://mcga-parcial2021-api.herokuapp.com/

## Construido con 🛠️

* NodeJS
* Express
* MongoDB

También se utilizó:

* NPM Cors
  Una de las buenas prácticas a nivel seguridad en una aplicación es establecer una política de acceso a la API desde ciertos dominios o servidor. Si bien no se ha configurado muchas opciones en el parcial, se añadió a la aplicación a modo de ejemplo.

* NPM Helmet
  También se añadió Helmet como herramienta de buenas prácticas para seguridad. La misma es utilizada para contrarrestrar ciertas vulnerabilidades web como un ataque a la API a través de múltiples requests por parte de un bot por ejemplo.
  
* NPM Body-parser
  Como su nombre lo indica, se utilizó esta herramienta para poder obtener el body parseado de las request que llegan a la API.

## Versionado 📌

Se creo un repositorio en GitHub https://github.com/facundozambuto/parcialMCGA2021 con varias ramas siendo las principales "develop" la cual es la desplegada en Heroku y "feature/employees" que contiene el commit principal.

## Autor ✒️

* **Facundo Zambuto** - *Primer Parcial* - [facundozambuto](https://github.com/facundozambuto)
