import { Label } from '../index'

const Select = ({ labelFor, id, options, defaultOption, multiple, name, unit, onChange }) => {
  const unitSymbol = unit === "inches" ? "in" : ""

  return (
  <>
    <Label labelFor={id}>{labelFor}</Label>
    <select
      multiple={multiple || ''}
      id={id}
      name={name}
      onChange={onChange}
      value={defaultOption}>
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
