'use client'
import { ToggleSwitch } from 'flowbite-react'
import React, { useState } from 'react'

const ToggleDarkMode = () => {

    const [lightModeBool, setLightModeBool] = useState(true)

    const handleToggleChange = () => {
        setLightModeBool(!lightModeBool)
        console.log(lightModeBool)
    }

    return (
        <div>
            <div className='flex flex-row'>

                <label className='pe-3' htmlFor="toggleswitch">Dark Mode</label>
                <ToggleSwitch className='' checked={lightModeBool} onChange={handleToggleChange} />
            </div>
            {/* <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <span className="select-none ms-3 text-sm font-medium text-heading">Dark Mode</span>
                <div className="relative w-9 h-5 bg-neutral-quaternary peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
            </label> */}

        </div>
    )
}

export default ToggleDarkMode