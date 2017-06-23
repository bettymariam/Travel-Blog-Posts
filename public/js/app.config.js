(function() {

  'use strict'

  angular.module('travelblog').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $stateProvider
      .state('listPosts', {
        url: '/',
        component: 'postList',
      })
      .state('editPost', {
        url: '/posts/:id/edit',
        component: 'postEdit',
      })
  }

})();
