function login() {
    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
        .then(function () {
            window.location="main";
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            alert(errorMessage);
        });
    var user = firebase.auth().currentUser;
    console.log(user, 'user')
}