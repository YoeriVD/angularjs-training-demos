'use strict';

angular.module('eenCooleWebsiteApp')
  .controller('MainCtrl', function ($scope, peopleService) {


    $scope.greeting = 'en met mij!';

//    $http.get('people.json').success(function(listOfPeople){
//      $scope.otherPeople = listOfPeople;
////    });
//    var peopleResource = $resource('peopleObject.json');
//    $scope.otherPeople = peopleResource.query();

    peopleService.getPeople().then(function(peopleList){
      $scope.otherPeople = peopleList;
    });


    $scope.broodPrijs = 2.35;
    $scope.datumVanVandaag = new Date();


    $scope.dumpPerson = function () {
      $scope.otherPeople.push($scope.newPerson)
      $scope.newPerson = "";
    }

  });













//    $http.get('people.json').success(function(people){
//      $scope.otherPeople = people;
//    });
//
//    var peopleResource = $resource('peopleObject.json');
//    $scope.otherPeople = peopleResource.query();