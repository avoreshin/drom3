import React from "react";

import { FormGroup, Input } from "semantic-ui-react";

const InputAddForm = ({ name, placeholder }) => {
  const input_block = {
    width: "80%",
    color: "#db2828",
    padding: "0 1em 0 0",
  };

  return (
    <>
      <FormGroup style={{ justifyContent: "end" }} inline>
        <label style={{ maxWidth: "20%" }}>{name}</label>
        <Input style={input_block} required placeholder={placeholder} />
      </FormGroup>
    </>
  );
};

export default InputAddForm;
