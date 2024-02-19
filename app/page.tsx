import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white items-center justify-between p-24">
      <h1 className="text-[60px]">INTERVIEW NINJA</h1>
      <h2 className="text-[40px]">Practice Interview , Ace the real Ones</h2>
      <Link className="text-2xl w-40 h-10 rounded-md text-black bg-white hover:bg-gray-400 flex justify-center items-center" href="/choose-mode">Start Now</Link> 
    </main>
  );
}
