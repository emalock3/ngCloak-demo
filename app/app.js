function NgCloakSampleCtrl($scope, $http, $timeout) {
  $scope.name = 'world';
  $http.get('test.json').success(function(data) {
    $timeout(function() {
      $scope.name = data.name;
    }, 500);
  });
}

function loadAngularJS(d) {
  setTimeout(function() {
    var a = d.createElement('script');
    a.async = 1;
    a.src = '//code.angularjs.org/1.2.0-rc.2/angular.min.js';
    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s);
  }, 500);
}
