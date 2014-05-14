'use strict';

angular.module('eenCooleWebsiteApp')
  .controller('DetailPersonCtrl', function ($scope, $routeParams, peopleService) {

    $scope.id = $routeParams.id;

    peopleService.getPerson($scope.id)
      .then(function (person) {
        console.log(person);
        $scope.person = person;
      })
      .catch(function () {
        console.error('CONTROLLER');
      });

  });

