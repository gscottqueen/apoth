import { useRef, useEffect } from 'react'
import * as utils from './utils'
import { Canvas } from '../index'
import { DEPTH_RANGE } from '../../constants';

const Carcas = ({width, height, depth}) => {
  const canvasElement = useRef(null)

  useEffect(() => {

    // Set up our canvas
    const canvas = canvasElement.current;
    const ctx = canvas.getContext('2d');

    const color = '#FFFFFF';
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    utils.drawCube( // ctx, x, y, wx, h, wy, color
      ctx,
      window.innerWidth/2,
      window.innerHeight/2 + DEPTH_RANGE.slice(-1)[0],
      Number(width),
      Number(height),
      Number(depth),
      color
    );

  })

  return <Canvas width='1080' height='1080' elementRef={canvasElement} />
}

export default Carcas;
