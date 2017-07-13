angular.module("shopping-app").controller("shopCtrl", function($scope){
  //settings some pre-done items for the app as an example
  //assigns objects to an "item" variable with is part of $score
  //in HTML we can access it as "items"
  $scope.items = [];
  $scope.clearBought = function(){
    //filters array of items and only returns the ones that havent been bought
    $scope.items = _.filter($scope.items, function(item){
      return !item.bought;
    });
  }

  $scope.addItem = function(){
    //adds a new object based on users input into text box (held as variable itemEntry)
    if($scope.itemEntry !== ""){
      if($scope.items.length < 10){
        $scope.items.push({text: $scope.itemEntry, bought: false, id: $scope.items.length+1});
      }
    }
    $scope.itemEntry = ""; //then resets the text box for the user
  }
  $scope.isBought = function(bought){

    //returns bought or not-bought based on if bought in the item is true or false
    return (bought) ? "bought" : "not-bought";
  }


});
