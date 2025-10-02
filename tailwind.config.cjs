module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Official brand colors from tanzderkulturen_brandguidelines.pdf
      colors: {
        brand: {
          // Primary Brand Colors
          'teal-primary': '#027d8f',     // R=2 G=125 B=143
          'green-primary': '#09be9c',    // R=9 G=190 B=156
          'green-light': '#83d374',      // R=131 G=211 B=116
          'lime': '#c6e12e',             // R=198 G=225 B=46
          'yellow': '#faf070',           // R=250 G=240 B=112
          'dark': '#0f0a0a',             // R=15 G=10 B=10
          'light': '#f5edef',            // R=245 G=237 B=239
        },
        secondary: {
          // Secondary Brand Colors
          'green': '#56a23c',            // R=86 G=162 B=60
          'green-dark': '#175600',       // R=23 G=86 B=0
          'blue': '#3a91c1',             // R=58 G=145 B=193
          'blue-dark': '#243179',        // R=36 G=49 B=121
          'orange': '#ff5715',           // R=255 G=87 B=21
          'brown': '#8a3a31',            // R=138 G=58 B=49
          'purple': '#aa8bf7',           // R=170 G=139 B=247
          'purple-dark': '#4f1f5b',      // R=79 G=31 B=91
          'red': '#d00d1e',              // R=208 G=13 B=30
          'red-dark': '#820010',         // R=130 G=0 B=16
        },
        cultural: {
          // Quick access brand shortcuts
          primary: '#027d8f',    // Main teal
          accent: '#c6e12e',     // Lime green
          warm: '#ff5715',       // Orange
          neutral: '#0f0a0a',    // Dark
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif'],
        tussilago: ['Tussilago', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
