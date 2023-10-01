import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Draft.js with Next</title>
        <meta name="description" content="Draft.js with Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="bg-blue-400 text-blue-100 text-2xl font-bold">Draft.js with Next</h1>
        <Link href="./markdown">こちら</Link> <br />
        <Link href="./comparison">こちら</Link>
      </main>
    </div>
  );
}
