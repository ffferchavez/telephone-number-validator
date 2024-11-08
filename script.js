document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Check if input is empty
    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    // Regular expression for validating US phone numbers
    const validPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)?\d{3}([\s-]?)?\d{4}$/;

    // Test the input against the regex
    if (validPhoneRegex.test(input)) {
        resultsDiv.innerHTML = `Valid US number: ${input}`;
    } else {
        resultsDiv.innerHTML = `Invalid US number: ${input}`;
    }
});

document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").innerHTML = "";
});