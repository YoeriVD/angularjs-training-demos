//mijn eerste protractor test!

xdescribe("Mijn main scherm", function(){

  var people;

  describe('een subonderdeel van mijn main scherm', function(){
    beforeEach(function(){
      // dit gaat enkel af voor het subonderdeel
    });
    it('should do whatever', function(){

    });
  })

  beforeEach(function(){
    browser.get('/');
    people = element.all(by.repeater('person in otherPeople'));
  });

  it('should contain 5 people after the click', function(){
    //browser.debugger();
    var newThingField = element(by.model('newPerson'));
    newThingField.sendKeys('Maggybird');
    //var addButton = element(by.css('[type=submit]'))
    var addButton = $('[type=submit]');
    addButton.click().then(function(){
      expect(people.count()).toBe(5);
      expect(people.get(4).getText()).toBe('maggybird'); //we're using lowercase filter!
    });
  })

});