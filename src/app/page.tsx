"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/assets/video/MVI_9910.mp4";

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [labelPos, setLabelPos] = useState({ x: -9999, y: -9999 });
  const [isPlaying, setIsPlaying] = useState(false);

  // Draw canvas overlay — creates a semi-transparent grain/texture effect
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // Dark overlay with slight gradient
    const gradient = ctx.createRadialGradient(
      mouseRef.current.x,
      mouseRef.current.y,
      0,
      mouseRef.current.x,
      mouseRef.current.y,
      400
    );
    gradient.addColorStop(0, "rgba(0, 0, 0, 0.25)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0.55)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    animationRef.current = requestAnimationFrame(drawCanvas);
  }, []);

  // Resize canvas to match window
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Start animation loop
    animationRef.current = requestAnimationFrame(drawCanvas);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [drawCanvas]);

  // Track mouse position for the floating label and canvas effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setLabelPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Try autoplay video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay blocked — user will need to click
    });
  }, []);

  // Handle click to play music / unmute
  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      video.muted = false;
      video.play().catch(() => {
        // Fallback: keep muted
        video.muted = true;
        video.play();
      });
      setIsPlaying(true);
    } else {
      video.muted = true;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black text-white"
      onClick={handleClick}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Interactive canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-70"
      />

      {/* Content layer */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-10 py-12 sm:px-16">
        {/* Top section — title block */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
            Research Proposal
          </p>
          <h1 className="mt-4 font-serif text-4xl uppercase tracking-[0.12em] sm:text-6xl">
            Instrumental Morphology
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-orange-400">
            Maria Myers &amp; Khalid Alharbi
          </p>
        </div>

        {/* Bottom section — description + enter link */}
        <div className="flex items-center justify-between">
          <p className="max-w-md text-sm text-white/80">
            Instrumental Morphology is a GSEF-funded research project exploring
            musical instruments built from living systems, sensors, and feedback
            loops. It investigates how sound emerges from ongoing interactions
            between organisms, environments, and machines.
          </p>
          <Link
            href="/home"
            className="text-xs uppercase tracking-[0.4em] text-white/70 transition hover:text-white"
          >
            Enter
          </Link>
        </div>
      </div>

      {/* Mouse-following label */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-20 text-xs uppercase tracking-[0.2em] text-white/70"
        style={{
          transform: `translate3d(${labelPos.x}px, ${labelPos.y}px, 0)`,
        }}
      >
        {isPlaying ? "(click to mute)" : "(click to play music)"}
      </div>
    </div>
  );
}
