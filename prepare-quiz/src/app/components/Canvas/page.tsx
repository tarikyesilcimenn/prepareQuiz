'use client'
import { useRef, useEffect } from 'react';
interface CanvasTypes{
    width: number,
    height: number
  }
export function Canvas({width, height} : CanvasTypes) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Draw canvas here...
  }, []);

  return <canvas ref={canvasRef} width={width} height={height} className='bg-white'/>;
}