(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
      $scope.checkFunction = function () {
        $scope.class1 = false;
        $scope.class2 = false;
        if ($scope.menuString) {
          var menuArray = $scope.menuString.split(",");
          var itemCount = menuArray.length;
          printMessage(itemCount);
        }
        else {
            $scope.class1 = true;
            $scope.menuMessage = "Please enter data first";
        }
      };

      function printMessage(num) {
        $scope.class2 = true;
        if (num > 0 && num < 4) {
          $scope.menuMessage = "Enjoy!";
        }
        else {
            $scope.menuMessage = "Too much!";
        }
      }

  };

})();
