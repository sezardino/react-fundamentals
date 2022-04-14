import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("text");

  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        name="value"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </div>
  );
};
