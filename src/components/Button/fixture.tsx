import Button from "~/components/Button";
import { useSelect } from 'react-cosmos/client';

export default () => {
  const [size] = useSelect("Size", { options: ["small", "large"], defaultValue: "small" });
  const [variant] = useSelect("Variant", { options: ["primary", "secondary"], defaultValue: "primary" });

  return (
    <Button size={ size } variant={ variant } style={{ width: "80px" }}>{ variant === "primary" ? "Accept" : "Reject" }</Button>
  );
};