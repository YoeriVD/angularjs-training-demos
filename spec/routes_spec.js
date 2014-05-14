/**
 * Created by yoeri_000 on 14/05/2014.
 */
describe('the routing configuration', function () {
  //define baseUrl
  var baseUrl = "http://localhost:9000";
  //it should have a route to ...
  it('should have a route to detail', function(){
    //go to url
    var url = baseUrl + '/#/detail/1';
    browser.get(url);
    //verify url
    expect(browser.getCurrentUrl()).toEqual(url);
  });


});









//
//var baseUrl = 'http://localhost:9000';
//it('should have a route /detail/:id', function () {
//  var url = baseUrl + '/#/detail/1'
//  browser.get(url);
//  expect(browser.getCurrentUrl()).toEqual(url);
//});