'use strict';

angular.module('eenCooleWebsiteApp.providers')
  .factory('peopleService', function ($http, $q) {


    function hetZalMijEenWorstWezen() {
      var deferred = $q.defer();
      $http.get('peopledfsdfObject.json')
        .success(function (peopleList) {
          deferred.resolve(peopleList);
        })
        .catch(function (error) {
          console.error('SERVICE')
          deferred.reject("error");
        });
      return deferred.promise;
    }

    function getPerson(id) {
      var deferred = $q.defer();
      hetZalMijEenWorstWezen().then(function (peopleList) {
        deferred.resolve(peopleList[id - 1]);
      });
      return deferred.promise;
    }

    return {
      getPeople: hetZalMijEenWorstWezen,
      getPerson: getPerson
    }

  });


//.factory('peopleService', function ($http, $q) {
//
//
//  function hetZalMijEenWorstWezen() {
//    var deferred = $q.defer();
//    $http.get('peopleObject.json').success(function (peopleList) {
//      deferred.resolve(peopleList);
//    });
//    return deferred.promise;
//  }
//
//  function getPerson(id) {
//    var deferred = $q.defer();
//    hetZalMijEenWorstWezen.then(function (peopleList) {
//      deferred.resolve(peopleList[id - 1]);
//    });
//    return deferred.promise;
//  }
//
//  return {
//    getPeople: hetZalMijEenWorstWezen,
//    getPerson: getPerson
//  }
//
//});

//
//.
//provider('peopleService', function peopleServiceProvider() {
//
//  this.jsonFile = 'eenOfAndereFile.json';
//
//  this.$get = function peopleServiceFactory($http) {
//    var self = this;
//
//    function hetZalMijEenWorstWezen(callback) {
//      $http.get(self.jsonFile).success(function (peopleList) {
//        callback(peopleList);
//      });
//    }
//
//    function getPerson(id, callback) {
//      hetZalMijEenWorstWezen(function (peopleList) {
//        callback(peopleList[id - 1]);
//      })
//    }
//
//    return {
//      getPeople: hetZalMijEenWorstWezen,
//      getPerson: getPerson
//    }
//  }
//});
//

//  .service('peopleService', function ($http) {
//    var self = this;
//    self.getPeople = function(callback){
//      $http.get('peopleObject.json').success(function(peopleResponse){
//        if(callback){
//          callback(people);
//        }
//      })
//    };
//
//    self.getPerson = function(id, callback){
//      self.getPeople(function(people){
//        callback(people[id - 1]);
//      })
//    }
//  });
//
//

//  .factory('peopleService', function(){
//    function mijnSuperAwesomeMoeilijkeNaam(callback){
//      $http.get('peopleObject.json').success(function(peopleResponse){
//        if(callback){
//          callback(people);
//        };
//      })
//    };
//
//    function getPerson(id, callback){
//      mijnSuperAwesomeMoeilijkeNaam(function(people){
//        callback(people[id - 1]);
//      })
//    }
//  //revealing module pattern
//    return {
//      getPeople : mijnSuperAwesomeMoeilijkeNaam,
//      getPerson: getPerson
//    }
//  })
