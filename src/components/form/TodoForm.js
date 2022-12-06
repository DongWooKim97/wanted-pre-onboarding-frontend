import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../todo/InputBox';
import ToDoItemList from '../todo/TodoItemList';

export default function TodoForm() {
	const navigate = useNavigate();
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem('access_token')) {
			alert('로그인이 선행되어야 합니다.');
			navigate('/');
		}
	}, []);

	return (
		<TodoContainer>
			<TodoWrapTitle>T O D O - L I S T</TodoWrapTitle>
			<InputBox todoList={todoList} setTodoList={setTodoList} />
			<ToDoItemList
				title={'할 일'}
				todoList={todoList}
				setTodoList={setTodoList}
				checkedList={false}
			/>
			<ToDoItemList
				title={'완료한 항목'}
				todoList={todoList}
				setTodoList={setTodoList}
				checkedList={true}
			/>
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

const TodoWrapTitle = styled.h1`
	position: relative;
	text-align: center;
`;
