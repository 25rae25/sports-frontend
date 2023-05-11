import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = () => {

const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')

const validationSchema = Yup.object().shape({
	email: Yup.string().email('이메일양식이 틀렸습니다').required('이메일을 입력해주세요'),
	password: Yup.string().required('패스워드를 입력해주세요'),
});

  const setEmailHandler = (e:React.ChangeEvent<HTMLInputElement>): void => {
	setEmail(e.target.value)
  }

  const setPasswordHandler = (e:React.ChangeEvent<HTMLInputElement>): void => {
	setPassword(e.target.value)
  }

  const login = async ()=> {
	const data = await axios.post('', {
		email: email,
		password: password,
	})
  }


  return (
	<>
		<div>아이디</div><input onChange={setEmailHandler}/>
		<div>아이디</div><input onChange={setPasswordHandler}/>
		<button onClick={login}>로그인</button>
	</>
  );
};

export default LoginForm;
