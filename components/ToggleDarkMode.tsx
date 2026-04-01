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
                on: "bg-linear-to-r from-blue-400  to-green-400 ", // Background color when ON
                off: "bg-linear-to-r from-blue-400  to-green-400", // Background color when OFF
            },
        },
        handle: "bg-white peer-checked:bg-gray-500",
    };

    useEffect(() => {
        setIsDarkOn(theme == "light");
    })

    return (
        <div>
            <div className='flex flex-row'>

                <label className='pe-3 text-black dark:text-gray-400' htmlFor="ToggleSwitch">Dark Mode</label>
                <ToggleSwitch className='' color='lime' theme={customTheme} checked={isDarkOn} onChange={handleTheme} />
                {/* <Button onClick={() => setTheme("light")}>
                    Light
                </Button>
                <Button onClick={() => setTheme("dark")}>
                    Dark
                </Button>
                <Button onClick={() => setTheme("system")}>
                    System
                </Button> */}
            </div>
        </div>
    )
}

export default ToggleDarkMode