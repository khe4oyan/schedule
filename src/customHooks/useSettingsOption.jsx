import { useState } from "react";

export default function useSettingsOption(optionData) {
  const { defaultValue, key } = optionData;
  
  if (defaultValue === null) throw new Error("Add defaultValue");

  const keyFormat = `${key}_setting`;
  const [option, setOption] = useState(JSON.parse(localStorage.getItem(keyFormat)) ?? defaultValue);

  const toggleOption = () => {
    setOption((prev) => {
      const newValue = !prev;
      localStorage.setItem(keyFormat, JSON.stringify(newValue));
      return newValue;
    });
  }

  return [option, toggleOption];
}