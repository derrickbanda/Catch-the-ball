document.addEventListener('DOMContentLoaded', function () {
    const ball = document.getElementById('ball');
    const paddle = document.getElementById('paddle');
    
    let ballX = 200;
    let ballY = 200;
    let ballSpeedX = 5;
    let ballSpeedY = 5;

    function updateGame() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Check collision with walls
        if (ballX < 0 || ballX > 380) {
            ballSpeedX = -ballSpeedX;
        }

        if (ballY < 0 || ballY > 380) {
            ballSpeedY = -ballSpeedY;
        }

        // Check collision with paddle
        if (
            ballY >= 10 &&
            ballY <= 30 &&
            ballX >= paddle.offsetLeft &&
            ballX <= paddle.offsetLeft + 100
        ) {
            ballSpeedY = -ballSpeedY;
        }

        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';

        requestAnimationFrame(updateGame);
    }

    document.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        paddle.style.left = mouseX - 50 + 'px';
    });

    updateGame();
});
