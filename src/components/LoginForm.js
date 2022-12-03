import styled from 'styled-components';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginContainer() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleEmail = (e) => {
		const isValidEmail = email.includes('@') && email.includes('.');

		isValidEmail ? setEmailError(false) : setEmailError(true);

		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		const isValidPassword = e.target.value.length;

		isValidPassword < 8 ? setPasswordError(true) : setPasswordError(false);

		setPassword(e.target.value);
	};

	const handleSignupLink = (e) => {
		navigate('/signup');
	};

	const onSumbitHandler = (e) => {
		e.preventDefault();

		postData();

		async function postData(body) {
			try {
				//응답 성공
				const response = await axios.post('/auth/signin', {
					//보내고자 하는 데이터
					email: email,
					password: password,
				});
				console.log(response.data);
			} catch (error) {
				//응답 실패
				console.error(error);
			}
		}
	};

	return (
		<LoginBox>
			<LoginTitle>L O G I N</LoginTitle>
			<form onSubmit={onSumbitHandler}>
				<EmailBox value={email} id="email" onChange={handleEmail} />
				{emailError && <ValidInfo>Please enter valid email format</ValidInfo>}
				<PasswordBox value={password} id="password" onChange={handlePassword} />
				{passwordError && (
					<ValidInfo>Please enter valid password format</ValidInfo>
				)}
				<LoginButton type="submit">제출</LoginButton>
			</form>
			<SignupLink onClick={handleSignupLink}>회원가입</SignupLink>
		</LoginBox>
	);
}

const LoginBox = styled.div`
	flex-direction: column;
	background-color: green;
	width: 100vw;
	height: 100vh;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

const ValidInfo = styled.div`
	color: red;
`;

const LoginTitle = styled.div`
	display: flex;
	background-color: white;
	display: contents;
	color: yellow;
	font-size: 24px;
`;

const EmailBox = styled.input`
	margin: 25px auto;
	display: block;
	width: 25vw;
	height: 5vh;
`;

const PasswordBox = styled.input`
	display: block;
	margin: 25px auto;
	width: 25vw;
	height: 5vh;
`;

const LoginButton = styled.button`
	margin: 25px auto;
	width: 25vw;
	height: 5vh;
	color: purple;
	border-radius: 25%;
`;

const SignupLink = styled.button`
	margin: 25px auto;
	color: gray;
	width: 25vw;
	height: 5vh;
	border-radius: 25%;
`;
