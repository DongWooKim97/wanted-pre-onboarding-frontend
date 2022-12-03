import styled from 'styled-components';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoForm() {
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem('access_token')) {
			alert('로그인이 선행되어야 합니다.');
			navigate('/');
		}
	}, []);

	return <div>여기는 투두투두투투투툳!</div>;
}
