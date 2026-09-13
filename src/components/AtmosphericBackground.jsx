import React, { useEffect, useRef } from 'react';

export function AtmosphericBackground({ focusMode = false }) {
  if (focusMode) return null;

  const canvasRef = useRef(null);

  // Interactive Canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Code tokens & particle nodes configuration
    const CODE_TOKENS = [
      '</>', '{ }', '=>', 'SELECT', 'SQL', 'ETL', 'async',
      '0x4B', 'fn()', 'await', 'COUNT(*)', 'BI.core', 'NULL',
      'import', 'Promise', 'def', 'ORDER BY', 'GROUP BY', 'spark.df',
      'kafka.send', 'parquet', 'O(log N)', 'WHERE', 'JOIN',
      'Kafka', 'ClickHouse', 'AWS.S3', 'dbt.run()', '0x7F',
      'pandas', 'FastAPI', 'pipeline()', 'status: 200', 'TRUE', 'yield'
    ];

    // Particles across the full canvas
    const particleCount = Math.min(90, Math.floor((width * height) / 15000));
    const particles = [];
    const mouse = { x: -1000, y: -1000, active: false };

    // Colors matching theme
    const colors = ['#10b981', '#06b6d4', '#34d399', '#38bdf8', '#a7f3d0'];

    for (let i = 0; i < particleCount; i++) {
      const isGlyph = i % 2 === 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 0.8,
        isGlyph,
        glyph: isGlyph ? CODE_TOKENS[i % CODE_TOKENS.length] : null,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.28 + 0.12,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handlePointerMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const connectionDist = 120;
      const mouseDist = 160;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particle
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap around boundaries smoothly
        if (p1.x < -40) p1.x = width + 40;
        if (p1.x > width + 40) p1.x = -40;
        if (p1.y < -40) p1.y = height + 40;
        if (p1.y > height + 40) p1.y = -40;

        let nearMouse = false;
        let mouseForce = 0;

        if (mouse.active) {
          const dx = mouse.x - p1.x;
          const dy = mouse.y - p1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseDist) {
            nearMouse = true;
            mouseForce = 1 - dist / mouseDist;
            const force = mouseForce * 0.035;
            p1.x += dx * force;
            p1.y += dy * force;

            // Draw line to cursor
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${mouseForce * 0.28})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        let currentAlpha = nearMouse
          ? Math.min(0.85, p1.baseAlpha + mouseForce * 0.5)
          : p1.baseAlpha + Math.sin(time * 2 + p1.pulseOffset) * 0.08;

        if (p1.isGlyph) {
          ctx.font = `${nearMouse ? 'bold 12px' : '10px'} 'JetBrains Mono', monospace`;
          ctx.fillStyle = p1.color;
          ctx.globalAlpha = Math.max(0.01, currentAlpha);
          if (nearMouse) {
            ctx.shadowColor = p1.color;
            ctx.shadowBlur = 8;
          }
          ctx.fillText(p1.glyph, p1.x, p1.y);
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        } else {
          ctx.beginPath();
          ctx.arc(p1.x, p1.y, p1.radius * (nearMouse ? 1.5 : 1), 0, Math.PI * 2);
          ctx.fillStyle = p1.color;
          ctx.globalAlpha = Math.max(0.01, currentAlpha);
          if (nearMouse) {
            ctx.shadowColor = p1.color;
            ctx.shadowBlur = 8;
          }
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1;
        }

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * 0.07;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="atmospheric-background-layer" aria-hidden="false">
      {/* Aurora Ambient Glow Orbs */}
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />

      {/* Interactive Code Glyphs & Constellation Canvas */}
      <canvas ref={canvasRef} className="background-constellation-canvas" />

      {/* Matrix Vertical Binary Streams on far side gutters */}
      <div className="side-binary-stream left-binary-stream mono">
        01001010 01100001 01101001 01110011 01101000 01110010 01100001 01101101
      </div>
      <div className="side-binary-stream right-binary-stream mono">
        01010000 01001101 00100000 01000010 01001001 00100000 01000100 01000001
      </div>
    </div>
  );
}
