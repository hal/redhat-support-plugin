
angular.module('RedhatAccess.common').run(
        ['SECURITY_CONFIG','TITLE_VIEW_CONFIG', function (SECURITY_CONFIG, TITLE_VIEW_CONFIG) {
            SECURITY_CONFIG.forceLogin = true;
            TITLE_VIEW_CONFIG.show = true;
        }]
);

angular.module('RedhatAccess.cases').value('NEW_DEFAULTS',
    { 'product': 'Red Hat JBoss Enterprise Application Platform', 'version': '6.4.0' }
);

angular.module('RedhatAccess.customCaseView', ['RedhatAccess.cases'])
        .controller('customCase', ['$scope', '$location', 'securityService', function($scope, $location, securityService, NEW_DEFAULTS) {

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