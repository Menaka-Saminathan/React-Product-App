import { ButtonField } from "../type/Type";
import "../scss/Button.scss";

function Button({ className, name, onClick, varient }: ButtonField) {
  return (
    <button className={`Hover: outline-black ${className} ${varient}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
