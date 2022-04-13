import { FunctionComponent } from "react";

type RequiredTextInputProps = {
  placeholder: string;
  autoComplete: string;
  id: string;
};

const RequiredTextInput = ({ placeholder, autoComplete, id }: RequiredTextInputProps) => {
  return (<>
    <label htmlFor={ id }>First Name</label>
    <input 
      type="text" 
      id={id} 
      autoComplete={autoComplete} 
      placeholder={placeholder}
      required 
    />
  </>)
}

export default RequiredTextInput;