(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath', '$filter'];
function MenuService($http, ApiPath, $filter) {
  var service = this;
  service.user = [];
  service.savedInfo = false;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteDish = function (menuNumber) {
      var favorite = '/' + $filter('uppercase')(menuNumber) + '.json';
      return $http.get(ApiPath + '/menu_items' + favorite).then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
         service.user = [];
         service.savedInfo = false;
      });
  };

  service.saveInfo = function (userinfo) {
    service.user = userinfo;
    service.savedInfo = true;
  };
}



})();
