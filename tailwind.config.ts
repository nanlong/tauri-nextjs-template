import type { Config } from "tailwindcss";

export default {
  content: [
    "./src-nextjs/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src-nextjs/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src-nextjs/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
