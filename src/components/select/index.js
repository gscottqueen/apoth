import { Label } from '../index'

const Select = ({labelFor, id, options, multiple, name, unit}) => {
  const unitSymbol = unit === "inches" ? "in" : ""

  return (
  <>
    <Label labelFor={id}>{labelFor}</Label>
    <select multiple={multiple || ''} id={id} name={name}>
    { options.map((option, i) => {
        return (
          <option
            key={`${option}-${i}`}
            value={option}>{`${option} ${unitSymbol}`}</option>
          )
        }
      )
    }
    </select>
  </>
  )
}

export default Select
