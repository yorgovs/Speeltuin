module App.PostEdit {

    interface IEditPostViewModel {
        post: App.Domain.IPost;
        update(): void;
    }

    interface IPostParams extends ng.route.IRouteParamsService {
        id: number;
    }

    class PostEditCtrl implements IEditPostViewModel {

        post: App.Domain.IPost;
        private postId: number;

        static $inject = ['$routeParams', '$location', 'ConstantService', 'DataService'];
        constructor(private $routeParams: IPostParams,
            private $location: ng.ILocationService,
            private constantService: App.Common.Services.ConstantService,
            private dataService: App.Common.Services.DataService) {
            this.postId = $routeParams.id;

            dataService.getSingle(this.constantService.apiPostURI + this.postId)
                .then((result: App.Domain.IPost) => {
                    this.post = result;
                });
        }

        update(): void {
            this.dataService.update(this.constantService.apiPostURI + this.postId, this.post)
                .then((result: App.Domain.IPost) => {
                    this.$location.path('/');
                });
        }
    }
    angular.module('chsakellBlogApp')
        .controller('PostEditCtrl', PostEditCtrl);
}