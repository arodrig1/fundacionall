var childManager = angular.module('childManager', []);

function childController($scope, $http) {
  $scope.formData = {};

  $http.get('/api/children')
    .success(function(data) {
      $scope.children = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.createChild = function() {
    $http.post('/api/children', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.children = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteChild = function(id) {
    $http.delete('/api/children/' + id)
      .success(function(data) {
        $scope.children = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

}

angular.bootstrap(document, ['childManager']);