
const canvas = document.getElementById('cmatrix');
const ctx = canvas.getContext('2d');

// Make the canvas full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// The matrix characters (Katakana, Latin alphabet, numbers)
const matrixChars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabet = matrixChars.split("");

const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);

// An array of drops - one per column, initialized to Y coordinate of 1
let rainDrops = [];
function initDrops() {
    columns = Math.floor(canvas.width / fontSize);
    rainDrops = [];
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
}
initDrops();

// Draw the animation
function draw() {
    // Context trailing fade: draw a semi-transparent black rectangle over the entire canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set font styles
    ctx.fillStyle = 'rgba(0, 255, 255, 0.2)'; // Iconic Matrix Green
    ctx.font = fontSize + 'px monospace';

    // Loop over columns
    for (let i = 0; i < rainDrops.length; i++) {
        // Pick a random character
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        // x coordinate = column index * font size, y coordinate = drop value * font size
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Draw the character
        ctx.fillText(text, x, y);

        // Reset drop to the top with a random delay if it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }

        // Move drop down the screen
        rainDrops[i]++;
    }
}

// Loop the animation at ~30 frames per second
const animationInterval = setInterval(draw, 30);

// Adjust canvas dimension gracefully on window resize
window.addEventListener('resize', () => {
    resizeCanvas();
    initDrops();
});