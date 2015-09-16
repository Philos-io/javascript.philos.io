// JavaScript Native Promise API
function getUsers(){
    return new Promise(function(resolve, reject){
        var users = [];

        for (var i = 0; i < 100; i++) {
          users.push({name: 'user'+i});
        }
        if (users.length > 0) {
          resolve(users);
        }else{
          reject(users);
        }
    });

}
// now you have access to an API (then, done, catch, success, error, always)
promise.then(success, error);

function getData(){
	var defer = Promise.defer();

	setTimeout(function(){
		defer.resolve(["davyengone"]);
	});

	return defer.promise;
}


var result = getData();

console.log(result);

result.then(function(data){
	console.log(data)
});
function getData(){
	var defer = Promise.defer();

	setTimeout(function(){
		defer.resolve(["davyengone"]);
	});

	return defer.promise;
}






var result = getData();

console.log(result);

result.then(function(data){
	console.log(data);
});
