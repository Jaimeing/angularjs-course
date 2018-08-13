(function () {
'use strict';

angular.module('data')
.component('categoryItems', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
