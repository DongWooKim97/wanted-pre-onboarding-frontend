import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/signup" element={<SignupPage />}></Route>
			<Route path="/todo" element={<TodoPage />}></Route>
		</Routes>
	);
}
export default App;
