(function () {
'use strict';

angular.module('data')
.controller('itemsController', itemsController);

itemsController.$inject = ['categoryItems'];
function itemsController(categoryItems) {
  var list = this;
  list.items = categoryItems;
}

})();
