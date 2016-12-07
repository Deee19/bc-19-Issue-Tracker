function login() {
    var emailInput = document.getElementById("adminEmail").value;
    var passwordInput = document.getElementById("adminPassword").value;
    //var DepartmentInput = document.getElementById("").value;
    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput)
        .then(function () {
            window.location = "admin";
            console.log("sucessful");
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            alert(errorMessage);
        });

}