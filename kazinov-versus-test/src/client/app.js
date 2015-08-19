(function() {

    function config($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');
    }

    config.$inject = [
        '$locationProvider',
        '$urlRouterProvider'
    ];

    angular.module('kazinov-versus-task', [
        'object-details'
    ]) .config(config);

})();