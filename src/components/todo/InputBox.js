import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const InputBox = ({ todoList, setTodoList }) => {
	const [text, setText] = useState('');

	const inputRef = useRef(null);

	const onChangeInput = (e) => {
		setText(e.target.value);
	};

	async function onClickAddButton() {
		try {
			const response = await axios.post(
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
			console.log(response.data);
			setText('');
			getData();
		} catch (error) {
			console.error(error);
		}

		inputRef.current.focus();
	}

	async function getData() {
		try {
			const response = await axios.get('/todos', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});
			setTodoList(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		console.log(todoList);
	}, [todoList]);

	return (
		<InputContainer className="todoapp__inputbox">
			<TodoInput
				type="text"
				name="todoItem"
				value={text}
				ref={inputRef}
				placeholder="할 일을 입력해주세요"
				className="todoapp__inputbox-inp"
				onChange={onChangeInput}
			/>
			<TodoSubmitButton
				type="submit"
				className="todoapp__inputbox-add-btn"
				onClick={onClickAddButton}
			>
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
