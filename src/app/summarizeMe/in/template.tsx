import Image from "next/image";
import Link from "next/link";
import LogoTitle from "../../../../public/logo-title.png";
import PersonIcon from "../../../../public/person-icon.png";
import Poster from "../../../../public/poster.png";
import RankingTitle from "../../../../public/ranking-title.png";
import UserIcon1 from "../../../../public/user_icon1.png";
import PickUpTitle from "../../../../public/pick-up-title.png";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-[12vh] w-full bg-main-color">
        <div className="h-3/5 w-full flex justify-between items-center">
          <Image src={LogoTitle} alt="" />
          <Image className="mr-2" src={PersonIcon} alt="" width={50} height={50} />
        </div>
        <div className="h-2/5 w-full flex items-end">
          <div className="flex items-end ml-2 text-sub-color">
            <Link href="./room_list">
              <p className="mx-5 pb-1 px-2 text-lg font-bold h-full border-b-4 border-sub-color">バトルルーム一覧</p>
            </Link>
            <Link href="./vote_list">
              <p className="mx-5 pb-1 px-2 text-lg font-bold h-full border-b-4 border-sub-color">投票一覧</p>
            </Link>
            <Link href="./articles_list">
              <p className="mx-5 pb-1 px-2 text-lg font-bold h-full border-b-4 border-sub-color">記事一覧</p>
            </Link>
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
                <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={40} />
                <div className="font-bold">
                  <p className="">くのり　</p>
                  <p className="text-center">2023p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">2.</p>
                <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={40} />
                <div className="font-bold">
                  <p className="">おざわ　</p>
                  <p className="text-center">1987p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">3.</p>
                <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={40} />
                <div className="font-bold">
                  <p className="">うえさか</p>
                  <p className="text-center">1498p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">4.</p>
                <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={40} />
                <div className="font-bold">
                  <p className="">しみず　</p>
                  <p className="text-center">1422p</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <p className="text-3xl font-bold">5.</p>
                <Image src={UserIcon1} alt="SummarizeMe logo" className="rounded-full mx-2" width={40} />
                <div className="font-bold">
                  <p className="">金髪　</p>
                  <p className="text-center">12p</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/6 h-[88vh] flex justify-center">{children}</div>

        <div className="w-1/6 flex flex-col items-center">
          <Image className="p-1" src={Poster} alt="" width={250} height={250} />
          <div className="bg-sub-color w-[230px] mt-4 p-2 border-[10px] border-origin-sky-blue rounded-3xl">
            <Image src={PickUpTitle} alt="" className="mb-2" />
            <p>１円玉を作るのには３円かかる。</p>
          </div>
        </div>
      </main>
    </>
  );
}
