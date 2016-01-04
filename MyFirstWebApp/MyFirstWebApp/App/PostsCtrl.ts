module App.PostList {

    interface IPostsViewModel {
        posts: App.Domain.IPost[];
        remove(Id: number): void;
    }

    class PostsCtrl implements IPostsViewModel {

        posts: App.Domain.IPost[];

        static $inject = ['ConstantService', 'DataService'];
        constructor(private constantService: App.Common.Services.ConstantService,
            private dataService: App.Common.Services.DataService) {
            this.getPosts();
        }

        remove(Id: number): void {
            var self = this; // Attention here.. check 'this' in TypeScript and JavaScript
 
            this.dataService.remove(this.constantService.apiPostURI + Id)
                .then(function (result) {
                    self.getPosts();
                });
        }

        getPosts(): void {
            this.dataService.get(this.constantService.apiPostURI).then((result: App.Domain.IPost[]) => {
                this.posts = result;
            });
        }
    }
    angular.module('chsakellBlogApp')
        .controller('PostsCtrl', PostsCtrl);
}