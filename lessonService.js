angular.module('directivePractice').service('lessonService', function($http) {
  this.promise = function() {
    return $http.get('schedule.json')
  }
  this.getSchedule = this.promise();
})
