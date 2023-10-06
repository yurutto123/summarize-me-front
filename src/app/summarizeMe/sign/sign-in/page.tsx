import Image from "next/image";
import React from "react";
import Link from "next/link";
import Icon from "../../../../../public/images/SummarizeMeLogo.png";

export const metadata = {
  title: "SummarizeMe ログイン",
  description: "ログインページ",
};

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-1/3 bg-main-color flex flex-col items-center justify-center">
        <Image
          src={Icon}
          alt="SummarizeMe logo"
          className="h-40 text-sub-color"
        />
        <p className="text-5xl text-sub-color">SummarizeMe</p>
      </div>
      <div className="w-2/3 bg-gradient-to-b from-grad-start via-grad-via to-grad-end flex items-center justify-center">
        <div className="p-10 w-full max-w-2xl mx-3 md:mx-0">
          <h1 className="text-2xl text-sub-color font-bold mb-10 text-center flex justify-center items-center space-x-4">
            <hr className="border-2 border-sub-color w-1/3" />
            <span className="text-5xl">ログイン</span>
            <hr className="border-2 border-sub-color w-1/3" />
          </h1>
          <form>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="w-full text-2xl px-3 py-2 border rounded-md"
                required
                placeholder="メールアドレス"
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                className="w-full text-2xl px-3 py-2 border rounded-md"
                required
                placeholder="パスワード"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-sub-color text-4xl text-blue-900 font-bold rounded-md mb-4"
            >
              ログイン
            </button>
          </form>
          <div className="flex justify-center w-full">
            <Link
              href="/summarizeMe/sign/sign-up"
              className="text-center text-sub-color border-b-2"
            >
              新規登録はこちら
            </Link>
          </div>
          <hr className="mt-5 border-2 border-sub-color w-full" />
        </div>
      </div>
    </main>
  );
}
