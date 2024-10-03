import { ButtonType } from "../type/Type"
import '../scss/Button.scss'

function Button({className, name, onClick, varient}: ButtonType ) {
  return (
    <button className={`${className}, ${varient}`} onClick={onClick}>{name}</button>
  )
}

export default Button