'use strict';

describe('ajaxLoadingDirective', function () {
// load the directive's module
  beforeEach(module('eenCooleWebsiteApp'));

  var element,
    scope;
  var $rootScope;

  beforeEach(inject(function (_$rootScope_) {
    $rootScope =_$rootScope_;
    scope = $rootScope.$new();

  }));

  it('should make hidden element visible', inject(function ($compile) {
    spyOn(console,'log').andCallFake(function(message){

    })
    var stringElement = '<ajax-loading message="we zijn bezig!"></ajax-loading>';
    element = $compile('<ajax-loading message="we zijn bezig!"></ajax-loading>')(scope);
    scope.$digest();
    expect(element.find('p').text()).toBe('we zijn bezig!');
  }));
})