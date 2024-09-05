import { orange, purple } from "@mui/material/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'phone': '600px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    colors: {
      purple: 'hsl(240,67%,8%)',
      white: '#fff',
      transparent: 'transparent',
      gray: 'hsla(0,0%,100%,0.75)',
      'dark-gray': 'hsl(240,17%,26%)',
      'light-gray': 'hsl(240,6%,54%)',
      'light-blue': 'hsl(196,83%,93%)',
      yellow: 'hsl(39,88%,73%)',
      'dark-blue': 'hsl(238,99%,66%)',
      blue: 'hsl(222,95%,63%)',
      orange: 'hsl(12,100%,64%)',
      'light-orange': 'hsl(27,75%,70%)',
      'dark-yellow': 'hsl(40,96%,70%)',
      'light-green': 'hsl(168,82%,67%)',
      tabs: {
        'light-blue': 'hsl(194,48%,49%)',
        yellow: 'hsl(33,82%,61%)',
        purple: 'hsl(263,67%,51%)',
        orange: 'hsl(10,63%,51%)',
        'red': 'hsl(2,68%,53%)',
        'dark-orange': 'hsl(17,73%,46%)',
        'light-green': 'hsl(169,73%,44%)',
        blue: 'hsl(222,87%,56%)',
      }
    },
    extend: {
    },
  },
  plugins: [],
};

export default config;
