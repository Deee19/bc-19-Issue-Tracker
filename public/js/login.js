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
    firebase.auth().signOut().
    then(function () {
            window.location = "/";
        })
        .catch(function (error) {
            // An error happened.
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

function twitterSign() {
    var provider = new firebase.auth.TwitterAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function (result) {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        window.location = "main";

    })
    .catch(function (error) {
        // Handle Errors here.
        //var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(error);
    });
}