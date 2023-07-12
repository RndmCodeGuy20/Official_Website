import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';
import Team from './pages/Team';

import './App.css';
import Recruitment from './pages/Recruitment/Recruitment';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/team" element={<Team />} />
				<Route path="/recruitment" element={<Recruitment />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
