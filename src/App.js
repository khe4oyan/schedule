// components
import Header from './components/Header';
import Lessons from './components/Lessons/Lessons';
// import Theme from './components/Theme';

// general styles
import './app.css'

function App() {
	return (
		<div className={`colors_default`}>
			<Header />
			<Lessons />
			{/* <Theme /> */}
		</div>
	);
}

export default App;