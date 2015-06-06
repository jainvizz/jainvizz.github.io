app.factory("MangaList", ["$http", function ($http) {
    return {
        fnParams: function (params) {
            return $http.get("https://doodle-manga-scraper.p.mashape.com/mangareader.net/search?g=%5B5D&l=10&q=" + params, {
                headers: { 'X-Mashape-Key': '9bxxv88UkamshKNWA7xXtWf0oy7dp1Ahy7PjsnmPIwRJlEGYeO', 'Accept': 'text/plain' }
            }).success(function (data) {
                return data;
            }).error(function (err) {
                return err;
            });
        }
    }
} ]);
