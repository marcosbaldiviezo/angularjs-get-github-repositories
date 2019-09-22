angular.module('CustomDirective')
.controller('ReposController', function($scope, $http) {
    $scope.repos = [];

    $http.get('https://api.github.com/users/marcosbaldiviezo/repos')
    .then(function(response) {
        $scope.posts = response.data;
        for (var i = response.data.length -1; i >= 0; i--) {
            var repo = response.data[i];
            $scope.repos.push(repo.name);
        }
    }
    ,function(err) {

    });

    $scope.optionSelected = function (data) {
        $scope.$apply(function() {
            $scope.main_repo = data;
        })
    }
})
.controller('RepoController', function($scope, $http, $routeParams) {
    $scope.repo = {};
    $http.get('https://api.github.com/repos/marcosbaldiviezo/'+$routeParams.name)
    .then(function(response) {
        $scope.repo = response.data;
    }
    ,function(err) {
        console.log(err);
    });
});
