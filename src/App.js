// libs
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import PracticePage from './pages/PracticePage';
import SchedulePage from './pages/SchedulePage';
import ThemePage from './pages/ThemePage';
import EventsPage from './pages/EventsPage';
import ScheduleWeekPage from './pages/ScheduleWeekPage';

// components
import Navigation from './components/Navigation';

// custom hooks
import useTheme from './customHooks/useTheme';

// constants
import routes from './constants/routes';
import NAV_MODES from './constants/navigationModes';

// general styles
import './app.css'

function App() {
	const [theme, setTheme] = useTheme();
	const appMode = NAV_MODES.PRACTICE;

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
					<Route index element={<Navigate to={appMode === NAV_MODES.SCHEDULE ? routes.SCHEDULE : routes.PRACTICE} />}/>

					<Route path={routes.PRACTICE} element={<PracticePage />}/>
					<Route path={routes.SCHEDULE} element={<SchedulePage />}/>
					<Route path={routes.SCHEDULE_WEEK} element={<ScheduleWeekPage />}/>
					<Route path={routes.EVENTS} element={<EventsPage />}/>
					<Route path={routes.SETTINGS} element={<SettingsPage />}/>
					<Route path={routes.THEME} element={<ThemePage newTheme={newTheme}/>}/>
				</Route>
			</Routes>

			<Navigation mode={appMode} />
		</div>
	);
}

export default App;