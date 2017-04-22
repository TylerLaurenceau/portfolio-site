function Config($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('root', {
    templateUrl: 'templates/nav.tpl.html'
  })

  .state('not-found', {
    url: '/not-found',
    templateUrl: 'templates/not-found.tpl.html'
  })

  .state('root.home', {
    url: '/home',
    templateUrl: 'templates/home.tpl.html'
  })

  $urlRouterProvider.when('', '/home');
      $urlRouterProvider.otherwise('/not-found');
}

Config.inject = ['$stateProvider', '$urlRouterProvider']

export default Config;
