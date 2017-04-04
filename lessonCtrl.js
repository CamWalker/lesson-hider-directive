angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService) {
  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = "two-way data binding"

  $scope.announceDay = function(lesson, day) {
    if (day) {
      alert(lesson + ' is active on ' + day + '.')
    } else {
      alert('The selected lesson in not in the schedule.')
    }

  }
})
