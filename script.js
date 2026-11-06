let buttons = document.getElementsByClassName('sections');

if (buttons.length > 0) {
    for (let button of buttons) {
        button.addEventListener("click", () => {
            button.classList.add("animate-zoom")
            
            button.addEventListener("animationend", () => {
                button.classList.remove("animate-zoom")
                window.location.href = button.textContent.trim().toLowerCase() + ".html";
            });
            
        }, { once: true });
    }
}
