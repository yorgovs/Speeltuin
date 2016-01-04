module App {
    class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "/App/List.html",
                    controller: "PostsCtrl as vm"
                })
                .when("/edit/:id", {
                    templateUrl: "/App/Edit.html",
                    controller: "PostEditCtrl as vm"
                })
                .when("/add", {
                    templateUrl: "/App/Add.html",
                    controller: "PostAddCtrl as vm"
                })
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ['$routeProvider'];

    var mainApp = angular.module('chsakellBlogApp', ['ngRoute']);
    mainApp.config(Config);
}