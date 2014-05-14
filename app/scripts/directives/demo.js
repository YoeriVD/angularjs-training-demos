'use strict';

angular.module('eenCooleWebsiteApp')
  .directive('demo', function () {
    return {
      restrict: 'E',
      compile: function(){
        console.log('dit is vanuit de compile stap');
        return function link(){
          console.log('dit is vanuit de link stap');
        }
      }
    };
  });














//compile: function (tElement) {
//        console.log('compile!')
//        return function(){
//          console.log('link!')
//        }
//      }


//compile: function(tElement, attrs) {
//  var content = angular.element('<div class="row"></div>')
//  content.append(tElement.children());
//  tElement.replaceWith(content);
//}