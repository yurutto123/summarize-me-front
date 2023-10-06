"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter(); // コンポーネント内でuseRouterを使用する

  const login = async () => {
    console.log("routers",router);
    console.log("login");
    try {
      const url = "http://localhost:8080/login";
      const data = {
        name: "test1",
        email: "test1@email.com",
        password: "test1",
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
      }

      const responseData = await response.json();

      const tokenString = JSON.stringify(responseData);
      sessionStorage.setItem("token", tokenString);
      console.log("Response:", responseData);
      router.push("../../../markdown")
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const loginButton = document.getElementById("loginButton");
    if (loginButton) {
      loginButton.addEventListener("click", login);

      return () => {
        loginButton.removeEventListener("click", login);
      };
    }
  }, []);

  return (
    <form>
      <div className="mb-5">
        <input type="email" id="email" className="w-full text-2xl px-3 py-2 border rounded-md" required placeholder="メールアドレス" />
      </div>
      <div className="mb-5">
        <input type="password" id="password" className="w-full text-2xl px-3 py-2 border rounded-md" required placeholder="パスワード" />
      </div>
      <button type="button" id="loginButton" className="w-full py-3 bg-sub-color text-4xl text-blue-900 font-bold rounded-md mb-4">
        ログイン
      </button>
    </form>
  );
};

export default LoginForm;
