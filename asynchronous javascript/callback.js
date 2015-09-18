// Let's make this code async by default

function getUsers(callback){
  if(callback) callback();
}

var users = getUsers(function(){
  var users = [];
  for (var i = 0; i < 100; i++) {
    users.push({name: 'user'+i});
		console.log(i);
  }
  return users;
});

// What will be the ouput of this function call?
console.log(users);


// No callback but we use setTimeout to simulate a slow process
function getData(){
  var data = [], i = 0;
  setTimeout(function(){
    while (i < 100) {
        data.push(i++);
    }
  }, 300)
}

var result = getData();
console.log(result);


// Same issue in both cases, the result is undefined

// How could we resolve this issue?
function getData(callback){
  var data = [], i = 0;
	// Simulation a long running process with setTimeout
  setTimeout(function(){
    while (i < 100) {
        data.push(i++);
    }

		callback(data);

  }, 300);

	return data;
}

getData(function(data){
	console.log(data);
});
