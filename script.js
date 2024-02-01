const username = document.querySelector("#username");
const password = document.querySelector("#password");
const subButton = document.querySelector("#submitButton")

subButton.addEventListener("click", function(){
    let usernameEntered = username.value;
    let passwordEntered = password.value;
    console.log(passwordEntered);
    console.log(usernameEntered);
    if (usernameEntered === "" || passwordEntered === "")
        subButton.value = "Try Again!"

    window.location.href = "account.html";

})


console.log(username);
console.log(password);
console.log(subButton);
