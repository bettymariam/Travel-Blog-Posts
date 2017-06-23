(function() {

  angular.module('travelblog')
    .component('postList', {
      controller: controller,
      templateUrl: '/js/posts/post-list.template.html',
    })

    controller.$inject = ['$http']
    function controller($http) {
      const vm = this

      vm.$onInit = onInit
      vm.togglePostForm = togglePostForm
      vm.createPost = createPost
      vm.createComment = createComment
      vm.voteUp = voteUp
      vm.voteDown = voteDown
      vm.sort = 'vote_count'

    function onInit() {
      $http.get('/api/posts')
        .then(response => vm.posts = response.data)
    }

    function togglePostForm() {
      vm.addingPost = !vm.addingPost
    }

    function createPost() {
      $http.post('/api/posts', vm.post)
        .then(response => {
          response.data.comments = []
          vm.posts.push(response.data)
          vm.togglePostForm()
          delete vm.post
        })
    }

    function createComment(post) {
     $http.post(`/api/posts/${post.id}/comments`, post.comment )
       .then(response => {
         post.comments.push(response.data)
         delete post.comment
       })
    }

    function voteUp(post) {
      $http.post(`/api/posts/${post.id}/votes`)
        .then(response => {
          post.vote_count = response.data.vote_count
        })
    }

    function voteDown(post) {
      if(post.vote_count >= 1) {
         $http.delete(`/api/posts/${post.id}/votes`)
        .then(response => {
          post.vote_count = response.data.vote_count
        })
      }
    }

  }
})();
