"use client"
import { Card } from 'flowbite-react'
import ToggleDarkMode from './ToggleDarkMode'
import { GetMainSocialStats } from '@/lib/service'
import { useEffect, useState } from 'react'

const TitleCard = () => {
  const [totalFollowers, setTotalFollowers] = useState(0);

  const displayData = async () => {
   const data = await GetMainSocialStats();
   console.log(data);
   let total = 0;
   for(let i = 0; i < data.length; i++){
    total += data[i].followerCount;
   }
   setTotalFollowers(total);
   console.log(total)
  }

  useEffect(() => {
    displayData();

  }, [])
  return (
    
    <Card className="rounded-t-none rounded-b-3xl pb-30 -z-10">
        <main className="flex flex-row justify-between items-center pt-4 px-30">
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