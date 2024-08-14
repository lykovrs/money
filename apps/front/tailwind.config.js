const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      // screen breakpoints
      xs: "375px",
      sm: "640px",
      md: "768px",
      md2: "875px",
      lg: "1050px",
      lg1: "1130px",
      lg2: "1204px",
      xl: "1355px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        "fluent-bg": "#EDF5F8",
      },
    },
    colors: {
      purple: {
        20: "#F6F3FE",
        40: "#DBD2FC",
        60: "#B7A4F9",
        80: "#9276F7",
        100: "#5418FF",
        200: "#491DE8",
        300: "#451BDC",
        400: "#3916B7",
        500: "#2D1193",
      },
      teal: {
        20: "#F7FEFF",
        40: "#DFFCFE",
        60: "#B0FAFF",
        80: "#A4F5FD",
        100: "#79F0FC",
        200: "#6BE8F8",
        300: "#5FD0DD",
        400: "#55BCC9",
        500: "#1D3C3F",
      },
      "light-purple": {
        20: "#F8F3FE",
        40: "#E4D2FC",
        60: "#CAA5F9",
        80: "#B077F7",
        100: "#8025F5",
        200: "#7A23E9",
        400: "#601BB8",
        500: "#4D1593",
      },
      blue: {
        20: "#F5FCFF",
        40: "#DDF3FE",
        60: "#BBE7FC",
        80: "#9CDDFB",
        100: "#67C6FA",
        200: "#53B8F9",
        300: "#4CAAE8",
        400: "#38C9FF",
        500: "#1D4A64",
      },
      black: {
        100: "#212121",
      },
    },
  },
  plugins: [],
};


