// Function to check the answer
function checkAnswer() {
    // The correct answer is "4"
    let correctAnswer = "4";

    // Get the selected radio button's value
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Ensure an option is selected before proceeding
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
