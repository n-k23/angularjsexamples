var app = angular.module("myapp",["ngRoute"]);
app.config( function($routeProvider) {
    $routeProvider
    .when('/frst', {
        templateURL: 'kavya.html'
    })
});