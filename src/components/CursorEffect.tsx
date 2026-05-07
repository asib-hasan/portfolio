import { useEffect, useRef } from "react";

const CursorEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouse = { x: -100, y: -100 };

    // Pure Technology / Binary data stream effect
    const chars = ["0", "1"];

    let trails: { x: number; y: number; age: number; vx: number; vy: number; char: string; size: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let lastSpawn = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const now = Date.now();
      // Throttle spawn rate slightly so it doesn't get too cluttered
      if (now - lastSpawn > 16) {
        trails.push({
          x: e.clientX + (Math.random() - 0.5) * 15,
          y: e.clientY + (Math.random() - 0.5) * 15,
          age: 0,
          vx: (Math.random() - 0.5) * 0.5,
          vy: Math.random() * 0.5 + 0.2, // Float slightly downwards
          char: chars[Math.floor(Math.random() * chars.length)],
          size: Math.random() * 10 + 10, // Font size between 10 and 20
        });
        lastSpawn = now;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const maxAge = 60;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = trails.length - 1; i >= 0; i--) {
        const t = trails[i];
        t.age++;
        t.x += t.vx;
        t.y += t.vy;

        if (t.age > maxAge) {
          trails.splice(i, 1);
          continue;
        }

        const life = 1 - t.age / maxAge;
        // Fade out
        const alpha = life * 0.7;

        ctx.font = `bold ${t.size}px monospace`;
        // Use a tech blue color
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.fillText(t.char, t.x, t.y);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none hidden lg:block"
    />
  );
};

export default CursorEffect;
