/**
 * Created by yoeri_000 on 13/05/2014.
 */
describe('MainCtrl', function () {

  beforeEach(module('eenCooleWebsiteApp'));


  var $controller, $httpBackend, scope, peopleService, $q;

  beforeEach(function () {
    inject(function (_$controller_, _$httpBackend_, $rootScope, _peopleService_, _$q_) {
      $controller = _$controller_;
      $httpBackend =  _$httpBackend_;
      scope = $rootScope.$new();
      peopleService = _peopleService_;
      $q = _$q_;
    });
  });


  it('should make a get call to people.json', function(){
    var deferred = $q.defer();
    var testList = [{"name": "Yoeri"}];
    spyOn(peopleService, 'getPeople').andReturn(deferred.promise);
    $controller('MainCtrl', {
      $scope: scope
    });
    expect(peopleService.getPeople).toHaveBeenCalled();
    deferred.resolve(testList);
    scope.$digest();
    scope.$apply();

    expect(scope.otherPeople.length).toBe(1)
    expect(scope.otherPeople).toEqual(testList)

  });


});