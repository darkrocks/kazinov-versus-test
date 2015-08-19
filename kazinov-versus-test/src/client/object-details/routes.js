(function() {

    function config($stateProvider) {
        $stateProvider
            .state('object-details', {
                url: '/{nameUrl}',
                templateUrl: 'src/client/object-details/object-details.html',
                controller: 'object-details.controller'
            });
    }

    config.$inject = [
        '$stateProvider'
    ];

    angular
        .module('object-details')
        .config(config);

})();