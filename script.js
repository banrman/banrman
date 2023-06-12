function checkPassword() {
    var password = document.getElementById("password").value;

    if (password === "test") {
        window.location.href = 'content.html';
    } else {
        alert("Incorrect password. Access denied!");
    }
    
}

        // Simulating a delay for demonstration purposes
        setTimeout(function() {
            // Remove the loading screen once the game is loaded
            document.getElementById('loading-screen').style.display = 'none';
        }, 3000);