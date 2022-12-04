import styled from 'styled-components';
import React from 'react';

const ToDoItem = () => (
	<TodoAppItem>
		<TodoCheckBox type="checkbox" />
		<TodoContext>Todo Item</TodoContext>
		<TodoEditButton>✏</TodoEditButton>
		<TodoDeleteButton>🗑</TodoDeleteButton>
	</TodoAppItem>
);

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
