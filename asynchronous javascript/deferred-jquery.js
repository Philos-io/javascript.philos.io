var $ = require('jquery');

// Let's get rid of callbacks
function getUsers(){
    var users = [],
        defer = $.Deferred();

    for (var i = 0; i < 100; i++) {
      users.push({name: 'user'+i});
    }
    defer.resolve(users);

    return defer.promise;
}
var promise = getUsers();

// What will be the ouput of this function call?
console.log(users);


// Using resolve and reject
function getUsers(){
    var users = [];
    var defer = $.Deferred();

    for (var i = 0; i < 100; i++) {
      users.push({name: 'user'+i});
    }
    if (users.length > 0) {
      defer.resolve(users);
    }else{
      defer.reject(users);
    }

    return defer.promise;
}
// now you have access to an API (then, done, catch, success, error, always)
promise.then(success, error);

function success(response){
  console.log(response.data);

  if (!response.data) {
    throw new Error('no data found');
  }
}

function success(error){

}
// Last small issue: what happens if an error is thrown from the success callback
