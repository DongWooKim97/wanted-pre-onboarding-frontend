import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);

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

	const handleConfirmPassword = (e) => {
		if (password === e.target.value) setConfirmPasswordError(false);
		else setConfirmPasswordError(true);
		setConfirmPassword(e.target.value);
	};

	const handleBackpageLink = (e) => {
		navigate('/');
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		postData();

		async function postData() {
			try {
				const response = await axios.post('/auth/signup', {
					email: email,
					password: password,
				});
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<SignupContainer>
			<SignupTitle>S I G N U P</SignupTitle>
			<form onSubmit={onSubmitHandler}>
				<EmailBox
					id="email"
					value={email}
					onChange={handleEmail}
					placeholder="이메일을 입력하세요"
				/>
				{emailError && <ValidInfo>Please enter valid email format</ValidInfo>}
				<PasswordBox
					id="password"
					value={password}
					placeholder="비밀번호를 입력하세요"
					onChange={handlePassword}
				/>
				{passwordError && (
					<ValidInfo>Please enter valid password format</ValidInfo>
				)}
				<ConfirmPasswordBox
					id="password"
					value={confirmPassword}
					placeholder="비밀번호를 다시 한번 입력하세요"
					onChange={handleConfirmPassword}
				/>
				{confirmPasswordError && (
					<ValidInfo>Please check password correct.</ValidInfo>
				)}
				<SignupButton type="submit">회원가입</SignupButton>
			</form>
			<BackpageLink onClick={handleBackpageLink}>홈으로</BackpageLink>
		</SignupContainer>
	);
}

const ValidInfo = styled.div`
	color: red;
`;

const SignupContainer = styled.div`
	width: 100vw;
	height: 100vh;
	justify-content: center;
	text-align: center;
	align-items: center;
	flex-direction: column;
	background-color: green;
`;

const SignupTitle = styled.div`
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

const ConfirmPasswordBox = styled.input`
	display: block;
	margin: 25px auto;
	width: 25vw;
	height: 5vh;
`;

const SignupButton = styled.button`
	margin: 25px auto;
	color: purple;
	width: 25vw;
	height: 5vh;
	border-radius: 25%;
`;

const BackpageLink = styled.button`
	margin: 25px auto;
	color: gray;
	width: 25vw;
	height: 5vh;
	border-radius: 25%;
`;
