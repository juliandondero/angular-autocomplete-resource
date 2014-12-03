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
| __itemlabel__   | Nombre de atributo dentro del recurso, utiizado para el label de cada registro del autocomplete.      |  *String* |'@' |
| __itemdescrip__ | Nombre de atributo dentro del recurso, utiizado para la descripción de cada registro del autocomplete.   |*String*   |    '@' |
| __itemdescrip2__ | Nombre de atributo dentro del recurso, utiizado para una segunda descripción de cada registro del autocomplete.|*String*      |    '@' |
| __idautocomplete__ | id asignado al autocomplete dentro del DOM| *String* |   '@' |
| __classautocomplete__ | clase asignada al autocomplete dentro del DOM| *String*|    '@' |
| __placeholder__ | Placeholder del input del autocomplete | *String* |   '@' |
| __isrequired__ | El input es requerido |*Boolean*|    '@' |
| __requiredmsj__ | Mensaje en caso de no estar completo el input y ser requerido |*String*|    '@' |
| __model__ | Modelo *bindeado* al recurso que se selecciona en el autocomplete |*Object*|    '=' |
