// libs
import { useEffect, useState } from 'react';

// components
import Header from './components/Header';
import Lessons from './components/Lessons/Lessons';
import Panel from './components/Panel';
import Theme from './components/Theme';
import Settings from './components/Settings';
// import AllComponentsPreview from "./components/AllComponentsPreview";

// custom hooks
import useSettingsOption from './customHooks/useSettingsOption';

// general styles
import './app.css'

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
	const [tab, setTab] = useState(1);
	const [isShowHeader] = useSettingsOption("headerShow");

	useEffect(() => {
		document.body.classList.add('colors_default');

		if (theme) {
			document.body.classList.add(theme);
		}
	}, []);

	useEffect(() => {
		if (theme === "") {
			return;
		}

		document.body.classList = ["colors_default"];
		document.body.classList.add(theme);
	}, [theme]);

	const newTheme = (themeName) => {
		setTheme(themeName);
		localStorage.setItem("theme", themeName);
	}

	return (
		<div>
			{
				isShowHeader &&
				<Header />
			}

			{tab === 0 && <Theme newTheme={newTheme} />}
			{tab === 1 && <Lessons />}
			{tab === 2 && <Settings />}

			<Panel tab={tab} setTab={setTab} />
			{/* <AllComponentsPreview /> */}
		</div>
	);
}

export default App;