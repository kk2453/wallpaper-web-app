import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-full bg-[url('/wallpaper-background-image2.jpg')] bg-bottom bg-cover">
      <Head>
        <title></title>
        <meta />
        <link rel="" href="" />
      </Head>

      
      <header className="flex justify-between item-center h-[70px] px-5 py-4">
        <div>hm</div>
        <div>Wallpaper</div>
        <div className="rounded-2xl bg-white px-3 py-2">Sign in</div>
      </header>

      <main className="">
        <p>Placeholder for main</p>
      </main>

      <footer>
        <p>Placeholder for footer</p>
      </footer>
    </div>
  );
}
