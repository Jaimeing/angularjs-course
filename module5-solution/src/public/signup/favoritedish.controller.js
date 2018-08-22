(function () {
"use strict";

angular.module('public')
.controller('favoriteDishController', favoriteDishController);

favoriteDishController.$inject = ['favoriteDish','ApiPath', 'MenuService'];
function favoriteDishController(favoriteDish, ApiPath) {
  var $ctrl = this;
  $ctrl.favoriteDish = favoriteDish;
  $ctrl.basePath = ApiPath;
}

})();
