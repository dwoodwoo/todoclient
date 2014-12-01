  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      // route for the home page
      .when('/',                                { templateUrl: 'app/views/task.html' })
      .otherwise({ redirectTo: '/' });

      // use the HTML5 History API
      // $locationProvider
      //   .html5Mode(true);
      // .hashPrefix('!');
  });