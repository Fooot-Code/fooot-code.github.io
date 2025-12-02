function randomBackgroundColor() {
    let randomRGB = [Math.floor(Math.random() * 256),
                     Math.floor(Math.random() * 256),
                     Math.floor(Math.random() * 256)
    ];
    document.body.style.backgroundColor = `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`;
}

function getFortune() {
    const fortunes = [
        "All the world may not love a lover but they will be watching him.",
        "Character is who you are when no one is watching.",
        "Pray for what you want, but work for the things you need.",
        "Share your joys and sorrows with your family.",
        "Sometimes the object of the journey is not the end, but the journey itself.",
        "The essential conditions of everything you do must be choice, love, and passion.",
        "Good health will be yours for a long time.",
        "You are an exciting and inspiring person.",
        "Struggle as hard as you can for whatever you believe in.",
        "An angry man opens his mouth and shuts up his eyes.",
        "You will be a contest winner.",
        "You will be deeply loved.",
        "You will be delighted by an unexpected gift.",
        "You will be drawn to the glamour of the stage.",
        "You will be fortunate in everything you put your hands to.",
        "You will be happy in life.",
        "You will be honoured.",
        "You will be in the best position.",
        "You will be inspired to new heights of accomplishment.",
        "You will be showered with good luck.",
        "You will be socially successful.",
        "You will be successful in any gathering.",
        "You will be successful in competitive sports.",
        "You will be the centre of a special group's attention.",
        "You will be the guest of a gracious host.",
        "You will benefit immediately if you co-operate for now.",
        "You will dance to a different beat next summer.",
        "You will discover a new area of interest.",
        "You will discover your hidden talents.",
        "You will do well when you expand your horizons.",
        "You will find excitement in your working life.",
        "You will be 67 years old in the future.",
    ];
    
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneBox = document.getElementById("fortune");
    fortuneBox.textContent = fortunes[randomIndex];
}