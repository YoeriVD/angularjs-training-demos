'use strict';

describe('Controller: DetailPersonCtrl', function () {

  // load the controller's module
  beforeEach(module('eenCooleWebsiteApp'));

  var $controller, scope,
    $routeParams, peopleService, $q;

  var testPerson = {
    "name": "Yoeri", "age": 24, "location": "Temse"
  }

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, $rootScope, _peopleService_, _$routeParams_, _$q_) {
    scope = $rootScope.$new();
    $controller = _$controller_;
    $routeParams = _$routeParams_;
    peopleService = _peopleService_;
    $q = _$q_;
  }));

  it('should have a person with the id of the route', function () {
    //arrange
    $routeParams.id = 1;
    var deferred = $q.defer();
    spyOn(peopleService, 'getPerson').andReturn(deferred.promise);

    //act
    $controller('DetailPersonCtrl', {
      $scope : scope
    });
    expect(scope.id).toEqual(1);
    expect(peopleService.getPerson).toHaveBeenCalled();
    var testPerson = {"naam" : "Erik"};
    deferred.resolve(testPerson);
    scope.$digest();
    scope.$apply();
    //assert
    expect(scope.person).toEqual(testPerson);
  });


});








//
//// Initialize the controller and a mock scope
//beforeEach(inject(function (_$controller_, $rootScope, _$routeParams_, _$httpBackend_) {
//  scope = $rootScope.$new();
//  $httpBackend = _$httpBackend_;
//  $controller = _$controller_;
//  $routeParams = _$routeParams_;
//}));
//
//it('should have a person with the id of the route', function () {
//  $routeParams.id = 5;
//  $httpBackend.expectGET('peopleObject.json').respond([testPerson])
//  $controller('DetailPersonCtrl', {
//    $scope: scope
//  });
//  $httpBackend.flush();
//  expect(scope.personIndex).toBe($routeParams.id);
//});
//
//afterEach(function(){
//  $httpBackend.verifyNoOutstandingExpectation();
//  $httpBackend.verifyNoOutstandingRequest();
//})