(function(angular){
    
    "use strict";
    
    angular.module("app")
    
    .config(["$stateProvider","$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider){
        
        // initial and fallback rewrite
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            
            .state('index', {
                url: '/',
                views : {
                    "banner": {
                        templateUrl: "../views/html/banner/banner.html",
                        controller: "BannerCtrl as vm"
                    },
                     "navigation": {
                        templateUrl: "../views/html/navigation/navigation.html",
                        controller: "NavigationCtrl as vm"
                    },
                     "main": {
                        templateUrl: "../views/html/main/main.html",
                        controller: "MainCtrl as vm"
                    },
                     "article": {
                        templateUrl: "../views/html/article/article.html",
                        controller: "ArticleCtrl as vm"
                    },
                     "complementary": {
                        templateUrl: "../views/html/complementary/complementary.html",
                        controller: "ComplementaryCtrl as vm"
                    },
                     "contentinfo": {
                        templateUrl: "../views/html/contentinfo/contentinfo.html",
                        controller: "ContentinfoCtrl as vm"
                    }
                }
            });
        
        // enable HTML5 Mode for SEO
        $locationProvider.html5Mode(true);
    }]);
    
})(angular);