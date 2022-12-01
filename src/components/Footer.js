import styled from 'styled-components';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterContents>
				<FooterTitle>Footer</FooterTitle>
			</FooterContents>
		</FooterContainer>
	);
}

const FooterContainer = styled.div`
	height: 10vh;
	background-color: #dde0ea;
	margin-top: auto;
`;

const FooterContents = styled.div`
	width: 100vw;
	// height: 25vh;
	display: flex;
	algin-items: center;
	justify-content: center;
	margin: auto;
`;

const FooterTitle = styled.div`
	font-weight: 600;
	font-size: 20px;
`;
