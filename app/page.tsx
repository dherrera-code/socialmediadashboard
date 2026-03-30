import OverviewCards from "@/components/OverviewCards";
import SocialCards from "@/components/SocialCards";
import TitleCard from "@/components/TitleCard";

export default function Home() {

  return (
    <div className="overflow-hidden bg-zinc-50 font-sans dark:bg-[#1e202a]">
      <TitleCard />

      <div className="relative -top-28 px-36">

        {/* Social Platform Overall Stats */}
        <SocialCards />

        {/* Overview from Today for views and Likes! */}
        <OverviewCards />

      </div>

    </div>
  );
}
