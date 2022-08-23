import { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";

interface ISelectOption {
  value: string;
  label: string;
}

interface ISelectComponent {
  options: ISelectOption[];
  value: string;
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectComponent({
  options,
  value,
  onChangeHandler,
}: ISelectComponent) {
  return (
    <Form.Select
      aria-label="Default select example"
      value={value}
      onChange={onChangeHandler}
    >
      {options.map((option: ISelectOption) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Form.Select>
  );
}
