'use strict';

/**
 * @ngdoc overview
 * @name ciwiseTimekeeperApp
 * @description
 * # ciwiseTimekeeperApp
 *
 * Main module of the application.
 */
angular
  .module('ciwiseTimekeeperApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  $.material.init();
