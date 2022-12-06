import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const InputBox = ({ todoList, setTodoList }) => {
	const [text, setText] = useState('');

	const inputRef = useRef(null);

	const onChangeInput = (e) => {
		setText(e.target.value);
	};

	useEffect(() => {
		getTodo();
	}, []);

	async function createTodo() {
		try {
			await axios.post(
				'/todos',
				{
					todo: text,
				},
				{
					headers: {
						ContentType: 'application/json',
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				}
			);
			setText('');
			getTodo();
		} catch (error) {
			console.error(error);
		}
		inputRef.current.focus();
	}

	async function getTodo() {
		try {
			const response = await axios.get('/todos', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});
			console.log(response.data);
			setTodoList(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<InputContainer className="todoapp__inputbox">
			<TodoInput
				type="text"
				value={text}
				ref={inputRef}
				placeholder="할 일을 입력해주세요"
				onChange={onChangeInput}
			/>
			<TodoSubmitButton type="submit" onClick={createTodo}>
				추가
			</TodoSubmitButton>
		</InputContainer>
	);
};

const InputContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;
const TodoInput = styled.input`
	flex: 1;
	border: none;
	border-bottom: 1px solid #f1f3f5;
	padding: 10px;
	height: 50px;
	box-sizing: border-box;
	:focus {
		outline: none;
	}
`;
const TodoSubmitButton = styled.button`
	border: none;
	border-radius: 0;
	background-color: #d0ebff;
	color: #1c7ed6;
	height: 50px;
	width: 50px;
	font-weight: bold;
`;

export default InputBox;
