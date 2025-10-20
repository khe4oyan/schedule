// libs
import { useEffect, useState } from 'react';

// components
import Header from './components/Header';
import Lessons from './components/Lessons/Lessons';
import Panel from './components/Panel';
import Theme from './components/Theme';
import AllComponentsPreview from "./components/AllComponentsPreview";

// general styles
import './app.css'

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
	const [tab, setTab] = useState(0);

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
			<Header />
			{tab === 0 && <Lessons />}
			{tab === 1 && <Theme newTheme={newTheme} />}
			
			<Panel tab={tab} setTab={setTab} />
			{/* <AllComponentsPreview /> */}
		</div>
	);
}

export default App;