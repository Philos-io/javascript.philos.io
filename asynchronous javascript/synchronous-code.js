function getUsers(){
  var users = [];
  for (var i = 0; i < 100000; i++) {
    users.push({name: 'user'+i});
  }
  return users;
}

var users = getUsers();
