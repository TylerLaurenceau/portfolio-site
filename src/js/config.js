function Config($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('root', {
    templateUrl: 'templates/nav.tpl.html'
  })

  .state('danceParty', {
    url: '/danceParty',
    templateUrl: 'templates/not-found.tpl.html'
  })

  .state('root.home', {
    url: '/home',
    templateUrl: 'templates/home.tpl.html'
  })

  .state('root.home.aboutMe', {
    url: '/aboutMe',
    templateUrl: 'templates/aboutMe.tpl.html',
    controller: 'AboutMeController as AboutMeController'
  })

  .state('root.home.projects', {
    url: '/myProjects',
    templateUrl: 'templates/myProjects.tpl.html'
  })

  .state('root.home.resume', {
    url: '/myResume',
    templateUrl: 'templates/resume.tpl.html'
  })

  .state('root.home.contactMe', {
    url: '/contactMe',
    templateUrl: 'templates/contact.tpl.html'
  })

  $urlRouterProvider.when('', '/home');
      $urlRouterProvider.otherwise('/danceParty');
}

Config.inject = ['$stateProvider', '$urlRouterProvider']

export default Config;
