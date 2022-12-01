import styled from 'styled-components';
import LoginContainer from '../components/LoginContainer';

export default function HomePage() {
	return (
		<HomeContainer>
			<LoginContainer></LoginContainer>
		</HomeContainer>
	);
}

const HomeContainer = styled.div`
	/* width: 100vw;
	height: 90vh; */
`;
