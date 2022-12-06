import styled from 'styled-components';
import TodoForm from '../components/form/TodoForm';

export default function TodoPage() {
	return (
		<TodoContainer>
			<TodoForm />
		</TodoContainer>
	);
}

const TodoContainer = styled.div`
	justify-content: center;
	flex-direction: column;

	width: 100vw;
	height: 100vh;
`;
