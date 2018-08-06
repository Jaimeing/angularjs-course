(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective()  {
    var ddo = {
      templateUrl: 'searchResult.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";
    var description = menu.searchTerm;

    menu.searchItems = function (description) {
      menu.found = [];
      if(description.length)  {
        var x = MenuSearchService.getMatchedMenuItems(description).then(function(data)  {
          menu.found = data;
          if(menu.found.length > 0) {
              menu.emptyFound = false;
          }
          else {
              menu.emptyFound = true;
          }
        });
      }
      else {
        menu.emptyFound = true;
      }
    };

    menu.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(menu.found, itemIndex);
    };

  }

  MenuSearchService.$inject = ['$http', '$filter', 'ApiBasePath'];
  function MenuSearchService($http, $filter, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (description) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });
      return response.then(function (result) {
        var foundItems = [];
        var menuItems = result.data.menu_items;
        var textToFind = $filter('uppercase')(description);

        menuItems.forEach(function(data)  {
          var menuItemDesc = $filter('uppercase')(data.description);
          if (menuItemDesc.indexOf(textToFind) != -1) {
            var item = {
              menu_item: data.short_name,
              description: data.description
            };
            foundItems.push(item);
          }
        });

        return foundItems;
      });
    }

    service.removeItem = function (array, itemIndex) {
      array.splice(itemIndex, 1);
    };
  }

})();
