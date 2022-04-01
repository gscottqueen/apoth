import { useState } from 'react';
import {CabinetConfigurator, Carcas} from './components'

function App() {

  const [width, setWidth] = useState(48)
  const [height, setHeight] = useState(36)
  const [depth, setDepth] = useState(20)

  // pixels to inches at 1/6 scale
  function scaleMeasurement(value) {
    return value * 96 / 6
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apoth</h1>
      <form>
        <CabinetConfigurator
          setWidth={setWidth}
          setHeight={setHeight}
          setDepth={setDepth}/>
      </form>
      <Carcas
        width={scaleMeasurement(width)}
        height={scaleMeasurement(height)}
        depth={scaleMeasurement(depth)}/>
      </header>
    </div>
  );
}

export default App;
