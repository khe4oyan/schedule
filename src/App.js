// libs
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import SchedulePage from './pages/SchedulePage';
import ThemePage from './pages/ThemePage';

// components
import Navigation from './components/Navigation';
// import Practice from './components/Practice';

// custom hooks
import useTheme from './customHooks/useTheme';

// constants
import routes from './constants/routes';

// general styles
import './app.css'

function App() {
	const [theme, setTheme] = useTheme();

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
			<Routes>
				<Route path={routes.HOME} element={<HomePage />}>
					<Route index element={<Navigate to={routes.SCHEDULE} />}/>

					<Route path={routes.SETTINGS} element={<SettingsPage />}/>
					<Route path={routes.SCHEDULE} element={<SchedulePage />}/>
					<Route path={routes.THEME} element={<ThemePage newTheme={newTheme}/>}/>
				</Route>
			</Routes>

			<Navigation />
		</div>
	);
}

export default App;