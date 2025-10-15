import { useState } from "react";

export default function useVersion(key, lastVersion) {
  const keyFormat = keyFormatTool(key);
  
	const [userVersion, setUserVersion] = useState(+localStorage.getItem(keyFormat) ?? 0);

	const isShowUpdate = lastVersion > userVersion;
	
	const updateVersion = () => {
		setUserVersion(lastVersion);
		localStorage.setItem(keyFormat, lastVersion);
	};

	return [isShowUpdate, updateVersion, userVersion, lastVersion];
}

const keyFormatTool = (key) => {
	return `${key}_version`;
}
