import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabel({ label, clickFunction }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox />}
        label={label}
        onClick={clickFunction}
      />
    </FormGroup>
  );
}
