app.directive("mangaSearch", function () {
    return {
        restrict: 'E',
        scope: {
            results: '=',
            search: '&',
            find: '&',
            stop:'&'
        },
        replace: true,
        templateUrl: 'directives/mangaSearch.htm'
    }
}); 
