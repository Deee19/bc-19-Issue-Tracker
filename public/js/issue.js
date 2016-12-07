var userdetails;
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    userdetails = user;
    // console.log(user);
  } else {
    console.log("Not logged in");
  }
});
var database = firebase.database();

function newissue() {
  var name = document.getElementById("issue-name").value;
  var description = document.getElementById("issue-description").value;
  var priority = document.getElementById("issue-priority").value;
  var department = document.getElementById("issue-department").value;
  database.ref("issues").push({
    name: name,
    description: description,
    priority: priority,
    department: department,
    user: userdetails.email
  }).then(function () {
    alert("Issue successfully created");
  }).catch(function (error) {
    alert(error.message);
  });
}

function viewissue() {
  var userId = firebase.auth().currentUser.user;
  var viewIssue = database.ref("issues").orderByChild("user");
  console.log(viewIssue);
  viewIssue.on('value', function(snapshot) {
    console.log(snapshot.val());
  }, function (error) {
    console.log(error.code);
  });
}