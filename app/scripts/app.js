'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
  'ui.router',
  'ngAnimate'
  ])
 .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '/dashboard/miCuenta');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('base', {
    abstract: true,
    url: '',
    templateUrl: 'views/base.html'
  })
  .state('login', {
    url: '/login',
    parent: 'base',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('dashboard', {
    url: '/dashboard',
    parent: 'base',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('miCuenta', {
    url: '/miCuenta',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/mi_cuenta.html'
  })
  .state('reports', {
    url: '/reports',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/reports.html'
  })

  .state('productos', {
    url: '/productos',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/productos.html'
  });

});
