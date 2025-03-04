//your JS code here. If required.
// Function to check for saved credentials in localStorage
function checkSavedCredentials() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        document.getElementById("existing").style.display = "block"; // Show the existing user button
    }
}

// Function to handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("checkbox").checked;

    alert(`Logged in as ${username}`);

    if (rememberMe) {
        // Store credentials in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove credentials from localStorage if they exist
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});

// Function to handle existing user login
document.getElementById("existing").addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    alert(`Logged in as ${savedUsername}`);
});

// Check for saved credentials on page load
checkSavedCredentials();