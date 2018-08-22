(function () {
"use strict";

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['MenuService', 'favoriteDish', 'ApiPath'];
function myInfoController(MenuService, favoriteDish, ApiPath) {
  var reg = this;
  reg.user = [];
  reg.user = MenuService.user;
  reg.savedInfo = MenuService.savedInfo;
  reg.favoriteDish = favoriteDish;
  reg.basePath = ApiPath;
}


})();
