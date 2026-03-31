"use client"
import { DailyOverview } from '@/lib/interface'
import { GetDailySocialStats } from '@/lib/service'
import { Card } from 'flowbite-react'
import { useEffect, useState } from 'react'

const OverviewCards = () => {
    const [dailyData, setDailyData] = useState<DailyOverview[] | null>(null)

    const displayData = async () => {
        const data = await GetDailySocialStats();

        console.log(data);
        setDailyData(data)
    }

    useEffect(() => {
        displayData();
    }, [])

    return (

        <div className="pt-12">
            <h1 className="font-semibold text-3xl pb-5">Overview - Today</h1>
            {/* Map out our cards here! */}
            <div className="grid grid-cols-4 gap-10">
                {
                    dailyData?.map((item, idx) => (
                        <Card key={idx} className='bg-[#F0F2FA] hover:bg-[#E1E4F0] dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                            <div className='flex flex-row justify-between items-center'>
                                <h5>{item.viewsOrLikes}</h5>
                                <img src={`/images/icon-${item.socialMedia}.svg`} alt={item.socialMedia + " icon!"} />
                            </div>
                            <div className='flex justify-between items-end'>
                                <h5 className='text-3xl font-semibold'>{item.amounts}</h5>
                                <div className='flex items-center gap-1 '>
                                    <img className='w-2.5 h-fit' src={`/images/icon-${item.trendingPercentage > 0 ? "up" : "down"}.svg`} alt="Up Icon@" />
                                    <p className={`text-[12px] ${item.trendingPercentage > 0 ? "text-green-400" : "text-red-600"} `}>{item.trendingPercentage > 0 ? item.trendingPercentage : item.trendingPercentage * -1 }%</p>
                                </div>
                            </div>
                        </Card>
                    ))
                }         
            </div>
        </div>

    )
}

export default OverviewCards