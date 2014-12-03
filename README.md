# angular-autocomplete-resource
=============================

Directiva de autocomplete para recursos (*ngResources*) de Angular. Utiliza *bootstrap* y *underscorejs*.

## Instalación
```bash
   bower install --save autocomplete-recource
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
| __onSelect__ | Función de callback ejecutada al seleccionar un item de la lista. |*function*|    '=' |
| __prefilters__ | Filtros extras enviados en el método query del recurso. Estos pueden ser *bindeados* a objetos fuera de la directiva. Por ejemplo otro select externo para elegir el país. El autocomplete harà el get con el filtro del pais elegido desde el controllador que utiliza la directiva. |*Object*|    '=' |
| __ngdisabled__ | Expresión para determinar si el input esta desabilitado o habilitado. |*Expression*|    '=' |
