import { Input_container, Label_container, Input_element } from "./styles";
import { InputProps } from "./types";

function Input({ name, type, placeholder, label, id }: InputProps) {
  return (
    <Input_container>
      <Label_container htmlFor={id}>{label}</Label_container>
      <Input_element
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </Input_container>
  );
}

export default Input;
