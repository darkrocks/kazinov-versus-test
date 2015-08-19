(function() {
    function ObjectDetailsController($scope) {
        this.$scope = $scope;
        this.$scope.test = 'aaaaaaaaaaaaaaa';
    }

    ObjectDetailsController.$inject = [
        '$scope'
    ];

    angular
        .module('object-details')
        .controller('object-details.controller', ObjectDetailsController);
})();