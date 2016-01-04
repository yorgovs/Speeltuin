var App;
(function (App) {
    var PostList;
    (function (PostList) {
        var PostsCtrl = (function () {
            function PostsCtrl(constantService, dataService) {
                this.constantService = constantService;
                this.dataService = dataService;
                this.getPosts();
            }
            PostsCtrl.prototype.remove = function (Id) {
                var self = this; // Attention here.. check 'this' in TypeScript and JavaScript
                this.dataService.remove(this.constantService.apiPostURI + Id)
                    .then(function (result) {
                    self.getPosts();
                });
            };
            PostsCtrl.prototype.getPosts = function () {
                var _this = this;
                this.dataService.get(this.constantService.apiPostURI).then(function (result) {
                    _this.posts = result;
                });
            };
            PostsCtrl.$inject = ['ConstantService', 'DataService'];
            return PostsCtrl;
        })();
        angular.module('chsakellBlogApp')
            .controller('PostsCtrl', PostsCtrl);
    })(PostList = App.PostList || (App.PostList = {}));
})(App || (App = {}));
//# sourceMappingURL=PostsCtrl.js.map