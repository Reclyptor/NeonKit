import Button from "~/components/Button";
import { useSelect, useValue } from 'react-cosmos/client';

export default () => {
  const [size] = useSelect("Size", { options: ["small", "large"], defaultValue: "small" });
  const [variant] = useSelect("Variant", { options: ["primary", "secondary"], defaultValue: "primary" });
  const [confirmation] = useValue("Confirmation", { defaultValue: false });

  return (
    <Button confirmation={ confirmation } size={ size } variant={ variant } style={{ width: "fit-content" }}>{ variant === "primary" ? "Accept" : "Reject" }</Button>
  );
};