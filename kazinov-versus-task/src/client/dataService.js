(function() {

    angular
        .module('kazinov-versus-task')
        .factory('dataService', dataService);


    function dataService($http) {
        return {
            findByNameUrl: function (nameUrl) {
                return $http.get('api/' + nameUrl).
                    then(function(response) {
                        return response.data;
                    });
            }
        };
    }

    dataService.$inject = [
        '$http'
    ];
})();