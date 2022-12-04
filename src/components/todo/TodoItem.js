import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
	const onChangeCheckbox = () => {
		const nextTodoList = todoList.map((item) => ({
			...item,
			checked: item.id === todoItem.id ? !item.checked : item.checked,
		}));
		setTodoList(nextTodoList);
	};

	return (
		<TodoAppItem>
			<TodoCheckBox
				type="checkbox"
				className="todoapp__item-checkbox"
				checked={todoItem.checked}
				onChange={onChangeCheckbox}
			/>
			<TodoContext
				// check={`todoapp__item-ctx ${todoItem.checked ? 'checked' : ''}`}
				// toggle={todoItem.checked ? 'chekced' : ''}
				toggle={todoItem.checked}
			>
				{todoItem.text}
			</TodoContext>

			{!todoItem.checked ? <TodoEditButton>✏</TodoEditButton> : null}

			<TodoDeleteButton>🗑</TodoDeleteButton>
		</TodoAppItem>
	);
};

ToDoItem.propTypes = {
	todoItem: PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string.isRequired,
	}),
	todoList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
		})
	),
	setTodoList: PropTypes.func.isRequired,
};

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
