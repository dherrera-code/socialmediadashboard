'use client'
import { SocialOverall } from '@/lib/interface'
import { GetMainSocialStats } from '@/lib/service'
import { Card } from 'flowbite-react'
import { useEffect, useState } from 'react'

const SocialCards = () => {

  const [data, setData] = useState<SocialOverall[] | null>(null)

  const getData = async () => {
    const data = await GetMainSocialStats();
    console.log(data);
    setData(data);
    console.log(data[0].username)
  }

  // create a function to test what social media is getting mapped out
  const handleSocialImage = (socialMedia: string) => {

    if (socialMedia == "Facebook" || socialMedia == "Twitter") return "!border-blue-300 border-t-4 border-x-0 border-b-0"

    if (socialMedia == "Youtube") return "border-t-4 border-x-0 border-b-0 !border-red-600"

    return ""

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="grid grid-cols-4 gap-10 z-10 ">

      {data?.map((item, idx) => (
        <div key={idx} className={(item.socialMedia == "Instagram") ? "pt-1 h-5 bg-gradient-to-r from-[#FCB045] via-[#FD1D1D] to-[#833AB4] rounded-lg" : "pt-1"}>

          <Card className={`dark:bg-[#252A41] hover:dark:bg-[#3a4164] cursor-pointer ${handleSocialImage(item.socialMedia)}`}>
            <div className="flex justify-center items-center">
              <img className="w-7" src={`/images/icon-${item.socialMedia}.svg`} alt={item.socialMedia + " Logo!"} />
              <p className="ps-3 text-sm dark:text-gray-400">{item.username}</p>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="text-6xl font-bold">{item.followerCount}</h1>
              <p className="text-gray-400">F O L L O W E R S</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img className="w-3 h-fit" src={`/images/icon-${item.addedFollowers > 0 ? "up" : "down"}.svg`} alt="Up trending!" />
              <p className={item.addedFollowers > 0 ? "text-green-400" : "text-red-500"}>{item.addedFollowers > 0 ? item.addedFollowers : item.addedFollowers * -1} Today</p>
            </div>
          </Card>
        </div>

      ))}
      {/* 
          <Card className="dark:bg-[#252A41] hover:dark:bg-[#3a4164] cursor-pointer border-t-4 border-x-0 border-b-0 !border-blue-300">
            <div className="flex justify-center items-center">
              <img className="w-7" src="/images/icon-facebook.svg" alt="Facebook Logo!" />
              <p className="ps-3 text-sm dark:text-gray-400">username here!</p>
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

          <Card className="dark:bg-[#252A41] hover:dark:bg-[#3a4164] cursor-pointer border-t-4 border-x-0 border-b-0 !border-blue-300">
            <div className="flex justify-center items-center">
              <img className="w-7" src="/images/icon-twitter.svg" alt="Twitter Logo!" />
              <p className="ps-3 text-sm dark:text-gray-400">@dantheman</p>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="text-6xl font-bold">1044</h1>
              <p className="text-gray-400">F O L L O W E R S</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img className="w-3 h-fit" src="/images/icon-up.svg" alt="Up trending!" />
              <p className="text-green-400">42 Today</p>
            </div>
          </Card>

          <div className="pt-1 h-5 bg-gradient-to-r from-[#FCB045] via-[#FD1D1D] to-[#833AB4] rounded-lg">
          <Card className="dark:bg-[#252A41] hover:dark:bg-[#3a4164]">
            <div className="flex justify-center items-center">
              <img className="w-7" src="/images/icon-instagram.svg" alt="Instagram Logo!" />
              <p className="ps-3 text-sm dark:text-gray-400">@dantheman</p>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="text-6xl font-bold">11k</h1>
              <p className="text-gray-400">F O L L O W E R S</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img className="w-3 h-fit" src="/images/icon-up.svg" alt="Up trending!" />
              <p className="text-green-400">1205 Today</p>
            </div>
          </Card>
          </div>

          <Card className="dark:bg-[#252A41] hover:dark:bg-[#3a4164] cursor-pointer border-t-4 border-x-0 border-b-0 !border-red-600">
            <div className="flex justify-center items-center">
              <img className="w-7" src="/images/icon-youtube.svg" alt="Youtube Logo!" />
              <p className="ps-3 text-sm dark:text-gray-400">DanTheMan</p>
            </div>
            <div className="flex flex-col justify-center items-center py-2">
              <h1 className="text-6xl font-bold">9587</h1>
              <p className="text-gray-400">S U B S C R I B E R S</p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <img className="w-3 h-fit" src="/images/icon-down.svg" alt="Up trending!" />
              <p className="text-red-400">124 Today</p>
            </div>
          </Card> */}

    </div>
  )
}

export default SocialCards