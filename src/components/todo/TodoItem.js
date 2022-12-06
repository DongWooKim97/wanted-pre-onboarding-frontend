import axios from 'axios';
import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
	const [edited, setEdited] = useState(false);
	const [newText, setNewText] = useState(todoItem.todo);

	const onChangeEditInput = (e) => {
		setNewText(e.target.value);
	};

	const onClickEditButton = () => {
		setEdited(true);
	};

	async function updateTodoCompleted() {
		try {
			await axios.put(
				`/todos/${todoItem.id}`,
				{
					todo: todoItem.todo,
					isCompleted: !todoItem.isCompleted,
				},
				{
					headers: {
						ContentType: 'application/json',
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				}
			);
			getTodo();
		} catch (error) {
			console.log(error);
		}
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

	async function updateTodoTextEdit(e) {
		try {
			await axios.put(
				`/todos/${todoItem.id}`,
				{
					todo: newText,
					isCompleted: todoItem.isCompleted,
				},
				{
					headers: {
						ContentType: 'application/json',
						Authorization: `Bearer ${localStorage.getItem('access_token')}`,
					},
				}
			);
			getTodo();
		} catch (error) {
			console.log(error);
		}

		setEdited(false);
	}

	async function deleteTodo() {
		try {
			await axios.delete(`/todos/${todoItem.id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('access_token')}`,
				},
			});
			getTodo();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<TodoAppItem>
			<TodoCheckBox
				type="checkbox"
				checked={todoItem.isCompleted}
				onChange={updateTodoCompleted}
			/>
			{edited ? (
				<TodoEditInput
					type="text"
					value={newText}
					onChange={onChangeEditInput}
				/>
			) : (
				<TodoContext id={todoItem.id}>{todoItem.todo}</TodoContext>
			)}
			{!todoItem.isCompleted ? (
				edited ? (
					<>
						<TodoEditButton onClick={updateTodoTextEdit}>👌</TodoEditButton>
						<TodoEditButton onClick={(e) => setEdited(false)}>🗙</TodoEditButton>
					</>
				) : (
					<TodoEditButton onClick={onClickEditButton}>✏️</TodoEditButton>
				)
			) : null}
			<TodoDeleteButton id={todoItem.id} onClick={deleteTodo}>
				🗑️
			</TodoDeleteButton>
		</TodoAppItem>
	);
};

const TodoEditInput = styled.input`
	flex: 1;
	border: none;
	border-bottom: 1px solid #f1f3f5;
	padding: 5px;
	font-size: 1em;
	box-sizing: border-box;
`;

const TodoAppItem = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	height: 36px;
	:last-child {
		margin-bottom: 0;
	}
`;

const TodoCheckBox = styled.input`
	margin-right: 10px;
`;

const TodoContext = styled.span`
	flex: 1;
	background-color: white;

	${(props) =>
		!props.toggle
			? null
			: css`
					font-style: italic;
					text-decoration: line-through;
					color: #868e96;
			  `}
`;

const TodoEditButton = styled.button`
	border: none;
	border-radius: 0;
	height: 36px;
	width: 36px;
	background-color: inherit;
	:hover {
		cursor: pointer;
		background-color: #d0ebff;
	}
`;

const TodoDeleteButton = styled.button`
	border: none;
	border-radius: 0;
	height: 36px;
	width: 36px;
	background-color: inherit;
	:hover {
		cursor: pointer;
		background-color: #d0ebff;
	}
`;

export default ToDoItem;
