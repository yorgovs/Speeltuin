var App;
(function (App) {
    var Common;
    (function (Common) {
        var Services;
        (function (Services) {
            var ConstantService = (function () {
                function ConstantService() {
                    this.apiPostURI = '/api/posts/';
                }
                return ConstantService;
            })();
            Services.ConstantService = ConstantService;
            angular.module('chsakellBlogApp')
                .service('ConstantService', ConstantService);
        })(Services = Common.Services || (Common.Services = {}));
    })(Common = App.Common || (App.Common = {}));
})(App || (App = {}));
//# sourceMappingURL=ConstantService.js.map