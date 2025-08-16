document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault()
    let valid = true
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("confirmPassword")

    if(name.value.trim() === ""){
        alert("Name is required")
    }
})
