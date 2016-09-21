angular.module('app', ['ngMaterial', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngMessages', 'material.svgAssetsCache'])
.controller('AppCtrl', function ($scope, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
  });