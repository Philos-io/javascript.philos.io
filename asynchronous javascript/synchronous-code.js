function getUsers(){
  var users = [];
  for (var i = 0; i < 1000; i++) {
    users.push({name: 'user'+i});
  }
  return users;
}

var users = getUsers();
// What will be the output of this call?
console.log(users);
