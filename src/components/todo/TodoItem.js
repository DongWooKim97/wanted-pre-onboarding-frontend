import axios from 'axios';
import styled, { css } from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
	const [edited, setEdited] = useState(false);
	const [newText, setNewText] = useState(todoItem.text);

	const editInputRef = useRef(null);

	useEffect(() => {
		// edit 모드일때 포커싱을 한다.
		if (edited) {
			editInputRef.current.focus();
		}
	}, [edited]);

	const onChangeEditInput = (e) => {
		setNewText(e.target.value);
	};

	const onClickEditButton = () => {
		setEdited(true);
	};

	const onClickDeleteButton = () => {
		if (window.confirm('정말로 지우실건가요?')) {
			const nextTodoList = todoList.map((item) => ({
				...item,
				deleted: item.id === todoItem.id ? true : item.deleted,
			}));

			setTodoList(nextTodoList);
		}
	};

	const onChangeCheckbox = () => {
		const nextTodoList = todoList.map((item) => ({
			...item,
			checked: item.id === todoItem.id ? !item.checked : item.checked,
		}));
		setTodoList(nextTodoList);
	};

	const onClickSubmitButton = () => {
		const nextTodoList = todoList.map((item) => ({
			...item,
			text: item.id === todoItem.id ? newText : item.text, // 새로운 아이템 내용을 넣어줌
		}));
		setTodoList(nextTodoList); // 새로운 리스트를 넣어줌

		setEdited(false); // 수정모드를 다시 읽기모드로 변경
	};

	return (
		<TodoAppItem>
			<TodoCheckBox
				type="checkbox"
				className="todoapp__item-checkbox"
				checked={todoItem.checked}
				onChange={onChangeCheckbox}
			/>
			{
				// 아이템 내용
				edited ? (
					<TodoEditInput
						type="text"
						value={newText}
						ref={editInputRef} // ref 로 DOM에 접근
						onChange={onChangeEditInput}
					/>
				) : (
					<TodoContext
						className={`todoapp__item-ctx ${
							todoItem.checked ? 'todoapp__item-ctx-checked' : ''
						}`}
					>
						{todoItem.text}
					</TodoContext>
				)
			}
			{!todoItem.checked ? (
				edited ? (
					<TodoEditButton
						type="button"
						onClick={onClickSubmitButton}
						className="todoapp__item-edit-btn"
					>
						👌
					</TodoEditButton>
				) : (
					<TodoEditButton
						type="button"
						className="todoapp__item-edit-btn"
						onClick={onClickEditButton}
					>
						✏
					</TodoEditButton>
				)
			) : null}
			<TodoDeleteButton onClick={onClickDeleteButton}>🗑</TodoDeleteButton>
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
