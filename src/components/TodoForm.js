import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoForm() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('access_token')) {
			alert('로그인이 선행되어야 합니다.');
			navigate('/');
		}
	}, []);

	return (
		<TodoWrap>
			<TodoBox></TodoBox>
		</TodoWrap>
	);
}

const TodoWrap = styled.div`
	width: 100vw;
	height: 100vh;
	justify-content: center;
	text-align: center;
	align-items: center;
	background-color: green;
	display: flex;
	flex-direction: column;
`;

const TodoBox = styled.div`
	position: relative;
	background-color: yellow;
	margin: auto;
	width: 75vw;
	height: 75vh;
`;
