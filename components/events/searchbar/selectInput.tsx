import React from "react";

import { selectInputOption } from "../../../types";

function SelectInput({ options }: { options: selectInputOption[] }) {
  return (
    <>
      {options.map((item, index) => (
        <option className="bg-white" value={item.value} key={index}>
          {item.title}
        </option>
      ))}
    </>
  );
}

export default SelectInput;
