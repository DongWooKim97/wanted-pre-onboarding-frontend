import axios from 'axios';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [correctEmail, setCorrectEmail] = useState(false);
	const [correctPassword, setCorrectPassword] = useState(false);
	const [correctConfirmPassword, setCorrectConfirmPassword] = useState(false);

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

	const handleConfirmPasswordChange = (e) => {
		e.preventDefault();
		const target = e.target.value;
		setConfirmPassword(target);
		isConfirmPasswordCorrect(target);
	};

	const isEmailCorrect = (value) => {
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

	const isConfirmPasswordCorrect = (value) => {
		if (password !== value) {
			setCorrectConfirmPassword(false);
			return;
		}
		setCorrectConfirmPassword(true);
		return;
	};

	const handleBackpageLink = (e) => {
		navigate('/');
	};

	const isValidSignup = !(
		email.includes('@') &&
		email.includes('.') &&
		password.length >= 8 &&
		confirmPassword.length >= 8
	);

	async function postSignupData(e) {
		e.preventDefault();

		try {
			await axios.post('/auth/signup', {
				email: email,
				password: password,
			});
			alert('회원가입 성공!');
			navigate('/');
		} catch (error) {
			alert('이미 가입된 이메일입니다.');
		}
	}

	return (
		<SignupContainer>
			<SignupTitle>S I G N U P</SignupTitle>
			<form onSubmit={postSignupData}>
				<EmailBox
					id="email"
					value={email}
					onChange={handleEmailChange}
					placeholder="이메일을 입력하세요"
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
					<ValidInfo>Please enter valid password format</ValidInfo>
				)}
				<ConfirmPasswordBox
					id="confirm password"
					value={confirmPassword}
					placeholder="비밀번호를 다시 한번 입력하세요"
					onChange={handleConfirmPasswordChange}
					type="password"
				/>
				{confirmPassword.length > 0 && !correctConfirmPassword && (
					<ValidInfo>Please check password correct.</ValidInfo>
				)}
				<SignupButton disabled={isValidSignup} type="submit">
					회원가입
				</SignupButton>
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
	color: black;
	width: 25vw;
	height: 5vh;
	border-radius: 25%;
	/* background-color: yellow; */

	background-color: ${(props) => props.disabled || 'yellow'};
`;

const BackpageLink = styled.button`
	margin: 25px auto;
	color: gray;
	width: 25vw;
	height: 5vh;
	border-radius: 25%;
	background-color: yellow;
	color: black;
`;
