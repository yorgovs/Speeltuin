var App;
(function (App) {
    var Config = (function () {
        function Config($routeProvider) {
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
        return Config;
    })();
    Config.$inject = ['$routeProvider'];
    var mainApp = angular.module('chsakellBlogApp', ['ngRoute']);
    mainApp.config(Config);
})(App || (App = {}));
//# sourceMappingURL=App.js.map