import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoTitle from "../../../../public/images/logo-title.png";
import PersonIcon from "../../../../public/images/person-icon.png";
import eccPoster from "../../../../public/images/ecc-poster.png";
import RankingTitle from "../../../../public/images/ranking-title.png";
import UserIcon1 from "../../../../public/images/user_icon1.png";
import PickUpTitle from "../../../../public/images/pick-up-title.png";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-[12vh] w-full bg-main-color">
        <div className="h-3/5 w-full flex justify-between items-center">
          <Image src={LogoTitle} alt="" />
          <Image
            className="mr-2"
            src={PersonIcon}
            alt=""
            width={50}
            height={50}
          />
        </div>
        <div className="h-2/5 w-full flex items-end">
          <div className="flex items-end ml-2 text-sub-color">
            <Link href="/summarizeMe/in/room-list">
              <p className="mx-5 pb-1 px-2 text-lg font-bold h-full border-b-4 border-sub-color">
                バトルルーム一覧
              </p>
            </Link>
            <Link href="/summarizeMe/in/vote-list">
              <p className="mx-5 pb-1 px-2 text-lg font-bold h-full border-b-4 border-sub-color">
                投票一覧
              </p>
            </Link>
            <p className="mx-5 pb-1 px-2 text-lg font-bold h-full border-b-4 border-sub-color">
              記事一覧
            </p>
          </div>
        </div>
      </header>

      <main className="w-full mt-8 mx-auto flex justify-between text-main-color">
        <div className="w-1/6">
          <div className="bg-sub-color border-[10px] border-origin-sky-blue rounded-3xl w-11/12 h-[400px] mx-auto flex flex-col items-center">
            <Image src={RankingTitle} alt="" />
            <div className="w-full h-full flex flex-col items-center">
              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">1.</p>
                <Image
                  src={UserIcon1}
                  alt="SummarizeMe logo"
                  className="rounded-full mx-2"
                  width={40}
                />
                <div className="font-bold">
                  <p className="">ルーム製作者名</p>
                  <p className="text-center">2000p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">2.</p>
                <Image
                  src={UserIcon1}
                  alt="SummarizeMe logo"
                  className="rounded-full mx-2"
                  width={40}
                />
                <div className="font-bold">
                  <p className="">ルーム製作者名</p>
                  <p className="text-center">2000p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">3.</p>
                <Image
                  src={UserIcon1}
                  alt="SummarizeMe logo"
                  className="rounded-full mx-2"
                  width={40}
                />
                <div className="font-bold">
                  <p className="">ルーム製作者名</p>
                  <p className="text-center">2000p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">4.</p>
                <Image
                  src={UserIcon1}
                  alt="SummarizeMe logo"
                  className="rounded-full mx-2"
                  width={40}
                />
                <div className="font-bold">
                  <p className="">ルーム製作者名</p>
                  <p className="text-center">2000p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">5.</p>
                <Image
                  src={UserIcon1}
                  alt="SummarizeMe logo"
                  className="rounded-full mx-2"
                  width={40}
                />
                <div className="font-bold">
                  <p className="">ルーム製作者名</p>
                  <p className="text-center">2000p</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/6 flex justify-center">{children}</div>

        <div className="w-1/6 flex flex-col items-center">
          <Image src={eccPoster} alt="" width={250} height={250} />
          <div className="bg-sub-color w-[250px] mt-4 p-2 border-[10px] border-origin-sky-blue rounded-3xl">
            <Image src={PickUpTitle} alt="" className="mb-2" />
            <p>１円玉を作るのには３円かかる。</p>
          </div>
        </div>
      </main>
    </>
  );
}
