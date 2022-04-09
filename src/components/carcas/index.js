// Set up our canvas
const canvas = document.createElement('canvas');
canvas.width = 1080;
canvas.height = 1080;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Pick out the form elements for easy access later
const x1 = document.querySelector('#x1');
const x2 = document.querySelector('#x2');
const y = document.querySelector('#y');
const color = '#FFFFFF';

// Colour adjustment function
// Nicked from http://stackoverflow.com/questions/5560248
const shadeColor = (color, percent) => {
  const num = parseInt(color, 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = (num >> 8 && 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

// Draw a cube to the specified specs
function drawCube(x, y, wx, h, wy, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - wx, y - wx * 0.5);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, -10);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + wy, y - wy * 0.5);
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.lineTo(x, y - h * 1);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 10);
    ctx.strokeStyle = shadeColor(color, 50);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x - wx, y - h - wx * 0.5);
    ctx.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
    ctx.lineTo(x + wy, y - h - wy * 0.5);
    ctx.closePath();
    ctx.fillStyle = shadeColor(color, 20);
    ctx.strokeStyle = shadeColor(color, 60);
    ctx.stroke();
    ctx.fill();
  }

const Carcas = ({width, height, depth}) => {
  console.log(width, height, depth)
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the cube
  return drawCube(
    window.innerWidth/2,
    window.innerHeight/2 + y/2,
    Number(width && width),
    Number(height && height),
    Number(depth && depth),
    color
  );
}

  export default Carcas;
