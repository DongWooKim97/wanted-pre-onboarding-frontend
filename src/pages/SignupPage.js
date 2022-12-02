import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export default function SignupPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repassword, setRepassword] = useState('');

	const handleInput = (e) => {
		const target = e.currentTarget;
		target.id === 'email' ? setEmail(target.value) : setPassword(target.value);
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
		<SignupForm>
			<SignupContainer>
				<SignupTitle>S I G N U P</SignupTitle>
				<form onSubmit={onSubmitHandler}>
					<EmailBox id="email" value={email} onChange={handleInput}></EmailBox>
					<PasswordBox
						id="password"
						value={password}
						onChange={handleInput}
					></PasswordBox>
					<SignupButton type="submit">회원가입</SignupButton>
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
