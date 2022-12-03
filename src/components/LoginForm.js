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
		const emailRegex =
			/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

		if (!e.target.value || emailRegex.test(e.target.value)) {
			setEmailError(false);
		} else {
			setEmailError(true);
		}

		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		const passwordRegex =
			/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

		if (!e.target.value || passwordRegex.test(e.target.value)) {
			setPasswordError(false);
		} else {
			setPasswordError(true);
		}

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
				{emailError && <ValidInfo>이메일 형식을 확인하세요.</ValidInfo>}
				<PasswordBox value={password} id="password" onChange={handlePassword} />
				{passwordError && <ValidInfo>비밀번호 형식을 확인하세요.</ValidInfo>}
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
