import styled from 'styled-components';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ todoList, setTodoList }) => {
	const [text, setText] = useState('');
	const inputRef = useRef(null);

	const onChangeInput = (e) => {
		setText(e.target.value);
	};

	const onClickAddButton = () => {
		const nextTodoList = todoList.concat({
			id: todoList.length,
			text,
			checked: false,
		});
		setTodoList(nextTodoList);
		setText('');
		inputRef.current.focus();
	};

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

InputBox.propTypes = {
	todoList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		}).isRequired
	),
	setTodoList: PropTypes.func.isRequired,
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
