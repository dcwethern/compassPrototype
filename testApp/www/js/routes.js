angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.depressionScreeningAlgorthm', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/depressionScreeningAlgorthm.html',
        controller: 'depressionScreeningAlgorthmCtrl'
      }
    }
  })

  .state('menu.bipolarDisorderScreening', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bipolarDisorderScreening.html',
        controller: 'bipolarDisorderScreeningCtrl'
      }
    }
  })

  .state('menu.recommendedSteps', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recommendedSteps.html',
        controller: 'recommendedStepsCtrl'
      }
    }
  })

  .state('menu.antiDepressionTreatment', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antiDepressionTreatment.html',
        controller: 'antiDepressionTreatmentCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});