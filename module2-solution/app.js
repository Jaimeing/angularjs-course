(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.list = ShoppingListCheckOffService.getBuyList();
    buyCtrl.emptyList = false;

    buyCtrl.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      ShoppingListCheckOffService.removeBuyItem(itemIndex);
      buyCtrl.emptyList = ShoppingListCheckOffService.countList(buyCtrl.list);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.emptyList = true;
    
    boughtCtrl.checkList = function () {
      boughtCtrl.list = ShoppingListCheckOffService.getBoughtList();
      boughtCtrl.emptyList = ShoppingListCheckOffService.countList(boughtCtrl.list);
      return boughtCtrl.list;
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buyList = [
    {name: "cookies", quantity: 10},
    {name: "oranges", quantity: 5},
    {name: "apples", quantity: 6},
    {name: "pears", quantity: 10},
    {name: "bananas", quantity: 8},
    ];

    // List of shopping items
    var boughtList = [];

    service.buyItem = function (itemIndex) {
      var item = {
        name: buyList[itemIndex].name,
        quantity: buyList[itemIndex].quantity
      };
      boughtList.push(item);
    };

    service.removeBuyItem = function (itemIndex) {
      buyList.splice(itemIndex, 1);
    };

    service.getBoughtList = function () {
      return boughtList;
    };

    service.getBuyList = function () {
      return buyList;
    };

    service.countList = function (list) {
      var bool = false;
      if (list.length < 1) {
        bool = true;
      }
      return bool;
    };
  }

})();
