import TitleCard from "@/components/TitleCard";
import { Card } from "flowbite-react";


export default function Home() {
  return (
    <div className="overflow-hidden bg-zinc-50 font-sans dark:bg-[#1e202a]">
      <TitleCard />

      <div className="relative -top-28 px-36">

        {/* Social Platform Overall Stats */}
        <div className="grid grid-cols-4 gap-10 z-10 ">
          <Card className="dark:bg-[#252A41] hover:dark:bg-[#3a4164] cursor-pointer border-t-4 border-x-0 border-b-0 !border-blue-300">

            <div className="flex justify-center items-center">
              <img className="w-7" src="/images/icon-facebook.svg" alt="Instagram Logo!" />
              <p className="ps-3 text-sm dark:text-gray-400">@dantheman</p>
            </div>

            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="text-6xl font-bold">1987</h1>
              <p className="text-gray-400">F O L L O W E R S</p>
            </div>

            <div className="flex justify-center items-center gap-1">
              <img className="w-3 h-fit" src="/images/icon-up.svg" alt="Up trending!" />
              <p className="text-green-400">12 Today</p>
            </div>

          </Card>
          <Card className="dark:bg-[#252A41] border-t-4 border-x-0 border-b-0 !border-blue-300">Card info here~</Card>
          <Card className="dark:bg-[#252A41] border-t-4 border-x-0 border-b-0 !border-[#DF4896]">Card info here~</Card>
          <Card className="dark:bg-[#252A41] border-t-4 border-x-0 border-b-0 !border-red-500">Card info here~</Card>
        </div>

        {/* Overview from Today for views and Likes! */}
        <div className="pt-12">
          <h1 className="font-semibold text-3xl pb-5">Overview - Today</h1>

          <div className="grid grid-cols-4 gap-10">
              <Card className="h-30">Context Herer!</Card>
              <Card>Context Herer!</Card>
              <Card>Context Herer!</Card>
              <Card>Context Herer!</Card>
              <Card className="h-30">Context Herer!</Card>
              <Card>Context Herer!</Card>
              <Card>Context Herer!</Card>
              <Card>Context Herer!</Card>
          </div>
        </div>
      </div>

    </div>
  );
}
