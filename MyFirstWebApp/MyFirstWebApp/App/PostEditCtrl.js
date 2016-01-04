var App;
(function (App) {
    var PostEdit;
    (function (PostEdit) {
        var PostEditCtrl = (function () {
            function PostEditCtrl($routeParams, $location, constantService, dataService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.$location = $location;
                this.constantService = constantService;
                this.dataService = dataService;
                this.postId = $routeParams.id;
                dataService.getSingle(this.constantService.apiPostURI + this.postId)
                    .then(function (result) {
                    _this.post = result;
                });
            }
            PostEditCtrl.prototype.update = function () {
                var _this = this;
                this.dataService.update(this.constantService.apiPostURI + this.postId, this.post)
                    .then(function (result) {
                    _this.$location.path('/');
                });
            };
            PostEditCtrl.$inject = ['$routeParams', '$location', 'ConstantService', 'DataService'];
            return PostEditCtrl;
        })();
        angular.module('chsakellBlogApp')
            .controller('PostEditCtrl', PostEditCtrl);
    })(PostEdit = App.PostEdit || (App.PostEdit = {}));
})(App || (App = {}));
//# sourceMappingURL=PostEditCtrl.js.map