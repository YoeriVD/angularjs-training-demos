'use strict';

describe('Service: Peopleservice', function () {

  // load the service's module
  beforeEach(module('eenCooleWebsiteApp.providers'));

  // instantiate service
  var peopleservice, $httpBackend, $q, $rootScope;

  beforeEach(inject(function (_peopleService_, _$httpBackend_, _$rootScope_) {
    peopleservice = _peopleService_;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  it('should return a promise of people', function () {
    $httpBackend.expectGET('peopleObject.json').respond([
      {"name": "Yoeri"}
    ]);
    var people = null;
    var promise = null;
    var promiseResolved = false;
    //async
    runs(function () {
      //de service oproepen
      promise = peopleservice.getPeople();
      //zeggen wat er 'dan' moet gebeuren
      promise.then(function (returnValue) {
        promiseResolved = true;
        people = returnValue;
      });
      $httpBackend.flush();
    });
    //wacht tot een conditie true is
    waitsFor(function () {
      //promises uitlezen
      $rootScope.$digest();
      //bindings updaten
      $rootScope.$apply();
      return promiseResolved;
    }, 3000, 'the promise to be resolved');
    //ga verder met de volgende taak
    runs(function () {
      expect(people.length).toBe(1);
    });

  });


});
