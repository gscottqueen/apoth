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

const CabinetConfigurator = ({ width, height, depth, setWidth, setHeight, setDepth}) => {

  return (
  <>
    <Legend>Select dimensions for your cabinet.</Legend>
    <FieldSet>
      <Select
        id="width"
        labelFor="Width: "
        options={WIDTH_RANGE}
        defaultOption={width}
        unit="inches"
        onChange={e => setWidth(e.target.value)}/>
      <Select
        id="height"
        labelFor="Height: "
        options={HEIGHT_RANGE}
        defaultOption={height}
        unit="inches"
        onChange={e => setHeight(e.target.value)} />
      <Select
        id="depth"
        labelFor="Depth: "
        options={DEPTH_RANGE}
        defaultOption={depth}
        unit="inches"
        onChange={e => setDepth(e.target.value)}/>
    </FieldSet>
  </>
  )
}

export default CabinetConfigurator
