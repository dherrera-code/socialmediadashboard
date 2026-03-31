import { Card } from 'flowbite-react'
import React from 'react'

const OverviewCards = () => {

    
    return (

        <div className="pt-12">
            <h1 className="font-semibold text-3xl pb-5">Overview - Today</h1>
            {/* Map out our cards here! */}
            <div className="grid grid-cols-4 gap-10">
                {/* Facebook! */}
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Page Views</h5>
                        <img src="/images/icon-facebook.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-up.svg" alt="Up Icon@" />
                            <p className='text-green-400 text-[12px]'>3%</p>
                        </div>
                    </div>
                </Card>
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Likes</h5>
                        <img src="/images/icon-facebook.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-down.svg" alt="Up Icon@" />
                            <p className='text-red-500 text-[12px]'>52%</p>
                        </div>
                    </div>
                </Card>
                {/* Instagram */}
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Likes</h5>
                        <img src="/images/icon-instagram.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-up.svg" alt="Up Icon@" />
                            <p className='text-green-400 text-[12px]'>3%</p>
                        </div>
                    </div>
                </Card>
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Profile Views</h5>
                        <img src="/images/icon-instagram.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-up.svg" alt="Up Icon@" />
                            <p className='text-green-400 text-[12px]'>3%</p>
                        </div>
                    </div>
                </Card>
                {/* twitter */}
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Retweets</h5>
                        <img src="/images/icon-twitter.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-up.svg" alt="Up Icon@" />
                            <p className='text-green-400 text-[12px]'>3%</p>
                        </div>
                    </div>
                </Card>
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Likes</h5>
                        <img src="/images/icon-twitter.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-up.svg" alt="Up Icon@" />
                            <p className='text-green-400 text-[12px]'>3%</p>
                        </div>
                    </div>
                </Card>
                {/* youtube */}
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Likes</h5>
                        <img src="/images/icon-youtube.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-up.svg" alt="Up Icon@" />
                            <p className='text-green-400 text-[12px]'>3%</p>
                        </div>
                    </div>
                </Card>
                <Card className='dark:bg-[#252A41] hover:dark:bg-[#3a4164]'>
                    <div className='flex flex-row justify-between items-center'>
                        <h5>Total Views</h5>
                        <img src="/images/icon-youtube.svg" alt="" />
                    </div>
                    <div className='flex justify-between items-end'>
                        <h5 className='text-3xl font-semibold'>87</h5>
                        <div className='flex items-center gap-1 '>
                            <img className='w-2.5 h-fit' src="/images/icon-up.svg" alt="Up Icon@" />
                            <p className='text-green-400 text-[12px]'>3%</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

    )
}

export default OverviewCards