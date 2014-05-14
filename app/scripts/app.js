'use strict';

angular
  .module('eenCooleWebsiteApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'eenCooleWebsiteApp.providers'
  ])
  .constant('peopleJsonFile', 'peopleObject.json')
  .config(function ($routeProvider, peopleJsonFile, peopleServiceProvider) {
    peopleServiceProvider.jsonFile = peopleJsonFile;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailPersonCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  })
;


angular.module('eenCooleWebsiteApp.providers', []);


//
//.when('/detail/:id',{
//  templateUrl: 'views/detail.html',
//  controller:'DetailPersonCtrl'
//})