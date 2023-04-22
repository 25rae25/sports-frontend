import { useForm } from "react-hook-form";
import Sidebar from "../Siderbar";

const SignUp = () => {
	const { register } = useForm();
	
	return (
		<Sidebar>
			<form>
				<input {...register("id")} placeholder="입력하세요"/>
				<input {...register("password")} placeholder="입력하세요" />
				<input {...register("name")} placeholder="입력하세요" />
				<input {...register("phone")} placeholder="입력하세요" />
				<input {...register("email")} placeholder="입력하세요" />
				<button>제출</button>
			</form>
		</Sidebar>
	);
}

export default SignUp;
