(function() {
  'use strict'

  angular.module('travelblog')
    .component('postEdit', {
      controller: controller,
      templateUrl:"/js/posts/post-edit.template.html"
    })

    controller.$inject = ['$http', '$stateParams', '$state']
    function controller($http, $stateParams, $state) {
      const vm = this

      vm.$onInit = function () {
        let id = $stateParams.id
        $http.get(`/api/posts/${id}`)
          .then(response => vm.edit = response.data)
      }

      vm.updatePost = function () {
        return $http.patch(`/api/posts/${vm.edit.id}`, vm.edit)
          .then(function (response) {
            delete vm.edit
            $state.go('listPosts')
          })
      }
    }
})();
