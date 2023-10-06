import Image from "next/image";
import React from "react";
import Link from "next/link";
import Icon from "../../public/images/SummarizeMeLogo.png";

export const metadata = {
  title: "SummarizeMe ログイン",
  description: "テスト用ページ",
};

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <Link className="bg-white" href="./summarizeMe/sign/sign-in/">
        ログイン
      </Link>
      <Link className="bg-white" href="./summarizeMe/sign/sign-up/">
        新規登録
      </Link>
      <Link className="bg-white" href="./summarizeMe/in/vote-list">
        投票一覧
      </Link>
      <Link className="bg-white" href="./summarizeMe/in/room-list/">
        部屋一覧
      </Link>
    </main>
  );
}
