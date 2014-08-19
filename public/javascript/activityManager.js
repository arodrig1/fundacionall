var activityManager = angular.module('activityManager', []);

function mainController($scope, $http) {
  $scope.formData = {};

  $http.get('/api/activities')
    .success(function(data) {
      $scope.activities = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.createActivity = function() {
    $http.post('/api/activities', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.activities = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteActivity = function(id) {
    $http.delete('/api/activities/' + id)
      .success(function(data) {
        $scope.activities = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

}