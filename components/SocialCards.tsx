'use client'
import { SocialOverall } from '@/lib/interface'
import { GetMainSocialStats } from '@/lib/service'
import { Card } from 'flowbite-react'
import { useEffect, useState } from 'react'

const SocialCards = () => {

  const [data, setData] = useState<SocialOverall[] | null>(null)

  const getData = async () => {
    const data = await GetMainSocialStats();
    setData(data);
  }

  // create a function to test what social media is getting mapped out
  const handleSocialImage = (socialMedia: string) => {

    if (socialMedia == "facebook" || socialMedia == "twitter") return "!border-blue-300 border-t-4 border-x-0 border-b-0"

    if (socialMedia == "youtube") return "border-t-4 border-x-0 border-b-0 !border-red-600"

    return ""
  }

  const handleFollowerCount = (count: number) => {
    let countString = count.toString()

    if(count > 10000){
      console.log(countString)
      // 10 000
      countString = countString.slice(0, countString.length - 3)
      console.log(countString + "K")
      countString = countString + "k";
    }
    return countString;
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_400fr))] gap-10 z-10 ">

      {data?.map((item, idx) => (
        <div key={idx} className={(item.socialMedia == "instagram") ? "pt-1 h-5 bg-gradient-to-r from-[#FCB045] via-[#FD1D1D] to-[#833AB4] rounded-lg" : "pt-1"}>

          <Card className={`bg-[#F0F2FA] hover:bg-[#E1E4F0] dark:bg-[#252A41] hover:dark:bg-[#3a4164] cursor-pointer ${handleSocialImage(item.socialMedia)}`}>
            <div className="flex justify-center items-center">
              <img className="w-7" src={`/images/icon-${item.socialMedia}.svg`} alt={item.socialMedia + " Logo!"} />
              <p className="ps-3 text-sm dark:text-gray-400">{item.username}</p>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="text-6xl font-bold">{handleFollowerCount(item.followerCount)}</h1>
              <p className="text-gray-400">F O L L O W E R S</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img className="w-3 h-fit" src={`/images/icon-${item.addedFollowers > 0 ? "up" : "down"}.svg`} alt="Up trending!" />
              <p className={item.addedFollowers > 0 ? "text-green-400" : "text-red-500"}>{item.addedFollowers > 0 ? item.addedFollowers : item.addedFollowers * -1} Today</p>
            </div>
          </Card>
        </div>

      ))}

    </div>
  )
}

export default SocialCards