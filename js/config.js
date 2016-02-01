;(function(){
    'use strict';

    angular.module('quoreApp')
    .config(function($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl: 'views/landing.html'
        })
    })
}());