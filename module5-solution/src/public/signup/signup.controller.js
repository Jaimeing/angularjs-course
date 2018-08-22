(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$state', 'MenuService'];
function SignUpController($state, MenuService) {
  var reg = this;
  reg.user = {};

  reg.submit = function () {
    MenuService.saveInfo(reg.user);
    $state.go('public.favoritedish');
  };
}


})();
