'use client'
import { ToggleSwitch, createTheme } from 'flowbite-react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react'

const ToggleDarkMode = () => {
    // const [lightMode, setlightMode] = useState<"light" | "dark" >("light")
    const [isDarkOn, setIsDarkOn] = useState(true)
    const { theme, setTheme } = useTheme()

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        (theme == "dark") ? setIsDarkOn(true) : setIsDarkOn(false)
    }

    return (
        <div>
            <div className='flex flex-row'>

                <label className='pe-3 text-black dark:text-gray-400' htmlFor="ToggleSwitch">Dark Mode</label>
                <ToggleSwitch className='' color='lime' checked={isDarkOn} onChange={handleTheme} />
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