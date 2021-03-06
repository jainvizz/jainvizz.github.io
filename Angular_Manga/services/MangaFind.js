﻿app.factory("MangaFind", ["$http", function ($http) {
    return {
        fnParams: function (params) {
            return $http.get("https://doodle-manga-scraper.p.mashape.com/mangareader.net/manga/" + params + "/", {
                headers: { 'X-Mashape-Key': '9bxxv88UkamshKNWA7xXtWf0oy7dp1Ahy7PjsnmPIwRJlEGYeO', 'Accept': 'text/plain' }
            }).success(function (data) {
                return data;
            }).error(function (err) {
                return err;
            });
        }
    }
} ]);