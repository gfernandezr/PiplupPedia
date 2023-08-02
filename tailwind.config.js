/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
  content: [

    './public/**/*.html',

    './src/**/*.{js,jsx,ts,tsx,vue}',

  ],
  safelist: [
    'bg-[#ff0000]',
    'bg-[#00ff00]',
    'bg-[#0000ff]',
    'bg-[#FFFF00]',
    'bg-[#ff00ff]',
    'bg-[#00ffff]',
    'bg-[#D2C21A]',
    'bg-[#A0A0A0]',
    'bg-[#00B3F5]',
    'bg-[#B80000]',
    'bg-[#0D00B8]',
    'bg-[#11B800]',
    'bg-[#FF7200]',
    'bg-[#4B9C0A]',
    'bg-[#6077FF]',
    'bg-[#FC72E4]',
    'bg-[#6B6B6B]',
    'bg-[#D19A19]',
    'bg-[#B8B8B8]',
    'bg-[#424242]',
    'bg-[#F2F2F2]',
    'bg-[#1f476c]',
    'bg-[#d22b45]',
    'bg-[#D4400F]',
    'bg-[#008CB3]',
    'bg-[#F5941D]',
    'bg-[#b43deb]',
    'bg-[#452600]',
    'bg-[#230c2e]',
    'bg-[#fff836]',
    'bg-[#9e6237]',
    'bg-[#00A0E9]',
    'bg-[#e5005a]',
  ]
  
  
}
