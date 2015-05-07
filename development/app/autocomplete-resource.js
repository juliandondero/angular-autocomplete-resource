'use strict';

angular.module('autocomplete-resource',['ui.bootstrap'])
    .directive('autocompleteResource', function ($timeout, $injector) {
        return {
            restrict: 'AEC',
            scope: {
                label: '@',
                itemlabel: '@',
                itemdescrip: '@',
                itemdescrip2: '@',
                idautocomplete: '@',
                classautocomplete: '@',
                placeholder: '@',
                isrequired: '@',
                requiredmsj: '@',
                model: '=',
                modelsourcename: '@',
                clearInputOnSelection: '@',
                itemicon: '@',
                serviceatributefiltername: '@',
                onSelect: '&',
                prefilters: '=',
                ngdisabled: '=',
                resultsin:'@',
                itemDetail:'@',
                wrapText:   '@',
                popoverDetail: '@',
                popoverDetailPlacement: '@'
            },
            link: function (scope, elem, attrs) {

                scope.clearInputOnSelectionParsed = (scope.clearInputOnSelection=="true");

                scope.handleBlur = function () {
                    scope.listOpened = false;
                    if (scope.model == undefined)
                        scope.modelfilter = undefined;

                };

                scope.listOpened = false;
                scope.handleSelection = function (selectedItem) {
                    if (scope.clearInputOnSelectionParsed) {
                        scope.modelfilter = '';
                    } else {
                        scope.modelfilter = scope.getItemLabel(selectedItem,scope.itemlabel);
                    }
                    scope.model = selectedItem;
                    scope.current = 0;
                    scope.selected = true;
                    scope.listOpened = false;
                    $timeout(function () {
                        scope.onSelect();
                    }, 200);
                };

                scope.current = 0;
                scope.selected = true; // hides the list initially
                scope.isCurrent = function (index) {
                    return scope.current == index;
                };
                scope.setCurrent = function (index) {
                    scope.current = index;
                };
                //buca items desde el servicio rest enviando el filtro en modelfilter
                scope.refreshItems = function (filter) {

                    scope.items = undefined;
                    var service = elem.injector().get(scope.modelsourcename);
                    var params = {};
                    if (scope.prefilters) {
                        params = scope.prefilters;
                    }


                    params[scope.serviceatributefiltername] = filter;

                    service.query(params, function (itemsReturned) {

                        if (scope.resultsin==undefined){

                            if (itemsReturned instanceof Array) { //si no esta paginado
                                scope.items = itemsReturned;
                            } else {
                                scope.items = (itemsReturned.results.length > 0) ? itemsReturned.results : undefined;
                            }
                        } else {
                            scope.items=scope.getItemLabel(itemsReturned,scope.resultsin);
                        }

                        scope.selected = false;
                        scope.current = 0;

                        //muestro la lista de items
                        scope.listOpened = true;
                    });
                };

                scope.updateItemList = function(filter) {

                    var lastModelFilter =filter;
                    $timeout(function () {

                        if(lastModelFilter==scope.modelfilter)
                        {
                            scope.refreshItems(filter);

                        }
                    }, 500);


                };
                scope.haveLabel=function(){
                    return scope.label!=undefined;
                }
                scope.tieneAlert=function(){
                    return scope.requiredmsj!=undefined && scope.requiredmsj!='';
                }
                scope.removeItem = function () {
                    scope.model = undefined;
                    scope.modelfilter = undefined;
                }
                scope.keyDown = function ($event) {
                    //si la tecla apretada es una flecha, aumento el index de la seleccion sino busco remoto

                    if (($event.keyCode < 37 || $event.keyCode > 40) && $event.keyCode != 13) {

                        switch ($event.keyCode) {
                            case 27:
                                //es escape, cerramos la lista y borramos el input
                                scope.listOpened = undefined;
                                scope.removeItem();

                                break;
                            case 8:
                                //es backspace
                                scope.listOpened = undefined;
                                if (scope.model == undefined)
                                {
                                    var filter = scope.modelfilter.substr(0,scope.modelfilter.length-1);
                                    scope.updateItemList(filter);

                                }
                                else
                                {
                                    scope.model = undefined;
                                }



                                break;
                            case 9:         //TAB
                                //No hacemos nada con el tab, simplemente pasamos al siguiente input
                                break;
                            default:
                                scope.updateItemList(((scope.modelfilter != undefined) ? scope.modelfilter : "") + $event.key);

                                break;
                        }

                    } else {
                        //es alguna flecha
                        switch ($event.keyCode) {
                            case 40: //flecha hacia abajo
                                if (!scope.listOpened) {
                                    //si aprete flecha para abjo y no habia nada en el input
                                    scope.refreshItems(scope.modelfilter);
                                } else {

                                    scope.current = scope.current + 1;
                                }

                                break;
                            case 38:
                                scope.current = scope.current - 1;
                                break;
                            case 13: //enter
                                scope.handleSelection(scope.items[scope.current]);
                                break;
                        }

                        if (scope.items != undefined && scope.current > scope.items.length - 1) scope.current = scope.items.length - 1;
                        if (scope.items != undefined && scope.current < 0) scope.current = 0;
                    }


                };
                //retorna el label del item,puede ser recursivo es decir: item.propiedad.propiedad2
                scope.getItemLabel = function (item,path) {
                    if (path!=undefined) {
                        var atributes = path.split(".");

                        var label = item;
                        _.each(atributes, function (element, index, list) {
                            label = label[element];
                        });

                        return label;
                    }
                };

                if (scope.model != undefined && !scope.clearInputOnSelectionParsed)
                    scope.modelfilter = scope.getItemLabel(scope.model,scope.itemlabel);

                //cuando hago el unbind desde afuera de la directiva, tengo que borrar el filtro
                scope.$watch('model', function (model_value) {
                    if (model_value == undefined) {
                        //scope.modelfilter=undefined;
                        scope.removeItem();

                    } else {
                        scope.modelfilter=scope.getItemLabel(scope.model,scope.itemlabel);
                    }
                }, true);

                scope.withEllipsis=function(){
                  return !(scope.wrapText=='true');
                };
                scope.withItemDetail=function(){
                    return scope.itemDetail!=undefined && scope.itemDetail=='true';
                };

                scope.withPopoverDetail=function(){
                    return scope.popoverDetail!=undefined && scope.popoverDetail=='true';
                };

                scope.getPopoverTemplate=function(){
                    if (scope.withPopoverDetail()){
                     return "'autocompleteResurceTemplate.html'";
                    } else {
                        return null;
                    }
                };

                scope.getPopoverPlacement=function(){
                    if (scope.popoverDetailPlacement!=undefined && scope.popoverDetailPlacement!=""){
                        return scope.popoverDetailPlacement;
                    } else {
                        return "right";
                    }
                };
            },
            templateUrl: 'views/autocomplete-resource_template.html'
        };
    });