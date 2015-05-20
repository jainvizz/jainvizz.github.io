app.directive("mangaSearch", function () {
    return {
        restrict: 'E',
        scope: {
            results: '=',
            search: '&'
        },
        replace: true,
        templateUrl: 'directives/mangaSearch.htm'
    }
}); 