app.controller("MainController", ["$scope", "MangaList", "MangaFind", "MangaChapter", function ($scope, MangaList, MangaFind, MangaChapter) {
    $scope.showSearch = true;
    $scope.showResult = false;
    $scope.showBack = false;
    $scope.showProcess = false;
    MangaList.success(function (data) {
        $scope.MangaList = [];
        if (data != null) {
            data.map(function (value) {
                if (value.name.match(/^[A-Za-z]+$/)) {
                    $scope.MangaList.push(value);
                }
            });
        }
    });
    $scope.SearchManga = function (SearchItem) {
        $scope.SearchComic = SearchItem;
        MangaFind.fnParams(SearchItem).success(function (data) {
            if (data != null) {
                data.artist = data.artist[0];
                data.author = data.author[0];
                data.genres = data.genres[0];
                $scope.SearchMangaResult = data;
                $scope.showSearch = false;
                $scope.showResult = true;
                $scope.showBack = true;
                $scope.GetMangaChap('1');
            }
        });
    };
    $scope.GetMangaChap = function (ChapterID) {
        if ($scope.ActiveChapterID != ChapterID) {
            $scope.ActiveChapterID = ChapterID;
            $scope.showProcess = true;
            MangaChapter.fnParams([$scope.SearchComic, ChapterID]).success(function (data) {
                if (data != null) {
                    $scope.MangaChapResult = data;
                }
            });
        }
    };
    $scope.goBack = function () {
        document.getElementById("txtMangaSearch").value = '';
        $scope.showSearch = true;
        $scope.showResult = false;
        $scope.showBack = false;
        $scope.ActiveChapterID = '';
    };
} ]);
