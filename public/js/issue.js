var userdetails;
var database = firebase.database();
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    userdetails = user;
    viewissue();
  } else {
    console.log("Not logged in");
  }
});



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
  var userId = firebase.auth().currentUser.email;
  //console.log(userId)
  var viewIssue = database.ref("issues").orderByChild("user").equalTo(userId);
  //console.log(viewIssue);
  viewIssue.on('value', function (snapshot) {
    var allIssues = snapshot.val();

    var issueInfo = '';
    for (var eachKey in allIssues) {
      if (allIssues[eachKey].user === userdetails.email) {
        var eachItem = allIssues[eachKey];
        issueInfo += '<tr><td>' + eachItem.department + '</td><td>' + eachItem.description + '</td><td>' +
          eachItem.name + '</td><td>' + eachItem.priority + '</td></tr>';
      }
    }
    $("#createdIssues").html(issueInfo);
  }, function (error) {
    console.log(error.code);
  });
}