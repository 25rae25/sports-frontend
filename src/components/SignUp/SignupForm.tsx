import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Inputs = {
    name: string
    email: string
	nickname: string
    password: string
}

const SignupForm = () => {
	 const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(6),
		nickname: yup.string().required()
    })

    const {register, /*handleSubmit*/ formState: { errors }} = useForm<Inputs>({
        resolver: yupResolver(schema) 
    })

    // const onSubmit = (data) => console.log(data)

    return (
		<form /*onSubmit={handleSubmit(onSubmit)}*/>
			<input {...register('email')} />
			{errors.email?.message}
			<input {...register('nickname')} />
			{errors.email?.message}
			<input {...register('password')} />
			{errors.password?.message}
			<input type='submit' />
		</form>
    )
}

export default SignupForm;