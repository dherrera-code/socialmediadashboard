'use client'
import { ToggleSwitch, createTheme } from 'flowbite-react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react'

const ToggleDarkMode = () => {
    // const [lightMode, setlightMode] = useState<"light" | "dark" >("light")
    const { theme, setTheme } = useTheme()
    const [isDarkOn, setIsDarkOn] = useState(true)

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        (theme == "dark") ? setIsDarkOn(true) : setIsDarkOn(false)
    }

    const customTheme = {
        toggle: {
            base: "relative flex items-center rounded-full bg-gray-200", // Off state background
            checked: {
                on: "bg-linear-to-r from-blue-400 to-green-400 after:bg-white", // Background color when ON
                off: "bg-linear-to-r from-blue-400 to-green-400 after:bg-gray-700", // Background color when OFF
            },
        }
    };

    useEffect(() => {
        setIsDarkOn(theme == "light");
    })

    return (

        <div>

            <hr className='md:hidden display mt-5 ' />
            <div className='flex sm:pt-5 justify-between md:justify-end'>

                <label className='sm:pe-3  text-black dark:text-gray-400' htmlFor="ToggleSwitch">Dark Mode</label>
                <div className=''>
                    <ToggleSwitch sizing='lg' color='lime' theme={customTheme} checked={isDarkOn} onChange={handleTheme} />
                </div>
            </div>
        </div>
        
    )
}

export default ToggleDarkMode