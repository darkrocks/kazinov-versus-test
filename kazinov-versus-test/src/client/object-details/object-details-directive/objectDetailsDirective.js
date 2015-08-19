(function() {
    angular.module('object-details')
        .directive('objectDetails', objectDetailsDirective)
        .controller('objectDetailsDirectiveController', ObjectDetailsDirectiveController);
    
    function objectDetailsDirective($compile) {
        return {
            restrict: 'AEC',
            scope: {
                object: '='
            },
            templateUrl: 'src/client/object-details/object-details-directive/object-details-directive.html',
            compile: function (element) {
                var contents = element.contents().remove();
                var contentsLinker;

                return function (scope, iElement) {
                    if (angular.isUndefined(contentsLinker)) {
                        contentsLinker = $compile(contents);
                    }

                    contentsLinker(scope, function (clonedElement) {
                        iElement.append(clonedElement);
                    });
                };
            },
            controller: 'objectDetailsDirectiveController'
        };
    }
    objectDetailsDirective.$inject = [
        '$compile'
    ];

    function ObjectDetailsDirectiveController($scope) {
        $scope.viewModel = this.objectToViewModel($scope.object);
    }

    ObjectDetailsDirectiveController.prototype.objectToViewModel = function (object) {
        var viewModel = {};
        viewModel.name = object.name;
        viewModel.properties = Object.keys(object.properties)
            .map(function (key) {
                return {
                    name: key,
                    value: object.properties[key]
                };
            });
        viewModel.embeddedObjects = object.embeddedObjects;

        return viewModel;
    };

    ObjectDetailsDirectiveController.$inject = [
        '$scope'
    ];
})();