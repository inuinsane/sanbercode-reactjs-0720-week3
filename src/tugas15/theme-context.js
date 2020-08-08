import React from 'react';

export const themes = {
    dark: {
        background: "black",
        color: "white"
    }, 
    light: {
        background: "white",
        color: "black"
    }
}


export const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;