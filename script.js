// script.js

//const text = document.querySelector("question");
//const yes = document.querySelector("yes");
//const no = document.querySelector("no");
let count = 2;

//load gifs faster
gifs.forEach(gifSrc => {
    const img = new Image();
    img.src = gifSrc;
});

//Function to handle button click events
function selectOption(option) {
    //Check which option was clicked
    if (option === 'no') {
        if (count === 2) {
            count++;
            gif.src = "visual/sus.gif";
            question.innerHTML = "You meant to click 'Yes', right?";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            yesButton.style.height = "65%";
            yesButton.style.width = "60%";
            noButton.style.width = "30%";
        } else if (count === 3){
            count++;
            gif.src = "visual/nerve.gif";
            gif.style.width = "300px";
            question.innerHTML = "Y-you sure? O.O";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            yesButton.style.height = "70%";
            yesButton.style.width = "70%";
            noButton.style.width = "20%";
        } else if (count === 4){
            count++;
            gif.src = "visual/pool.gif";
            question.innerHTML = "Don't be meaannn... TwT";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            yesButton.style.height = "75%";
            yesButton.style.width = "75%";
            noButton.style.width = "15%";
            noButton.style.fontSize = "30px";
            noButton.style.transform = "translateY(205%)";
        } else if (count === 5) {
            gif.src = "visual/kyo.gif";
            question.innerHTML = "Me estás tomando el pelo? 🤨 Again!";
            question.style.transform = "translateY(35%)";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            yesButton.style.height = "90%";
            yesButton.style.width = "96%";
            noButton.style.width = "15%";
            noButton.style.transform = "translateY(250%)";
            noButton.fontSize = "30px";

            noButton.addEventListener('mouseenter', () => {
                noButton.style.position = 'absolute';
                noButton.style.transition = 'left 0.3s ease, top 0.3s ease';
                const btnWidth = noButton.offsetWidth;
                const btnHeight = noButton.offsetHeight;
                const maxX = window.innerWidth - btnWidth;
                const maxY = window.innerHeight - btnHeight;
                const randomX = Math.floor(Math.random() * maxX);
                const randomY = Math.floor(Math.random() * maxY);
                noButton.style.left = `${randomX}px`;
                noButton.style.top = `${randomY}px`;
            });

            const timer = setInterval(() => {
                count++;
                if (count >= 17) {
                    window.open("page2.html");
                    clearInterval(timer);
                } else if (yesButton.style.display === "none") {
                    clearInterval(timer);
                }
            }, 1000); //1000 milliseconds = 1 second
        }
    } else if (option === 'yes') {
        if (count === 2){
            gif.src = "visual/love.gif";
            question.innerHTML = "Yay! I knew it! ❤️ ¡Te amo mucho mi pweshiosha!";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            noButton.style.display = "none";
            yesButton.style.display = "none";
        } else if (count === 3){
            gif.src = "visual/nuzzle.gif";
            question.innerHTML = "Let's go! 💕 ¡Espérame! ¡Estoy comprando mis boletos para ir a ti for cuddles, love!";
            question.style.transform = "translateY(35%)";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            noButton.style.display = "none";
            yesButton.style.display = "none";
        } else if (count === 4){
            gif.src = "visual/nuzzle.gif";
            gif.style.width = "300px";
            question.innerHTML = "I am so happy right now! 😘 ¡Me dejaste con ganas de darte más besos, mi shielo!";
            question.style.transform = "translateY(30%)";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            noButton.style.display = "none";
            yesButton.style.display = "none";
        } else if (count === 5){
            gif.src = "visual/travel.gif";
            question.innerHTML = "Thank you for making my day! 💖 ¡Ahora es mi turno de hacer que nuestro día sea inolvidable, cariño!";
            question.style.transform = "translateY(30%)";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            noButton.style.display = "none";
            yesButton.style.display = "none";
        } else if (count >= 6){
            gif.src = "visual/content.gif";
            gif.style.height = "250px";
            question.innerHTML = "ai loouuuuveee uuu!!! 💘 ¡Te amo con todo mi corazón, mi vida!";
            question.style.transform = "translateY(30%)";
            var yesButton = document.getElementById('yes-button');
            var noButton = document.getElementById('no-button');
            noButton.style.display = "none";
            yesButton.style.display = "none";
        }
    }
}