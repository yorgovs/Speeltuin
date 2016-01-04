var App;
(function (App) {
    var PostAdd;
    (function (PostAdd) {
        var PostAddCtrl = (function () {
            function PostAddCtrl($location, constantService, dataService) {
                this.$location = $location;
                this.constantService = constantService;
                this.dataService = dataService;
            }
            PostAddCtrl.prototype.add = function () {
                var _this = this;
                this.dataService.add(this.constantService.apiPostURI, this.post)
                    .then(function (result) {
                    alert(result.Title + ' submitted successfully');
                    _this.$location.path('/');
                });
            };
            PostAddCtrl.$inject = ['$location', 'ConstantService', 'DataService'];
            return PostAddCtrl;
        })();
        angular.module('chsakellBlogApp')
            .controller('PostAddCtrl', PostAddCtrl);
    })(PostAdd = App.PostAdd || (App.PostAdd = {}));
})(App || (App = {}));
//# sourceMappingURL=PostAddCtrl.js.map