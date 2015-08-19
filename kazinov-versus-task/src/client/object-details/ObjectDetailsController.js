(function() {
    function ObjectDetailsController($scope, $state, dataService) {
        this.$scope = $scope;
        var nameUrl = $state.params['nameUrl'];
        dataService.findByNameUrl(nameUrl)
            .then(function (object) {
                $scope.object = object;
            },
            function (error) {
                if (error.status === 404) {
                    $state.go('404');
                }
            }
        );
    }

    ObjectDetailsController.$inject = [
        '$scope',
        '$state',
        'dataService'
    ];

    angular
        .module('kazinov-versus-task')
        .controller('object-details.controller', ObjectDetailsController);
})();