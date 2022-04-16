import { FunctionComponent } from "react";
import { HiExclamationCircle } from "react-icons/hi"

type RequiredTextInputProps = {
  required: boolean;
  label: string | null;
  placeholder: string;
  autoComplete: string;
  id: string;
};

const TextInput = ({ required, label, placeholder, autoComplete, id }: RequiredTextInputProps) => {
  return (<>
    { label && <label htmlFor={ id }> { label } </label> }
    { required && <HiExclamationCircle color="red" /> }
    <input 
      type="text" 
      id={id} 
      autoComplete={autoComplete} 
      placeholder={placeholder}
      required={required}
    />
  </>)
}

export default TextInput;