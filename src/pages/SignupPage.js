import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export default function SignupPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignupButton = (e) => {
		console.log(`{ email : ${email} , password : ${password} }`);
	};

	const handleInput = (e) => {
		const target = e.currentTarget;
		target.id === 'email' ? setEmail(target.value) : setPassword(target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		postData();

		async function postData(body) {
			try {
				//응답 성공
				const response = await axios.post('/auth/signup', {
					//보내고자 하는 데이터
					email: email,
					password: password,
				});
				console.log(response);
			} catch (error) {
				//응답 실패
				console.error(error);
			}
		}
	};

	return (
		<SignupForm>
			<SignupContainer>
				<SignupTitle>S I G N U P</SignupTitle>
				<form onSubmit={onSubmitHandler}>
					<EmailBox
						type="text"
						id="email"
						value={email}
						onChange={handleInput}
					></EmailBox>
					<PasswordBox
						id="password"
						type="text"
						value={password}
						onChange={handleInput}
					></PasswordBox>
					<SignupButton onClick={handleSignupButton}>회원가입</SignupButton>
				</form>
			</SignupContainer>
		</SignupForm>
	);
}

const SignupForm = styled.div`
	justify-content: center;
	text-align: center;
	align-items: center;
	flex-direction: column;
`;

const SignupContainer = styled.div`
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

const SignupButton = styled.button`
	margin: auto;
	color: purple;
	border-radius: 25%;
`;
