'use client'
import { Button, DarkThemeToggle, ToggleSwitch, useThemeMode } from 'flowbite-react'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ToggleDarkMode = () => {
    const { setTheme } = useTheme()

    // const handleTheme = (themeString: string) => {
    //     setTheme(themeString)
    //     console.log(themeString)
    // }

    return (
        <div>
            <div className='flex flex-row'>

                <label className='pe-3 text-black dark:text-white' htmlFor="toggleswitch">Dark Mode</label>
                {/* <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className=''>Toggle Mode Here</Button> */}

                <Button onClick={() => setTheme("light")}>
                    Light
                </Button>
                <Button onClick={() => setTheme("dark")}>
                    Dark
                </Button>
                <Button onClick={() => setTheme("system")}>
                    System
                </Button>
                <div className="bg-white dark:bg-black text-black dark:text-white p-4">
                    Test block
                </div>
            </div>


        </div>
    )
}

export default ToggleDarkMode