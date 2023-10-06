import Image from "next/image";
import Icon from "../../../../public/summarizeMe.png";
import LoginForm from "../../sign/sign-in/form";

const metadata = {
  title: "SummarizeMe ログイン",
  description: "ログインページ",
};

const Home = () => {

  return (
    <main className="flex min-h-screen">
      <div className="w-1/3 bg-main-color flex flex-col items-center justify-center">
        <Image src={Icon} alt="SummarizeMe logo" className="h-40 text-sub-color" />
        <p className="text-5xl text-sub-color">SummarizeMe</p>
      </div>
      <div className="w-2/3 bg-gradient-to-b from-grad-start via-grad-via to-grad-end flex items-center justify-center">
        <div className="p-10 w-full max-w-2xl mx-3 md:mx-0">
          <h1 className="text-2xl text-sub-color font-bold mb-10 text-center flex justify-center items-center space-x-4">
            <hr className="border-2 border-sub-color w-1/3" />
            <span className="text-5xl">ログイン</span>
            <hr className="border-2 border-sub-color w-1/3" />
          </h1>
          <LoginForm />
          <div className="flex justify-center w-full">
            <a href="#" className="text-center text-sub-color border-b-2">
              新規登録はこちら
            </a>
          </div>
          <hr className="mt-5 border-2 border-sub-color w-full" />
        </div>
      </div>
    </main>
  );
};
export { metadata };
export default Home;
