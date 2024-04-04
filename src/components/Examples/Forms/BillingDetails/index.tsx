import { useRef, useState } from "react";
import Button from "../../../Button";
import Typography from "../../../Typography";
import InputText from "../../../Input/Text";

const FormBillingDetails = () => {
  console.log("rendering form billing details");
  const [name, setName] = useState("");

  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);

  console.log({ phoneRef });

  const handleSubmit = () => {
    const phone = phoneRef.current?.value;
    console.log({ phone, lastName: lastNameRef.current?.value });
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputText label="Last name" id="x" ref={lastNameRef} />
        <input type="email" ref={emailRef} />
        <input type="tel" ref={phoneRef} />

        <Button variant="link" onClick={handleSubmit} type="button">
          <Typography>Submit</Typography>
        </Button>
      </form>
    </div>
  );
};

export default FormBillingDetails;
