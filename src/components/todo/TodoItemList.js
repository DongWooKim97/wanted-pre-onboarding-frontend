import styled from 'styled-components';
import React from 'react';
import ToDoItem from './TodoItem';

const ToDoItemList = ({ title, todoList, setTodoList, checkedList }) => {
	return (
		<TodoAppList>
			<TodoAppTitle>{title}</TodoAppTitle>
			<TodoAppUl>
				{todoList &&
					todoList.map((todoItem) => {
						return checkedList === todoItem.isCompleted ? (
							<ToDoItem
								key={todoItem.id}
								todoItem={todoItem}
								todoList={todoList}
								setTodoList={setTodoList}
							/>
						) : null;
					})}
			</TodoAppUl>
		</TodoAppList>
	);
};

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
