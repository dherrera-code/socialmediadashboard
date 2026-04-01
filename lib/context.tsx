'use client'

import { createContext, ReactNode, useContext, useState } from "react"
import { SocialDataContextType, SocialOverall } from "./interface"

const SocialDataContext = createContext<SocialDataContextType | undefined>(undefined);

export function DataProvider({children }: {children: ReactNode }){
    const [socialData, setSocialData] = useState<any>(null)

    return (
        <SocialDataContext.Provider value={{socialData, setSocialData}} >
            {children}
        </SocialDataContext.Provider>
    )
}

export function useSocialData() {
    const context = useContext(SocialDataContext);

    if (context === undefined) {
        throw new Error("Oops!");
    }
    return context;
}