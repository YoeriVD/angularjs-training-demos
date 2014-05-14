'use strict';

angular.module('eenCooleWebsiteApp')
  .filter('dateFormatted', function ($filter) {
    var dateFilter = $filter('date');
    return function (input) {
      return dateFilter(input, 'dd-MM-yyyy');
    };
  });
