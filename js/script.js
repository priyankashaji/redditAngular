var app = angular.module('myApp', []);
app.controller('blogCtrl', function($scope, $http) {
  $http.get("https://www.reddit.com/r/funny.json").then(function (response) {
    var originalBlogs = response.data.data.children;
    var blogs = originalBlogs.map(function(blog){
      return {
        author: blog.data.author,
        title:blog.data.title,
        url:blog.data.url,
        thumbnail:blog.data.thumbnail,
        hours:(new Date(1000*blog.data.created)).getHours(),
        comments:blog.data.num_comments
      };
    });

    $scope.myData = blogs;
  });
});
