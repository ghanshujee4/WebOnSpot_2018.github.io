/// <reference path="../wosslider/index.html" />

var app = angular.module("app", []);
app.directive("appDirective", function () {
    return {
        templateUrl: '/wosslider/index.html'
        };

});

app.directive("popUpDirective", function () {
    return {
        templateUrl: '/popup-menu/index.html'
    };

});
