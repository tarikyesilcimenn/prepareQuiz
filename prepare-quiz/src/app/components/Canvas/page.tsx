'use client'
import { useRef, useEffect } from 'react';
import './page.scss'
import DragFile from '../Draggable/DragFile';
interface CanvasTypes{
    width: number
  }
export function Canvas({width} : CanvasTypes) {
  const canvasRef = useRef(null);

  useEffect(() => {
    
  }, []);

  return <div className='canvas bg-white'>
    <DragFile/>
  </div>;
}