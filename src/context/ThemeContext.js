import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const toggleTheme = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };



    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <div className={`theme ${mode}`}>   {children}</div>
        </ThemeContext.Provider>
    );
};