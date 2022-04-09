import { useState } from 'react';
import { CabinetConfigurator, Carcas } from './components'
import { scaleMeasurement } from './components/utils/functions'

function App() {

  const [width, setWidth] = useState(8)
  const [height, setHeight] = useState(8)
  const [depth, setDepth] = useState(8)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Apoth</h1>
      </header>
      <main id="main-content">
        <form>
          <CabinetConfigurator
            width={width}
            height={height}
            depth={depth}
            setWidth={setWidth}
            setHeight={setHeight}
            setDepth={setDepth}/>
        </form>
        <Carcas
          width={scaleMeasurement(width)}
          height={scaleMeasurement(height)}
          depth={scaleMeasurement(depth)}/>
      </main>
    </div>
  );
}

export default App;
