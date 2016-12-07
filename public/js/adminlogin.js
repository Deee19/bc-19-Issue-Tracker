function adminlogin() {
  var emailInput = document.getElementById("adminEmail").value;
  var passwordInput = document.getElementById("adminPassword").value;

  firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
    .then(function () {
      window.location = "adminmain";
      console.log("sucessful");
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorMessage = error.message;
      alert(errorMessage);
    });

}