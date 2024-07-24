document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseDiv = document.getElementById("response");
    const questionDiv = document.getElementById("question");
    const questionImage = document.getElementById("questionImage");

    yesButton.addEventListener("click", () => {
        alert('I know you love me!');  // Show the alert
        responseDiv.style.display = "block";  // Show the response div
        questionDiv.style.display = "none";   // Hide the question div
        questionImage.style.display = "none"; // Hide the question image
    });

    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    createHearts();
});

function createHearts() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(heart);
    }
}
