import React, { useEffect, useRef } from "react";

function PongGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const paddleHeight = 80;
    const paddleWidth = 10;
    const ballRadius = 5;
    const canvasWidth = canvas.width;  // Use canvas dimensions for scaling
    const canvasHeight = canvas.height;

    let paddleY = canvasHeight / 2 - paddleHeight / 2;  // Center paddle
    let computerPaddleY = paddleY;
    let ball = { x: canvasWidth / 2, y: canvasHeight / 2, vx: 3, vy: 3 };

    // Move the paddle in response to mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseY = e.clientY - rect.top;
      paddleY = Math.max(Math.min(mouseY - paddleHeight / 2, canvasHeight - paddleHeight), 0);
    };

    // Reset the ball to the center with a random direction
    const resetBall = () => {
      ball = {
        x: canvasWidth / 2,
        y: canvasHeight / 2,
        vx: Math.random() > 0.5 ? 3 : -3,
        vy: Math.random() > 0.5 ? 3 : -3,
      };
    };

    // Main game loop
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "black";
      ctx.fillRect(10, paddleY, paddleWidth, paddleHeight);
      ctx.fillRect(canvasWidth - paddleWidth - 10, computerPaddleY, paddleWidth, paddleHeight);

      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();

      ball.x += ball.vx;
      ball.y += ball.vy;

      // Ball collision with top and bottom walls
      if (ball.y - ballRadius < 0 || ball.y + ballRadius > canvasHeight) {
        ball.vy = -ball.vy;
      }

      // Ball collision with paddles
      if ((ball.x - ballRadius < 20 && ball.y > paddleY && ball.y < paddleY + paddleHeight) ||
          (ball.x + ballRadius > canvasWidth - 20 && ball.y > computerPaddleY && ball.y < computerPaddleY + paddleHeight)) {
        ball.vx = -ball.vx;
      }

      // Reset ball if it passes the paddles
      if (ball.x - ballRadius < 0 || ball.x + ballRadius > canvasWidth) {
        resetBall();
      }

      // Simple AI to move the computer paddle
      computerPaddleY += ball.y < computerPaddleY + paddleHeight / 2 ? -3 : 3;

      requestAnimationFrame(gameLoop);
    };

    gameLoop();
    canvas.addEventListener("mousemove", handleMouseMove);

  
    return () => canvas.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <canvas ref={canvasRef} width={400} height={300} style={{ background: "white", border: "1px solid black" }}></canvas>
    </div>
  );
}

export default PongGame;
