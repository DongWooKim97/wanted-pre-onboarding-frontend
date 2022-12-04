import styled from 'styled-components';

import React from 'react';

const InputBox = () => (
	<InputContainer className="todoapp__inputbox">
		{/* 아이템 내용 입력 input */}
		<TodoInput
			type="text"
			name="todoItem"
			placeholder="할 일을 입력해주세요"
			className="todoapp__inputbox-inp"
		/>
		{/* 입력 후 아이템 추가 버튼 */}
		<TodoSubmitButton type="submit" className="todoapp__inputbox-add-btn">
			추가
		</TodoSubmitButton>
	</InputContainer>
);

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
