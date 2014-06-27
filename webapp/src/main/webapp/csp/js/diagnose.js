angular.module('RedhatAccess.diagnose',
		[ 'RedhatAccess.search', 'RedhatAccess.cases', 'RedhatAccess.header' ])
		.config([ '$stateProvider', function($stateProvider) {
			$stateProvider.state('diagnose', {
				url : "/diagnose",
				templateUrl : 'views/diag.html'
			});
		} ]).controller(
				'diag',
				[
						'$scope',
						'$location',
						'SearchResultsService',
						'securityService',
						'NEW_DEFAULTS',
						function($scope, $location, SearchResultsService,
								securityService, NEW_DEFAULTS) {
							NEW_DEFAULTS.product = "Red Hat Enterprise Virtualization";
					    	NEW_DEFAULTS.version = "3.4.0";
							$scope.init = function() {
								var diagText = $location.search().diagnoseText;
								if (diagText != null) {
									//securityService.validateLogin(true).
									//then( function(){
										SearchResultsService.diagnose(diagText, 5);
									//});
								}
							};
						} ]);