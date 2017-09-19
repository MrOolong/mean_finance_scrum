angular.module('cdfinance').controller("FindController", FindController);

function FindController($http) {
  var vm = this;
  console.log("findController 5");
  vm.find = function() {
    var symbol = vm.symbol;
    console.log("8", symbol);
    
    $http.get("/api/stocks/" + symbol)
      .then(function(response) {
        console.log("found stock")
        // vm.error = ''; clears error from page 13: find-controller.js
        vm.error = '';
        var stockprice = response.data.price
        vm.stockprice = stockprice;
    }).catch(function(error) {
      if (error) {
        vm.error = "Stock not found";
      }
    })
  }
}