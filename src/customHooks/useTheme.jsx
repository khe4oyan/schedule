// libs
import { useState } from "react";

export default function useTheme() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
  return [theme, setTheme];
}