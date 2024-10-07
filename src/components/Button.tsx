import { ButtonField } from "../type/Type";
import "../scss/Button.scss";

export default function Button({ className, name, onClick, varient }: ButtonField) {
  return (
    <button className={`hover: outline-black ${className} ${varient}`} onClick={onClick}>
      {name}
    </button>
  );
}