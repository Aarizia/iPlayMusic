import { createContext, useState } from "react";

export const IsPlayingContext = createContext();

export default function IsPlaying({ children }) {

    const [isPlaying, setIsPlaying] = useState('');

    return (
        <IsPlayingContext.Provider value={{ isPlaying, setIsPlaying }}>
            {children}
        </IsPlayingContext.Provider>
    )

}