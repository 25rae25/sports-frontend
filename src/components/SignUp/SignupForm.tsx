import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const ErrorMessage = styled.div`
	color: red;
	font-size: 0.8rem;
`
// const Label = styled.div`
//     font-size: 1rem;
// 	color: #fff;
//     margin-bottom: 0.25rem;
// `;

const Input = styled.input`
    width: 50%;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;


interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('이름을 입력해주세요'),
  email: Yup.string().email('이메일을 입력해주세요').required('이메일형식이 올바르지 않습니다'),
  password: Yup.string().min(8, '비밀번호 8자리 이상 입력해주세요').required('비밀번호를 입력해주세요'),
});

const SignupForm = () => {
  const formik = useFormik<SignupFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

//   const handleSubmit = async (values, actions) => {
//     alert("회원가입 submit 완료");
//   };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='name'>이름</label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        )}
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm