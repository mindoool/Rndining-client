app.directive('dailyMenu', function() {
   return {
       restrict: 'E',
       templateUrl: 'templates/directives/daily-menu.html',
       scope: {
           today: '=',
           time: '=',
           date: '='
       }
   };
});