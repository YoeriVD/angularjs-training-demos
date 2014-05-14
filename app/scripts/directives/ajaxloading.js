'use strict';

angular.module('eenCooleWebsiteApp')
  .directive('ajaxLoading', function () {
    return {
      transclude: true,
      scope: {
        message: '@message'
      },
      template: '<div class="ajax-loading">' +
        '<div class="loading"></div>' +
        '<p>{{ message }}</p>' +
        '</div>',
      restrict: 'E'
    }
  });
