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
  viewIssue.on('value', function (snapshot) {
    var allIssues = snapshot.val();
    var issueInfo = '';
    for (var eachKey in allIssues) {
      var eachItem = allIssues[eachKey];
      issueInfo += '<tr id=' + eachKey + '><td class="dept">' + eachItem.department + '</td><td class="desc">' + eachItem.description + '</td><td class="name">' +
        eachItem.name + '</td><td class="priority">' + eachItem.priority + '</td><td>' + eachItem.status + '</td><td>' + eachItem.assign + '</td><td>' + eachItem.comment + '</td><td> <button type="button" class="btn view btn-primary">View</button> </td></tr>';
    }
    $("#createdIssues").html(issueInfo);
  }, function (error) {
    console.log(error.code);
  });
}

$('tbody').delegate('.view', 'click', function () {
  var anIssueDom = $(this).parents('tr');
  $('#issueName').text(anIssueDom.find('.name').text())
  $('#description').text(anIssueDom.find('.desc').text())
  $('#priority').text(anIssueDom.find('.priority').text())
  $('#department').text(anIssueDom.find('.dept').text())
  $('#issueId').val(anIssueDom.attr("id"));
  $('#issueDetails').modal();
});

function updateIssue() {
  var issueId = $('#issueId').val()
  var status = $('#status').val();
  var assign = $('#assign').val();
  var comment = $('#comments').val();
  database.ref("issues/" + issueId).update({
    status: status,
    assign: assign,
    comment: comment
  }).then(function () {
    alert('Issue updated');
  }).catch(function () {
    alert('Error occured while updating');
  });
}

function newUser() {
  var name = document.getElementById("full-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var department = document.getElementById("department").value;

  //It creates a distinct Admin user
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
  database.ref("newadminusers/" + user.uid).set({
    name: name,
    email: email,
    password: password,
    password: password,
    department: department,
  }).then(function () {
    alert("New Admin User created");
  }).catch(function (error) {
    alert(error.message);
  });
});
}