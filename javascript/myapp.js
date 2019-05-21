angular.module('myApp', ['boomstrap'])
.controller('TourDemoCtrl', ['$scope', 'bootstrapTourService', function($scope, bootstrapTourService) {
  $scope.bsTour = bootstrapTourService;
  $scope.bsTour.init([
    {
      element: '#stop1',
      placement: 'right',
      prev: -1,
      title: 'First Stop',
      content: 'You\'ve reached the first stop.  Congrats.'
    },
    {
      element: '#stop2',
      placement: 'bottom',
      template: 'template/popover/popover-bootstrap-tour-fit-score.html',
      title: 'Second Stop',
      content: 'You\'ve reached the second stop.  Kudos.'
    },
    {
      element: '#stop3',
      placement: 'bottom',
      template: 'template/some-custom-bootstrap-template.html',
      title: 'Third Stop',
      content: 'Example of a custom template. You can specify an angular template for <em>any</em> tour step manually.'
    },
    {
      element: '#stop4',
      placement: 'left',
      template: 'template/custom-template-with-end.html',
      title: 'Fourth Stop',
      content: 'Goodbye!'
    }
  ]);
}]);