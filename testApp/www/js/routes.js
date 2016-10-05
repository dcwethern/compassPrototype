angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.algorithms', {
    url: '/page3',
    views: {
      'tab4': {
        templateUrl: 'templates/algorithms.html',
        controller: 'algorithmsCtrl'
      }
    }
  })

  .state('tabsController.references', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/references.html',
        controller: 'referencesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.pRISMAlgorithm', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/pRISMAlgorithm.html',
        controller: 'pRISMAlgorithmCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});