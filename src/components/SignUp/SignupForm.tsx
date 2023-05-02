import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const SignupFormSchema = Yup.object().shape({
  name: Yup.string().required('이름을 입력해주세요'),
  email: Yup.string().email('이메일을 입력해주세요').required('이메일형식이 올바르지 않습니다'),
  password: Yup.string().required('비밀번호를 입력해주세요'),
});

const SignupForm = () => {
  const formik = useFormik<SignupFormValues>({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignupFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.touched.name && formik.errors.name && (
          <div>{formik.errors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;