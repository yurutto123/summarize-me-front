"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Home = () => {
  const router = useRouter();
  // 仮のログイン状態を示す変数
  let isLoggedIn = false;
  if (sessionStorage.getItem("token")) {
    console.log(sessionStorage.getItem("token"))
    isLoggedIn = true;
  }
  useEffect(() => {
    // ログインしていない場合はログインページにリダイレクト
    if (isLoggedIn) {
      router.push("./summarizeMe/in/room_list");
    }else{
      router.push("./summarizeMe/sign/sign-in");
    }
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Draft.js with Next</title>
        <meta name="description" content="Draft.js with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  );
};

export default Home;
