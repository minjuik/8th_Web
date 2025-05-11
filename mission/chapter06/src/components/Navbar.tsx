import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ResponseMyInfoDto } from "../types/auth";
import { getMyInfo } from "../apis/auth";

const Navbar = () => {
  const { accessToken } = useAuth();
  const [data, setData] = useState<ResponseMyInfoDto|null>(null);
  useEffect(() => {
      const getData = async () => {
        try {
          const response = await getMyInfo();
          console.log(response);
          setData(response);
        } catch(error) {
          console.error("오류입니다", error)
        }
      };
      getData();
    }, []);
  

  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="flex items-center justify-between p-4">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          돌려돌려돌림판
        </Link>
        <div className="space-x-6">
          {!accessToken && (
            <>
              <Link
                to={"/login"}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                로그인
              </Link>
              <Link
                to={"/signup"}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                회원가입
              </Link>
            </>
          )}
          {accessToken && (
            <span className="dark:text-gray-300">{data?.data.name}님, 반갑습니다.</span>
          )}
          {accessToken && (
            <button
              className="cursor-pointer dark:text-gray-300 hover:text-blue-500"
              onClick={handleLogout}
            >
              로그아웃
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
