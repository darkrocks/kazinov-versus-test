(function() {
    function ObjectDetailsController($scope, $state, dataService) {
        this.$scope = $scope;
        var nameUrl = $state.params['nameUrl'];
        dataService.findByNameUrl(nameUrl)
            .then(function (object) {
                $scope.object = object;
            });

        /*
         this.$scope.object = {
         name: 'Android 4.4 KitKat',
         properties: {
         '4k': true,
         'widgets': true,
         'apps': 1000000,
         'opengl_es_3_0': true,
         'customize_notifications': true,
         'offline_voice_recognition': true
         },
         embeddedObjects: [
         {
         name: '2222',
         properties: {
         '4k': true,
         'widgets': true,
         'apps': 1000000,
         'opengl_es_3_0': true,
         'customize_notifications': true,
         'offline_voice_recognition': true
         },
         embeddedObjects: [
         {
         name: '3333',
         properties: {
         '4k': true,
         'widgets': true,
         'apps': 1000000,
         'opengl_es_3_0': true,
         'customize_notifications': true,
         'offline_voice_recognition': true
         },
         embeddedObjects: []
         }
         ]
         }
         ]
         };*/
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