(function() {

    function config($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('object-details', {
                url: '/{nameUrl}',
                templateUrl: 'src/client/object-details/object-details.html',
                controller: 'object-details.controller'
            });
    }

    config.$inject = [
        '$locationProvider',
        '$urlRouterProvider',
        '$stateProvider'
    ];

    angular
        .module('kazinov-versus-task')
        .config(config);

})();