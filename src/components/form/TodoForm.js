import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../todo/InputBox';
import ToDoItemList from '../todo/TodoItemList';

export default function TodoForm() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('access_token')) {
			alert('로그인이 선행되어야 합니다.');
			navigate('/');
		}
	}, []);

	return (
		<TodoContainer>
			<InputBox />
			<ToDoItemList />
			<ToDoItemList />
		</TodoContainer>
	);
}

const TodoContainer = styled.div`
	max-width: 480px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 50px 0;
`;
