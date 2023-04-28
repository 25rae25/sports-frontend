import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Sidebar from "../Siderbar";
import LoginForm from "./LoginForm";

type Inputs = {
    name: string
    email: string
    password: string
}

const FormSignUp = () => {     
    const schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().min(6)
    })

    const {register, /*handleSubmit*/ formState: { errors }} = useForm<Inputs>({
        resolver: yupResolver(schema) 
    })

    // const onSubmit = (data) => console.log(data)

    return (
        <Sidebar>
            <LoginForm />
        </Sidebar>
    )
}

export default FormSignUp;