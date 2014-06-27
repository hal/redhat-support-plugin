angular.module('RedhatAccess.customLogViewer', [ 'RedhatAccess.logViewer', 'RedhatAccess.cases'])
	.controller('logView', [
	    '$scope', 
	    'securityService',
	    'NEW_DEFAULTS',
		function($scope, securityService, NEW_DEFAULTS) {
	    	NEW_DEFAULTS.product = "Red Hat Enterprise Virtualization";
	    	NEW_DEFAULTS.version = "3.4.0";
			
		} ]);