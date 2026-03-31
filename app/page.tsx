import OverviewCards from "@/components/OverviewCards";
import SocialCards from "@/components/SocialCards";
import TitleCard from "@/components/TitleCard";

export default function Home() {

  return (
    <div className="overflow-hidden bg-zinc-50 font-sans dark:bg-[#1e202a]">
      
      <TitleCard />
{/* px-10 sm:px-20 md:px-30 */}
      <div className="relative -top-28 px-16 sm:px-26 md:px-36">

        {/* Social Platform Overall Stats */}
        <SocialCards />

        {/* Overview from Today for views and Likes! */}
        <OverviewCards />

      </div>

    </div>
  );
}
