"use client"
import { League_Spartan } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const spartan = League_Spartan({
    subsets: ["latin"],
    weight: ["400", "600"],
    variable: "--font-spartan",
});

const theme = createTheme({
    typography: {
        fontFamily: spartan.style.fontFamily,
    },
});

export default theme;
