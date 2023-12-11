'use client'
import { useRef, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './page.scss'
interface CanvasTypes{
    width: number
  }
export function Canvas({width} : CanvasTypes) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Draw canvas here...
  }, []);

  return <canvas ref={canvasRef} className='canvas bg-white'/>;
}