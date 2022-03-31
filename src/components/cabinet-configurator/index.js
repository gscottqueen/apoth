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

import {FieldSet, Select} from '../index'
import { DEPTH_RANGE, WIDTH_RANGE, HEIGHT_RANGE } from '../../constants'

const CabinetConfigurator = () => {
  return (
  <FieldSet>
    <Select
      id="depth"
      labelFor="Depth: "
      options={DEPTH_RANGE}
      unit="inches"/>
    <Select
      id="width"
      labelFor="Width: "
      options={WIDTH_RANGE}
      unit="inches"/>
    <Select
      id="height"
      labelFor="Height: "
      options={HEIGHT_RANGE}
      unit="inches"/>
  </FieldSet>
  )
}

export default CabinetConfigurator
