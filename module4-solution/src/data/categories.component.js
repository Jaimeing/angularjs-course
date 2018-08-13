(function () {
'use strict';

angular.module('data')
.component('menuCat', {
  templateUrl: 'src/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
