import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export default function SignupForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repassword, setRepassword] = useState('');

	const handleEmail = (e) => {
		setEmail(e.currentTarget.value);
	};

	const handlePassword = (e) => {
		setPassword(e.currentTarget.value);
	};

	const handleRepassword = (e) => {
		setRepassword(e.currentTarget.value);
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
				></EmailBox>
				<PasswordBox
					id="password"
					value={password}
					placeholder="비밀번호를 입력하세요"
					onChange={handlePassword}
				></PasswordBox>
				<RepasswordBox
					id="password"
					value={repassword}
					placeholder="비밀번호를 다시 한번 입력하세요"
					onChange={handleRepassword}
				></RepasswordBox>
				<SignupButton type="submit">회원가입</SignupButton>
			</form>
		</SignupContainer>
	);
}

const SignupContainer = styled.div`
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
	width: 250px;
	height: 10px;
`;

const PasswordBox = styled.input`
	display: block;
	margin: 25px auto;
	width: 250px;
	height: 10px;
`;

const RepasswordBox = styled.input`
	display: block;
	margin: 25px auto;
	width: 250px;
	height: 10px;
`;

const SignupButton = styled.button`
	margin: auto;
	color: purple;
	border-radius: 25%;
`;
