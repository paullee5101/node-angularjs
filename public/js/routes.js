angular.module('app.routes', ['ui.router'])

.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl:'templates/index.html',
    controller:'homeCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl:'templates/about.html',
    controller:'aboutCtrl'
  })
  /*
  .state('tabsController.myCards', {
    url: '/my-cards',
    views: {
      'tab2': {
        templateUrl: 'templates/myCards.html',
        controller: 'myCardsCtrl'
      }
    }
  })
  .state('myProfile', {
    url: '/my-profile',
    templateUrl: 'templates/myProfile.html',
    controller: 'myProfileCtrl'
  })

  .state('editCardTabsController.cardEdit', {
    url: '/card-edit/:card_id',
    views: {
      'tab1': {
          templateUrl: 'templates/cardEdit.html',
          controller: 'cardEditCtrl'
      }
    }
  })

  .state('editCardTabsController.cardEditFrontImage', {
    url: '/edit-card-front/:card_id',
    views: {
      'tab2': {
          templateUrl: 'templates/cardEditFrontImage.html',
          controller: 'cardEditCtrl'
      }
    }
  })

  .state('editCardTabsController.cardEditBackImage', {
    url: '/edit-card-back/:card_id',
    views: {
      'tab3': {
          templateUrl: 'templates/cardEditBackImage.html',
          controller: 'cardEditCtrl'
      }
    }
  })

  .state('cardDetailsTabsController.cardDetails', {
    url: '/card-details/:card_id',
    views: {
      'tab1': {
          templateUrl: 'templates/cardDetails.html',
          controller: 'cardDetailsCtrl'
      }
    }
  })

  .state('cardDetailsTabsController.cardDetailsFrontImage', {
    url: '/card-details-front/:card_id',
    views: {
      'tab2': {
          templateUrl: 'templates/cardDetailsFrontImage.html',
          controller: 'cardDetailsCtrl'
      }
    }
  })

  .state('cardDetailsTabsController.cardDetailsBackImage', {
    url: '/card-details-back/:card_id',
    views: {
      'tab3': {
          templateUrl: 'templates/cardDetailsBackImage.html',
          controller: 'cardDetailsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('editCardTabsController', {
    url: '/editCardTab',
    templateUrl: 'templates/editCardTabsController.html',
    abstract:true
  })

  .state('cardDetailsTabsController', {
    url: '/cardDetailsTab',
    templateUrl: 'templates/cardDetailsTabsController.html',
    abstract:true
  })

  .state('addCard', {
    url: '/add-card',
    templateUrl: 'templates/addCard.html',
    controller: 'addCardCtrl'
  })

  .state('vendors', {
    url: '/vendor-list',
    templateUrl: 'templates/vendors.html',
    controller: 'vendorsCtrl'
  })

  .state('signIn', {
    url: '/sign-in',
    templateUrl: 'templates/signIn.html',
    controller: 'signInCtrl'
  })

  .state('signUp', {
    url: '/sign-up',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('tabsController.newsFeed', {
    url: '/news-feed',
    views: {
      'tab3': {
        templateUrl: 'templates/newsFeed.html',
        controller: 'newsFeedCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/sign-in')
*/
$locationProvider.html5Mode(true);
$urlRouterProvider.otherwise('/')
});