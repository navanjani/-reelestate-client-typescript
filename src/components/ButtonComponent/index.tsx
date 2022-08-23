import { Button } from "react-bootstrap";

interface IButtonComponent {
  label: string;
}

export default function ButtonComponent({ label }: IButtonComponent) {
  return <Button>{label}</Button>;
}
