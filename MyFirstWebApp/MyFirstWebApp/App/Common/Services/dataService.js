var App;
(function (App) {
    var Common;
    (function (Common) {
        var Services;
        (function (Services) {
            var DataService = (function () {
                function DataService($http, $q) {
                    this.httpService = $http;
                    this.qService = $q;
                }
                DataService.prototype.get = function (resource) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.get(resource).then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.getSingle = function (resource) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.get(resource).then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.add = function (resource, entity) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.post(resource, entity)
                        .then(function (result) {
                        deferred.resolve(result.data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.update = function (resource, entity) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.put(resource, entity)
                        .then(function (data) {
                        deferred.resolve(data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.prototype.remove = function (resource) {
                    var self = this;
                    var deferred = self.qService.defer();
                    self.httpService.delete(resource)
                        .then(function (data) {
                        deferred.resolve(data);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                DataService.$inject = ['$http', '$q'];
                return DataService;
            })();
            Services.DataService = DataService;
            angular.module('chsakellBlogApp')
                .service('DataService', DataService);
        })(Services = Common.Services || (Common.Services = {}));
    })(Common = App.Common || (App.Common = {}));
})(App || (App = {}));
//# sourceMappingURL=DataService.js.map