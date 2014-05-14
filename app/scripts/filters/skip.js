'use strict';

angular.module('eenCooleWebsiteApp')
  .filter('skip', function () {
    return function (theArrayToChange, numberToSkip) {
      return theArrayToChange.slice(numberToSkip);
    };
  });
