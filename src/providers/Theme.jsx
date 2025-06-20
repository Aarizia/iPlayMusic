import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function Theme({ children }) {
    
    const themeAsString = localStorage.getItem('theme') ?? 'light';
    const [currentTheme, setCurrentTheme] = useState(themeAsString);
    
    useEffect(() => {
        if (currentTheme === 'dark') {
            document.body.classList.add('darkmode');
            document.body.classList.remove('lightmode');
        } else {
            document.body.classList.add('lightmode');
            document.body.classList.remove('darkmode');
        }
    }, [])
    
    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
