"use client";

import { useState, ChangeEvent, SetStateAction } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter(); // コンポーネント内でuseRouterを使用する

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, setFunction: { (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (arg0: any): void; }) => {
    setFunction(event.target.value);
  };
  
  const login = async (event: {preventDefault: () => void; }) => {
    event.preventDefault(); // フォームのデフォルトの動作を防ぐ

    console.log("routers",router);
    console.log("login");
    try {
      const url = "http://localhost:8080/login";
      const data = {
        email: email,
        password: password,
      };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }else{
        const responseData = await response.json();
        // const tokenString = responseData["token"].replace(/^"(.*)"$/, "$1");
        const tokenString = responseData["token"];
        sessionStorage.setItem("token", tokenString);
        console.log("Response:", responseData);
        router.push("../../../../summarizeMe/in/room_list");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   const loginButton = document.getElementById("loginButton");
  //   if (loginButton) {
  //     loginButton.addEventListener("click", login);

  //     return () => {
  //       loginButton.removeEventListener("click", login);
  //     };
  //   }
  // }, []);

  return (
    <form onSubmit={login}>
      <div className="mb-5">
        <input type="email" id="email" className="w-full text-2xl px-3 py-2 border rounded-md" required placeholder="メールアドレス" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
      </div>
      <div className="mb-5">
        <input type="password" id="password" className="w-full text-2xl px-3 py-2 border rounded-md" required placeholder="パスワード" value={password} onChange={(e) => handleInputChange(e, setPassword)} />
      </div>
      <button type="submit" id="loginButton" className="w-full py-3 bg-sub-color text-4xl text-blue-900 font-bold rounded-md mb-4">
        ログイン
      </button>
    </form>
  );
};

export default LoginForm;
