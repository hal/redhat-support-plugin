angular.module('RedhatAccess.customSearch', [ 'RedhatAccess.search'])
        .controller('search', ['$scope', '$location', 'securityService',
            function($scope, $location, securityService) {
                // default location
                $scope.init = function () {
                     $location.path('search');
                };
            } ]);