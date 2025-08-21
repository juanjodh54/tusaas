/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{ brand:"#2563eb", text:"#0f172a", muted:"#64748b", bg:"#f8fafc" },
      borderRadius:{ xl:"14px" },
      boxShadow:{ soft:"0 8px 24px rgba(2,6,23,.08)" }
    },
  },
  plugins: [],
};
