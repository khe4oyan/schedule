// libs
import { useEffect, useState } from 'react';

// components
import Header from './components/Header';
import Lessons from './components/Lessons/Lessons';
import Panel from './components/Panel';
import Theme from './components/Theme';
import Settings from './components/Settings';
import Events from './components/Events/Events';
import AllComponentsPreview from "./components/AllComponentsPreview";
import EmptyMessage from './components/EmptyMessage';

// custom hooks
import useSettingsOption from './customHooks/useSettingsOption';
import useTheme from './customHooks/useTheme';

// general styles
import './app.css'

function App() {
	const [theme, setTheme] = useTheme();
	const [tab, setTab] = useState(3);
	const [isShowHeader] = useSettingsOption("headerShow", true);

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
			{/* <AllComponentsPreview /> */}

			{ isShowHeader && <Header />}

			{tab === 0 && <Theme newTheme={newTheme} />}
			{/* {tab === 1 && <Lessons />} */}
			{tab === 1 && <EmptyMessage />}
			{tab === 2 && <Settings />}
			{tab === 3 && <Events />}

			<Panel setTab={setTab} />
		</div>
	);
}

export default App;