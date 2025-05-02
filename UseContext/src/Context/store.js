import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =()=>{
    const[Theme, setTheme]=useState("light")
    const toggleTheme=()=>{
        Theme==="light"?document.body.style.backgroundColor="#fff":document.body.style.backgroundColor="#000"
    }
}