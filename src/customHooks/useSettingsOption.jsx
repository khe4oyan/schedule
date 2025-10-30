import { useState } from "react";

export default function useSettingsOption(optionName, defaultValue = false) {
  const nameFormat = `${optionName}_setting`;

  const [option, setOption] = useState(JSON.parse(localStorage.getItem(nameFormat)) ?? defaultValue);

  const toggleOption = () => {
    setOption((prev) => {
      const newValue = !prev;
      localStorage.setItem(nameFormat, JSON.stringify(newValue));
      return newValue;
    });
  }

  return [option, toggleOption];
}