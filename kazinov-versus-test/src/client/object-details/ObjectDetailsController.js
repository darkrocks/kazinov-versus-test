(function() {
    function ObjectDetailsController($scope) {
        this.$scope = $scope;
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
        };
    }

    ObjectDetailsController.$inject = [
        '$scope'
    ];

    angular
        .module('object-details')
        .controller('object-details.controller', ObjectDetailsController);
})();