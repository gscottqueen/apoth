// select:
// height
// width
// depth
// horizontal sections
// vertical secitons
// number of drawers
// type of hardware
// type of wood
// type of finish
import {FieldSet, Select, Legend} from '../index'
import { DEPTH_RANGE, WIDTH_RANGE, HEIGHT_RANGE } from '../../constants'

const CabinetConfigurator = ({setWidth, setHeight, setDepth}) => {

  const width = document.getElementById("width")
  const height = document.getElementById("height")
  const depth = document.getElementById("depth")

  width && setWidth(width.value);
  height && setHeight(height.value);
  depth && setDepth(depth.value);

  return (
  <>
    <Legend>Select dimensions for your cabinet.</Legend>
    <FieldSet>
      <Select
        id="width"
        labelFor="Width: "
        options={WIDTH_RANGE}
        unit="inches"
        onChange={e => setWidth(e.target.value)}/>
      <Select
        id="height"
        labelFor="Height: "
        options={HEIGHT_RANGE}
        unit="inches"
        onChange={e => setHeight(e.target.value)} />
      <Select
        id="depth"
        labelFor="Depth: "
        options={DEPTH_RANGE}
        unit="inches"
        onChange={e => setDepth(e.target.value)}/>
    </FieldSet>
  </>
  )
}

export default CabinetConfigurator
