import styled from 'styled-components';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginContainer() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleInput = (e) => {
		const target = e.currentTarget;
		target.id === 'email' ? setEmail(target.value) : setPassword(target.value);
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
				<EmailBox value={email} id="email" onChange={handleInput}></EmailBox>
				<PasswordBox
					value={password}
					id="password"
					onChange={handleInput}
				></PasswordBox>
				<LoginButton type="submit">제출</LoginButton>
			</form>
			<SignupLink onClick={handleSignupLink}>회원가입</SignupLink>
		</LoginBox>
	);
}

const LoginBox = styled.div`
	flex-direction: column;
	background-color: green;
	width: 25vw;
	height: 25vh;
	text-align: center;
	justify-content: center;
	align-items: center;
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
	width: 250px;
	height: 10px;
`;

const PasswordBox = styled.input`
	display: block;
	margin: 25px auto;
	width: 250px;
	height: 10px;
`;

const LoginButton = styled.button`
	margin: auto;
	color: purple;
	border-radius: 25%;
`;

const SignupLink = styled.button`
	margin: auto;
	color: gray;
	border-radius: 25%;
`;