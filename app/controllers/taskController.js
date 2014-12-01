app.controller('taskController', function($scope, $location, $http, Task) {

      Task.query(function(result) {
          $scope.tasks = result;
      });

      $scope.show = function(task) {
          swal("Name is " + task.name, "description: " + task.description, "success");
      };

    });