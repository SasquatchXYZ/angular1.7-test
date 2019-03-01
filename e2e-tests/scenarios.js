'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /table-view when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/table-view");
  });


  describe('table', function() {

    beforeEach(function() {
      browser.get('index.html#!/table-view');
    });


    it('should render table-view when user navigates to /table-view', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('cards', function() {

    beforeEach(function() {
      browser.get('index.html#!/cards-view');
    });


    it('should render cards-view when user navigates to /cards-view', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
