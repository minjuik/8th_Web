import { UserSigninInformation, validateSignin } from "../utils/validate.ts";
import useForm from "../hooks/useForm.ts";
import { useNavigate } from "react-router-dom";
import { postSignin } from "../apis/auth.ts";
import { useLocalStorage } from "../hooks/useLocalStorage.ts";
import { LOCAL_STORAGE_KEY } from "../constants/key.ts";
import { ResponseSigninDto } from "../types/auth.ts";

const LoginPage = () => {
  const { setItem } = useLocalStorage(LOCAL_STORAGE_KEY.accessToken);
  const { values, errors, touched, getInputProps } =
    useForm<UserSigninInformation>({
      initialValue: {
        email: "",
        password: "",
      },
      validate: validateSignin,
    });

  const handleSubmit = async () => {
    console.log(values);
    try {
      const response = await postSignin(values);
      setItem(response.data.accessToken);
      console.log(response);
    } catch (error) {
      alert(error?.message);
    }
  };

  // 오류가 하나라도 있거나 입력값이 비어있으면 버튼 비활성화
  const isDisabled =
    Object.values(errors || {}).some((error) => error.length > 0) || // 오류가 있으면 true
    Object.values(values).some((value) => value === ""); // 입력값이 비어있으면 true

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="flex items-center p-4 bg-white text-black">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-2xl mr-2 absolute left-10 cursor-pointer"
        >
          &lt;
        </button>
        <h1 className="text-lg font-semibold">로그인</h1>
      </div>

      <div className="flex flex-col gap-3">
        <input
          {...getInputProps("email")}
          name="email"
          className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm 
                        ${
                          errors?.email && touched?.email
                            ? "border-red-500 bg-red-200"
                            : "border-gray-300"
                        }`}
          type={"email"}
          placeholder={"이메일"}
        />
        {errors?.email && touched?.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
        <input
          {...getInputProps("password")}
          name="password"
          className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm
                    ${
                      errors?.password && touched?.password
                        ? "border-red-500 bg-red-200"
                        : "border-gray-300"
                    }`}
          type={"password"}
          placeholder={"비밀번호"}
        />
        {errors?.password && touched?.password && (
          <div className="text-red-500 text-sm">{errors.password}</div>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isDisabled}
          className="w-full bg-blue-600 text-white py-3 rounded-md text-md
                font-medium hover:bg-blue-700 transition-colors cursor-pointer 
                disabled:bg-gray-300"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
