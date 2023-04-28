import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('이메일양식이 틀렸습니다').required('이메일을 입력해주세요'),
    password: Yup.string().required('패스워드를 입력해주세요'),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">이메일:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">비밀번호:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            요청하기
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
