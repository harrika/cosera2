(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ['ShoppingListCheckOffService', ToBuyShoppingController])
.controller('AlreadyBoughtShoppingController', ['ShoppingListCheckOffService', AlreadyBoughtShoppingController])
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ToBuyShoppingController(ShoppingListCheckOffService) {
  this.items = ShoppingListCheckOffService.getItems();   
  
  this.bot = function (itemIndex,n,q) {
    ShoppingListCheckOffService.addItem(n,q);  
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
    
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getbItems();   
     
 }

function ShoppingListCheckOffService() {
  
  // List of shopping items
  var items = [{ name: "cookies", quantity: 10 },{ name: "rice", quantity: 7 },{ name: "oil", quantity: 5 },
            { name: "chapaties", quantity: 12 },{ name: "samosa", quantity: 14 }];
  var boughts = [];
 

  this.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughts.push(item);
  };

  this.removeItem = function (itemIdex) {
    items.splice(itemIdex, 1);
  };

  this.getItems = function () {
    return items;
  };
  this.getbItems = function () {
    return boughts;
  };
  
    
}

})();
