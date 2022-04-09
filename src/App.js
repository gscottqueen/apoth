import { useState } from 'react';
import { CabinetConfigurator, Carcas } from './components'
import { scaleMeasurement } from './components/utils/functions'

import './app.css'

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
      <section className="configuration-view">
        <aside>
          <form className="configuration-form">
            <CabinetConfigurator
              width={width}
              height={height}
              depth={depth}
              setWidth={setWidth}
              setHeight={setHeight}
              setDepth={setDepth}/>
          </form>
        </aside>
        <Carcas
          width={scaleMeasurement(width)}
          height={scaleMeasurement(height)}
          depth={scaleMeasurement(depth)}/>
      </section>
      </main>
    </div>
  );
}

export default App;
