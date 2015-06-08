app.directive("mangaResult", function () {
    return {
        restrict: 'E',
        scope: {
            results: '=',
            chapResults: '=',
            imageLoad: '=',
            getChap: '&'
        },
        replace: true,
        templateUrl: 'directives/mangaResult.htm',
        link: function (scope, element, attrs) {
            var targetElem = angular.element(document.querySelector('.imgFirstPage'));
            scope.imageLoad = true;
            targetElem.bind('load', function () {
                scope.$apply(function () {
                    scope.imageLoad = false;
                });
            });
            targetElem.bind('error', function () {
                scope.$apply(function () {
                    scope.imageLoad = false;
                });
            });
        }
    }
}); 
