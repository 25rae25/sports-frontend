// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'

// type Inputs = {
//     name: string
//     email: string
//     password: string
// }

// const SignupForm = () => {
// 	 const schema = yup.object().shape({
//         email: yup.string().required(),
//         password: yup.string().min(6),
// 		nickname: yup.string().required()
//     })

//     const {register, /*handleSubmit*/ formState: { errors }} = useForm<Inputs>({
//         resolver: yupResolver(schema) 
//     })

//     // const onSubmit = (data) => console.log(data)

//     return (
// 		<form /*onSubmit={handleSubmit(onSubmit)}*/>
// 			<input {...register('email')} />
// 			{errors.email?.message}
// 			<input {...register('nickname')} />
// 			{errors.email?.message}
// 			<input {...register('password')} />
// 			{errors.password?.message}
// 			<input type='submit' />
// 		</form>
//     )
// }

// export default SignupForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignUpForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('이름을 입력해주세요'),
    email: Yup.string().email('이메일 형식이 맞지않습니다').required('이메일을 이볅해주세요'),
    password: Yup.string().min(6, '비밀번호 6글자가 넘어야합니다').required('비밀번호를 입력해주세요'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('비밀번호')], '비밀번호가 일치하지 않습니다')
      .required('비밀번호를 다시 확인해주세요'),
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>이름:</label>
            <input type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div>
            <label>이메일:</label>
            <input type="email" id="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div>
            <label>비밀번호:</label>
            <input type="password" id="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
          <div>
            <label>비밀번호 확인:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
