import styled from 'styled-components';
import TodoForm from '../components/TodoForm';

export default function TodoPage() {
	return (
		<HomeContainer>
			<TodoForm />
		</HomeContainer>
	);
}

const HomeContainer = styled.div``;
