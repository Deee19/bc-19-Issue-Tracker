var emailInput = document.getElementById("Email");
var passwordInput = document.getElementById("PasswordInput");
var user = firebase.auth().currentUser;
if (user) {
  console.log("You've signed in");
}

function register() {

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmpassword = document.getElementById('confirmpassword').value;
  if (email.length === 0) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length <= 4) {
    alert('Please enter a password greater than four characters');
    return;
  }
  if (password !== confirmpassword) {
    alert("Passwords don't match");
    return;
  }

  //Registering a new user
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function () {
          window.location = "main";
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorMessage = error.message;
          alert(errorMessage);
        });

    })
    .catch(function (error) {
      var errorMessage = error.message;
      alert(errorMessage);
    });
}