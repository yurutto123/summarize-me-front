"use client";

import { useState, ChangeEvent, SetStateAction } from "react";
import { useRouter } from "next/navigation";

const CreateForm = () => {
  const router = useRouter(); // コンポーネント内でuseRouterを使用する

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, setFunction: { (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (value: SetStateAction<string>): void; (arg0: any): void }) => {
    setFunction(event.target.value);
  };

  const create = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // フォームのデフォルトの動作を防ぐ

    try {
      const url = "http://localhost:8080/signup";
      const data = {
        name: userName,
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
      } else {
        const responseData = await response.json();
        // const tokenString = JSON.stringify(responseData);
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
  //   const createButton = document.getElementById("createButton");
  //   if (createButton) {
  //     createButton.addEventListener("click", create);

  //     return () => {
  //       createButton.removeEventListener("click", create);
  //     };
  //   }
  // }, []);

  return (
    <form onSubmit={create}>
      <div className="mb-5">
        <input type="text" id="userName" className="w-full text-2xl px-3 py-2 border rounded-md" required placeholder="ユーザー名" value={userName} onChange={(e) => handleInputChange(e, setUserName)} />
      </div>
      <div className="mb-5">
        <input type="email" id="email" className="w-full text-2xl px-3 py-2 border rounded-md" required placeholder="メールアドレス" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
      </div>
      <div className="mb-5">
        <input type="password" id="password" className="w-full text-2xl px-3 py-2 border rounded-md" required placeholder="パスワード" value={password} onChange={(e) => handleInputChange(e, setPassword)} />
      </div>
      <button type="submit" className="w-full py-3 bg-sub-color text-4xl text-blue-900 font-bold rounded-md mb-4">
        新規登録
      </button>
    </form>
  );
};

export default CreateForm;
