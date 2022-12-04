import styled from 'styled-components';
import React from 'react';
import ToDoItem from './TodoItem';

const ToDoItemList = () => (
	<TodoAppList>
		<TodoAppTitle>제목</TodoAppTitle>
		<TodoAppUl>
			<ToDoItem />
			<ToDoItem />
			<ToDoItem />
		</TodoAppUl>
	</TodoAppList>
);

const TodoAppList = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
`;

const TodoAppTitle = styled.p`
	font-weight: bold;
	margin: 0;
`;

const TodoAppUl = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0;
`;

export default ToDoItemList;
