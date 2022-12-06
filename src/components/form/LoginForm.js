import styled from 'styled-components';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [correctEmail, setCorrectEmail] = useState(false);
	const [correctPassword, setCorrectPassword] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('access_token')) {
			alert('로그인 정보가 있습니다.');
			navigate('/todo');
		}
	}, []);

	const isEmailCorrect = (value, name) => {
		if (!value.includes('@') || !value.includes('.')) {
			setCorrectEmail(false);
			return;
		}
		setCorrectEmail(true);
		return;
	};
	const isPasswordCorrect = (value) => {
		if (value.length < 8) {
			setCorrectPassword(false);
			return;
		}
		setCorrectPassword(true);
		return;
	};

	const handleEmailChange = useCallback((e) => {
		e.preventDefault();
		const target = e.target.value;
		setEmail(target);
		isEmailCorrect(target);
	}, []);

	const handlePasswordChange = useCallback((e) => {
		e.preventDefault();
		const target = e.target.value;
		setPassword(target);
		isPasswordCorrect(target);
	}, []);

	const handleSignupLink = (e) => {
		navigate('/signup');
	};

	const isValidLogin = !(
		email.includes('@') &&
		email.includes('.') &&
		password.length >= 8
	);

	async function postLoginData(e) {
		e.preventDefault();

		try {
			const response = await axios.post(
				'/auth/signin',
				{
					email: email,
					password: password,
				},
				{
					withCredentials: true,
				}
			);
			localStorage.setItem('access_token', response.data.access_token);
			navigate('/todo');
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<LoginBox>
			<LoginTitle>L O G I N</LoginTitle>
			<form onSubmit={postLoginData}>
				<EmailBox
					id="email"
					value={email}
					placeholder="이메일을 입력하세요"
					onChange={handleEmailChange}
					type="text"
				/>
				{email.length > 0 && !correctEmail && (
					<ValidInfo>Please enter valid email format</ValidInfo>
				)}

				<PasswordBox
					id="password"
					value={password}
					placeholder="비밀번호를 입력하세요"
					onChange={handlePasswordChange}
					type="password"
				/>
				{password.length > 0 && !correctPassword && (
					<ValidInfo>Please enter valid email format</ValidInfo>
				)}

				<LoginButton disabled={isValidLogin} type="submit">
					제출
				</LoginButton>
			</form>
			<SignupLink onClick={handleSignupLink}>회원가입</SignupLink>
		</LoginBox>
	);
}

const ValidInfo = styled.div`
	color: red;
`;

const LoginBox = styled.div`
	flex-direction: column;
	background-color: green;
	width: 100vw;
	height: 100vh;
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
	color: black;
	background-color: ${(props) => props.disabled || 'yellow'};
	border-radius: 25%;
`;

const SignupLink = styled.button`
	margin: 25px auto;
	background-color: yellow;
	color: black;
	width: 25vw;
	height: 5vh;
	border-radius: 25%;
`;
