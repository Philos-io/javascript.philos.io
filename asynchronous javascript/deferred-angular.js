function getUsers($q){
  var users = [];
  var defer = $q.Defer();

  for (var i = 0; i < 100; i++) {
    users.push({name: 'user'+i});
  }

  defer.resolve(users);

  return defer.promise;
}


// Manage multiple http calls

function getUserInformation($q, $http){

  var url = 'https://api.github.com/users/davyengone';

  var userInfoPromise = $http.get(url); // this is a promise
  var userRepoPromise = $http.get(url+'/repo');

  $q.all([userInfoPromise, userRepoPromise])
    .then(function(results){
      var userInfo = results[0];
      var userRepo = results[1];
    });
}
