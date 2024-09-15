import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollSnapType: {
        'y': 'y mandatory',
      },
      scrollSnapAlign: {
        'start': 'start',
      },
      height: {
        'screen-100': '100vh',
      },
      overflow: {
        'y-scroll': 'scroll',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "50%":{ width: "100%"},
          "75%, 100%": {
            width: "100%"
          }
        },

        typingonce: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation:{
        typing: "typing 4s steps(16) infinite alternate, blink 1s infinite",
        typingonce: "typingonce 4s steps(32) alternate, blink 1s infinite",
        typingonce1: "typingonce 2s steps(16) alternate, blink 1s infinite",
        blink: "blink 1s infinite"
      },
       
    },
  },
  plugins: [
    require("daisyui")
  ],
};
export default config;
