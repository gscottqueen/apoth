import { useState } from 'react';
import {CabinetConfigurator} from './components'

function App() {

  const [width, setWidth] = useState(48)
  const [height, setHeight] = useState(36)

  function scaleMeasurement(value) {
    return value * 96 / 6
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apoth</h1>
      <form>
        <CabinetConfigurator setWidth={setWidth} setHeight={setHeight} />
      </form>
      <div
        className='box'
        width={width + 'px'}
        height={height + 'px'}
        style={{
          border: "1px solid black",
          height: scaleMeasurement(height) + 'px',
          width: scaleMeasurement(width) + 'px'
        }}></div>
      </header>
    </div>
  );
}

export default App;
