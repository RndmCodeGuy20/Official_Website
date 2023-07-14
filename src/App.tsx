import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages/Home';
import Team from './pages/Team';

import './App.css';
import Domains from './pages/Domains/Domains';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/team" element={<Team />} />
				<Route path="/domains" element={<Domains />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
