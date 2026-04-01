'use client'
import { Card } from 'flowbite-react'
import ToggleDarkMode from './ToggleDarkMode'
import { GetMainSocialStats } from '@/lib/service'
import { useEffect, useState } from 'react'
import { useSocialData } from '@/lib/context'


const TitleCard = () => {
  const [totalFollowers, setTotalFollowers] = useState(0);
  const {setSocialData} = useSocialData()

  const displayData = async () => {
   const data = await GetMainSocialStats();
   setSocialData(data)

   let total = 0;
   for(let i = 0; i < data.length; i++){
    total += data[i].followerCount;
   }
   setTotalFollowers(total);
  }

  useEffect(() => {
    displayData();

  }, [])
  // grid grid-cols-1 lg:grid-cols-2
  // flex flex-col flex-wrap
  return (
    
    <Card className="rounded-t-none rounded-b-3xl pb-30 -z-10 shadow-3xs bg-slate-100">
        <main className="grid grid-cols-1 md:grid-cols-2 pt-4 px-12 sm:px-20 md:px-30">
          <div>
            <h1 className="text-3xl font-semibold dark:text-white">Social Media Dashboard</h1>
            <p className="dark:text-gray-400">Total Followers: {totalFollowers}</p>
          </div>

          <ToggleDarkMode />

        </main>
      </Card>
  )
}

export default TitleCard