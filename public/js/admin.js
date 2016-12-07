var userdetails;
var database = firebase.database();
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    userdetails = user;
    adminViewIssue();
  } else {
    console.log("Not logged in");
  }
});

function adminViewIssue() {

  var viewIssue = database.ref("issues");
  console.log(viewIssue);
  viewIssue.on('value', function (snapshot) {
    var allIssues = snapshot.val();
    console.log(allIssues);
    var issueInfo = '';
    for (var eachKey in allIssues) {
      var eachItem = allIssues[eachKey];
      issueInfo += '<tr><td>' + eachItem.department + '</td><td>' + eachItem.description + '</td><td>' +
        eachItem.name + '</td><td>' + eachItem.priority + '</td></tr>';
    }
    $("#createdIssues").html(issueInfo);
  }, function (error) {
    console.log(error.code);
  });
}