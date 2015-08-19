(function() {

    function config($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/client/templates/home.html'
            })
            .state('object-details', {
                url: '/{nameUrl}',
                templateUrl: 'src/client/object-details/object-details.html',
                controller: 'object-details.controller'
            })
            .state('404', {
                url: '/error/404',
                templateUrl: 'src/client/templates/404.html'
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