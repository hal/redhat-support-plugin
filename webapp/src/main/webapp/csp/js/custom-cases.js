
angular.module('RedhatAccess.common').run(
        ['SECURITY_CONFIG', function (SECURITY_CONFIG) { SECURITY_CONFIG.forceLogin = true; }
]);

angular.module('RedhatAccess.customCaseView', ['RedhatAccess.cases'])
        .controller('customCase', ['$scope', '$location', 'securityService', 'NEW_DEFAULTS', function($scope, $location, securityService, NEW_DEFAULTS) {
            NEW_DEFAULTS.product = "Red Hat JBoss Enterprise Application Platform";
            NEW_DEFAULTS.version = "6.2.0";
            $scope.selected = 'search';

            $scope.init = function () {
                securityService.validateLogin(true);
                if($location.$$path == '/case/list'){
                    $scope.selected = 'modify-case';
                }
                else if($location.$$path == '/case/new'){
                    $scope.selected = 'open-case';
                }
                else{
                    $scope.selected = 'search';
                    $location.path('search');
                }
            };
        }]);