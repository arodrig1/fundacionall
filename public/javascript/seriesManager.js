var seriesManager = angular.module('seriesManager', []);

function seriesController($scope, $http) {
  $http.get('/api/series')
    .success(function(data) {
      $scope.series = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
}

angular.bootstrap(document, ['seriesManager']);