import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-red-500 via-red-500 to-green-500">
      <div className="absolute mx-auto top-1/2 -translate-y-1/2 w-[36rem] h-[36rem] shadow-xl shadow-red-500 rounded-full bg-green-300 opacity-60 blur-[10rem]" />
      <h1
        className={`${anton.className} text-center text-9xl text-green-300 drop-shadow-md`}
      >
        Christmas Family <br /> Fortune
      </h1>
    </main>
  );
}
