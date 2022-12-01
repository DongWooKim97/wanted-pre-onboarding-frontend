import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/signup" element={<SignupPage />}></Route>
		</Routes>
	);
}
export default App;
