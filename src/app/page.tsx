import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="bg-white" href="./summarizeMe/in/vote-list">
        投票一覧
      </Link>
      <Link className="bg-white" href="./summarizeMe/in/room-list/">
        部屋一覧
      </Link>
    </main>
  );
}
