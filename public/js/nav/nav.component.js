(function() {
  'use strict';

  angular.module('travelblog')
  .component('navbar', {
    controller: controller,
    templateUrl: '/js/nav/nav.template.html',
  })


  function controller() {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
    }
  }
}());
