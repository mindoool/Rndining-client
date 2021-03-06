app.controller('MealController', ['$scope', '$http', '$rootScope', '$filter', '$ionicModal', function ($scope, $http, $rootScope, $filter, $ionicModal) {
  $scope.currentTime = new Date().getTime();

  $scope.categoryDisplayName = {
    salad: '샐러드'
  };

  $scope.changeDate = function (forward) {
    if (forward) {
      $scope.currentTime += 86400000;
    } else {
      $scope.currentTime -= 86400000;
    }
    $scope.getMealDateMenuLists();
  };

  $scope.getMealDateMenuLists = function () {
    var params = {
      "date": $filter('date')(new Date($scope.currentTime), 'yyyy-MM-dd')
    };
    $http.get(host + '/meal-date-menus', {params: params, cache: true})
      .then(function (response) {
        console.log(response);
        $scope.mealDateMenus = response.data.data;
      });
  };
  $scope.getMealDateMenuLists();

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/weeklymenus/meal-date-menu.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeMenu = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openMenu = function (mealDateMenu, mealDateMenus) {
    $scope.loadingComments = true;
    $scope.modal.show();

    $scope.mealDateMenu = mealDateMenu;
    $scope.mealDateMenus = mealDateMenus;
    $scope.mealDateMenusObj = {
      morning: [],
      lunch: [],
      dinner: []
    };
    for (var i = 0; i < $scope.mealDateMenus.length; i++) {
      if ($scope.mealDateMenus[i].meal.time == 'morning') {
        $scope.mealDateMenusObj.morning.push($scope.mealDateMenus[i])
      } else if ($scope.mealDateMenus[i].meal.time == 'lunch') {
        $scope.mealDateMenusObj.lunch.push($scope.mealDateMenus[i])
      } else if ($scope.mealDateMenus[i].meal.time == 'dinner') {
        $scope.mealDateMenusObj.dinner.push($scope.mealDateMenus[i])
      }
    }
    $scope.loadingComments = false;
    var index = $scope.mealDateMenusObj[$scope.mealDateMenu.meal.time].indexOf(mealDateMenu);
    console.log(index);
    $scope.changeMenu(mealDateMenu, index);
  };
  $scope.tabIndex = null;
  $scope.changeMenu = function (menu, index) {
    $scope.mealDateMenu = menu;
    console.log($scope.mealDateMenu);
    // select tab
    $scope.tabIndex = index;
  };

  $scope.commentData = {};
  $scope.doComment = function () {
    var commentData = {
      "userId": $scope.mealDateMenu.userId,
      "content": $scope.commentData.content
    };
    $scope.loadingComments = true;
    $http.post(host + '/meal-dates/' + $scope.mealDateMenu.id + '/comments', commentData)
      .then(function (response) {
        console.log(response);
        $scope.mealDateMenu.comments.push(response.data.data);
      });
    $scope.loadingComments = false;
    $scope.commentData.content = null;
  };
  $scope.deleteComment = function (comment) {
    $http.delete(host + '/meal-dates/' + $scope.mealDateMenu.id + '/comments/' + comment.id)
      .then(function (response) {
        var index = $scope.mealDateMenu.comments.indexOf(comment);
        if (index >= 0) {
          $scope.mealDateMenu.comments.splice(index, 1);
        }
        console.log(response);
      });
  };
  $scope.editStatus = 0;
  $scope.editComment = function (comment) {
    var commentData = {
      "content": comment.content
    };
    $http.put(host + '/meal-dates/' + $scope.mealDateMenu.id + '/comments/' + comment.id, commentData)
      .then(function (response) {
        console.log(response);
      })
  }

  $scope.showStatus = {
    morning: true,
    lunch: true,
    dinner: true
  };
  $scope.changeShowStatus = function(key, boolean) {
    $scope.showStatus[key] = !boolean;
    console.log($scope.showStatus);
  }

}]);
