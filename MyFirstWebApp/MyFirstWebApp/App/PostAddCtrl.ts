module App.PostAdd {

    interface IAddPostViewModel {
        post: App.Domain.IPost;
        add(): void;
    }

    class PostAddCtrl implements IAddPostViewModel {

        post: App.Domain.IPost;

        static $inject = ['$location', 'ConstantService', 'DataService'];
        constructor(private $location: ng.ILocationService,
            private constantService: App.Common.Services.ConstantService,
            private dataService: App.Common.Services.DataService) {
        }


        add(): void {
            this.dataService.add(this.constantService.apiPostURI, this.post)
                .then((result: App.Domain.IPost) => {
                    alert(result.Title + ' submitted successfully');
                    this.$location.path('/');
                });
        }
    }
    angular.module('chsakellBlogApp')
        .controller('PostAddCtrl', PostAddCtrl);
}