
var myApp = angular.module("myApp", []);
myApp.directive("myDirective", function() {
    return {
        restrict: "E",
        template: " <h1> Directive</h1>"
};
});