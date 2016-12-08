function login() {
    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
        .then(function () {
            window.location = "main";
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            alert(errorMessage);
        });

}

function logOut() {
    firebase.auth().signOut().then(function () {
        window.location = "index";
    }, function (error) {
        // An error happened.
        var errorMessage = error.message;
        alert(errorMessage);
    });
}