import styled from 'styled-components';
import React, { useState } from 'react';
import ToDoItem from './TodoItem';
import PropTypes from 'prop-types';

const ToDoItemList = ({ title, todoList, setTodoList, checkedList }) => {
	return (
		<TodoAppList>
			<TodoAppTitle>{title}</TodoAppTitle>
			<TodoAppUl>
				{todoList &&
					todoList.map((todoItem) => {
						console.log(todoItem);
						if (todoItem.deleted) return null;
						if (checkedList !== todoItem.checked) return null;
						return (
							<ToDoItem
								key={todoItem.id}
								todoItem={todoItem}
								todoList={todoList}
								setTodoList={setTodoList}
							/>
						);
					})}
			</TodoAppUl>
		</TodoAppList>
	);
};

ToDoItemList.propTypes = {
	title: PropTypes.string.isRequired,
	todoList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
	setTodoList: PropTypes.func.isRequired,
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
