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


angular.module('promise', [])

.controller('MainCtrl', function($http){

	$http.get('https://api.github.com/uses/davyengone')

	.success(function(res){
			console.log(res);
			try{
				throw new Error('something happens again');
			}catch(e){
				console.log(e)
			}
		})

	.error(function(err){
		console.log(err);
	})
	.catch(function(err){
		console.log('okay, I got it', err);
	});

});


angular.module('promise', [])

.controller('MainCtrl', function($http){

	$http.get('https://api.github.com/users/davyengone')
		.then(function(res){
			console.log('first pipe');
			return res;
		}).then(function(user){
			console.log('second pipe', user.data);
		 return user.data;
		})
	.catch(function(err){
		console.log('okay, I got it', err);
	});

});

angular.module('promise', [])

.controller('MainCtrl', function($http, $q){

	var userInfoPromise = $http.get('https://api.github.com/users/davyengone');
	var reposPromise = $http.get('https://api.github.com/users/davyengone/repos');
	var starredPromises = $http.get('https://api.github.com/users/davyengone/starred');


	function getUserInformation(){
		$q.all([userInfoPromise, reposPromise, starredPromises])
			.then(function(res){
				var user = res[0].data, repos = res[1].data, starred = res[2].data;
				console.log(user);
		});
	}

	getUserInformation();

});

angular.module('promise', [])

.controller('MainCtrl', function($http, $q){

	var userInfoPromise = $http.get('https://api.github.com/users/davyengone');
	var reposPromise = $http.get('https://api.github.com/users/davyengone/repos');
	var starredPromises = $http.get('https://api.github.com/users/davyengone/starred');


	function getUserInformation(){
		$q.all([userInfoPromise, reposPromise, starredPromises])
			.then(function(res){
				var user = res[0].data, repos = res[1].data, starred = res[2].data;
				console.log(user);
		});
	}

	getUserInformation();

});
