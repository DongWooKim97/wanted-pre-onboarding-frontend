import styled from 'styled-components';

export default function Header() {
	return (
		<HeaderContainer>
			<HeaderContents>
				<HeaderTitle> Header, navBar</HeaderTitle>
			</HeaderContents>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	height: 10vh;
	background-color: #dde0ea;
	margin-top: auto;
`;

const HeaderContents = styled.div`
	width: 100%;
	// height: 25vh;
	display: flex;
	algin-items: center;
	justify-content: center;
	margin: 0 auto;
`;

const HeaderTitle = styled.div`
	font-weight: 600;
	font-size: 20px;
`;
