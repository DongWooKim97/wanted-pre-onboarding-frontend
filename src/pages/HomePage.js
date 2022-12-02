import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

export default function HomePage() {
	return (
		<HomeContainer>
			<LoginForm></LoginForm>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	/* width: 100vw;
	height: 90vh; */
`;
