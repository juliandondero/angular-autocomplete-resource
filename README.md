# angular-autocomplete-resource
=============================

Directiva de autocomplete para recursos (*ngResources*) de Angular. Utiliza *bootstrap* y *underscorejs*.



## Instalación
* Instalar módulo

```bash
   bower install --save autocomplete-resource
```

* incluir el módulo en la aplicación:
```javascript
angular
  .module('testAutocompleteApp', [
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'autocomplete-resource'
  ]);
  ```
 * Incluir (si no se incluyó en la instalación con grunt o gulp):
 ```html
<link rel="stylesheet" href="bower_components/autocomplete-resource/dist/stylesheets/autocomplete-resource.css" />

<script src="bower_components/autocomplete-resource/dist/autocomplete-resource.js"></script>

 ```


## Dependencias
* Angular
* Underscorejs
*  Bootstrap

## Ejemplo de uso
```
<autocomplete-resource 
    isrequired="true" 
    itemicon="glyphicon glyphicon-tag" 
    requiredmsj="" 
    itemdescrip="texto" 
    idautocomplete="" 
    classautocomplete="form-control" 
    label="Test" 
    placeholder="Ciudades" 
    itemlabel="descripcion" model="model.ciudad" 
    modelsourcename="TestService" 
    serviceatributefiltername="search">
    </autocomplete-resource>
 ```
 
![alt text](https://raw.githubusercontent.com/juliandondero/angular-autocomplete-resource/master/extras/demo.png "Ejemplo")

## Configuración

| Atributo        | Descripción           | tipo  | bindeo |
| :------------- |:-------------| -----:| -------:|
| __label__       |  Label del autocomplete | *String* |'@' |
| __itemlabel__   | Nombre de atributo dentro del recurso, utilizado para el label de cada registro del autocomplete. Soporta sub atributos, ejemplo: *ciudad.descripción*      |  *String* |'@' |
| __itemdescrip__ | Nombre de atributo dentro del recurso, utiizado para la descripción de cada registro del autocomplete.   |*String*   |    '@' |
| __itemdescrip2__ | Nombre de atributo dentro del recurso, utiizado para una segunda descripción de cada registro del autocomplete.|*String*      |    '@' |
| __idautocomplete__ | id asignado al autocomplete dentro del DOM| *String* |   '@' |
| __classautocomplete__ | clase asignada al autocomplete dentro del DOM| *String*|    '@' |
| __placeholder__ | Placeholder del input del autocomplete | *String* |   '@' |
| __isrequired__ | El input es requerido |*Boolean*|    '@' |
| __requiredmsj__ | Mensaje en caso de no estar completo el input y ser requerido |*String*|    '@' |
| __model__ | Modelo *bindeado* al recurso que se selecciona en el autocomplete |*Object*|    '=' |
| __modelsourcename__ | Nombre del recurso de angular (será inyectado luego por la directiva), utilizado para hacer el request. Utiliza el metodo *query* del recurso. |*String*|    '@' |
| __clearInputOnSelection__ | Borra el input al seleccionar un item. (quedará bindeado en *model* |*Boolean*|    '@' |
| __itemicon__ | Icono de bootstrap utilizado en cada item del autocomplete. |*String*|    '@' |
| __serviceatributefiltername__ | Nombre de variable enviado para la búsqueda. Por ejemplo, si se utiliza *term*, y se escribe en el imput "abc" el request será enviado con un parámetro get, *<url del metodo query del recurso>?term=abc* |*String*|    '@' |
| __onSelect__ | Función de callback ejecutada al seleccionar un item de la lista. ej: onSelection(item). Item es el item seleccionado. |*function*|    '=' |
| __prefilters__ | Filtros extras enviados en el método query del recurso. Estos pueden ser *bindeados* a objetos fuera de la directiva. Por ejemplo otro select externo para elegir el país. El autocomplete harà el get con el filtro del pais elegido desde el controllador que utiliza la directiva. |*Object*|    '=' |
| __ngdisabled__ | Expresión para determinar si el input esta desabilitado o habilitado. |*Expression*|    '=' |
| __resultsin__ | Determina en que atributo del json de respuesta, viene la colección para el autocomplete. (django rest: results {total:...,results:[...]}. Si este atributo no se setea, buscara un array si la respuesta es un array, o un array dentro de .results, si la respuesta es un objeto.  |*String*|    '@' |
| __wrap-text__ | Determina si el texto de cada item se corta (ellipsis) o hace wrap en cada renglon.   |*Boolean*|    '@' |
| __item-detail__ | Determina si se ve el item elegido como ultimo elemento del autocomplete, con la descripcion entera. |*Boolean*|    '@' |
| __popover-detail__ | Determina si se ve el popover con el detalle del item |*Boolean*|    '@' |
| __popover-detail-placement__ | Determina donde se ubica el popover detail (left,right,top,left) |*String*|    '@' |
| __showarrowbtn__ | Determina si se muestra el boton de la flecha para desplegar la lista sin filtrar |*Boolean*|    '@' |
| __labelsininput__ | Determina si se muestran los labels separados por coma en el inpit, ej: labelsininput="descripcion, texto,   texto2" |*Boolean*|    '@' |
| __withtooltip__ | Determina si se muestra un tooltip con los atributos |*Boolean*|    '@' |
| __tooltipplacement__ | Determina posicion del tooltip |*String*|    '@' |
| __input-size__ | Tamaño del input  ('lg, sm), si no se especifica es tamaño default' |*String*|  '@' |
| __modelsourcefunction__ | Function del recurso de angular que será ejecutada, ejemplo query (default: query) |*String*|  '@' |
| __searchtext__ | Modelo en donde sera bindeado el texto de busqueda |*String*|  '=' |
| __clear-input-on-blur__ | Especifica si se borra el texto de busqueda al hacer blur del autocomplete |*String*|  '@' |
| __interval-wait-to-call__ | Delay en milisegundos para llamar al servicio una vez que el modelo deja de cambiar|*String*|  '@' |
| __imgItemPreviewSrcAttrib__ | nombre de atributo en el resultado que se usa para el src de un preview de imagen |*String*|  '@' |
| __appendString__ | string que agregamos al search |*String*|  '@' |



# Demo
En *__/example:__*

1. npm install
2. bower install
3. grunt serve
