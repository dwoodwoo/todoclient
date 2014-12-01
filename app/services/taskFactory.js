app.factory("Task", ['$resource',function($resource) {
  return $resource('http://railsschooltodo.herokuapp.com/tasks/:id', {id:'@id'});
}]);