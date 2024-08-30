
const colors = require('tailwindcss/colors')
const indielayer = require('@indielayer/ui/tailwind.preset')

const blue = {
  "50": "#e1eef7",
  "100": "#b4d5ea",
  "200": "#82b9dd",
  "300": "#509ccf",
  "400": "#2b87c4",
  "500": "#0572ba",
  "600": "#046ab3",
  "700": "#045fab",
  "800": "#0355a3",
  "900": "#014294",
  "950": "#bfd7ff",
};

const green = {
  "50": "#e6f6eb",
  "100": "#c0e9ce",
  "200": "#96daae",
  "300": "#6bcb8d",
  "400": "#4cbf74",
  "500": "#2cb45c",
  "600": "#27ad54",
  "700": "#21a44a",
  "800": "#1b9c41",
  "900": "#108c30",
  "950": "#beffcc",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // load indielayer ui presets
  presets: [indielayer()],
  // allow PurgeCSS to analyze components
  content: [
    './index.html',
    './app.vue',
    './**/*.vue',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/@indielayer/ui/{lib,src}/**/*',
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {
      colors: {
        primary: blue,
        secondary: green,
        success: colors.green,
        warning: colors.yellow,
        error: colors.red,
      },
    },
  },
  plugins: [
    ({ matchUtilities, theme /* … */ }) => {
      // …
      matchUtilities(
        // https://gist.github.com/olets/9b833a33d01384eed1e9f1e106003a3b
        {
          'aspect': (value) => ({
            '@supports (aspect-ratio: 1 / 1)': {
              aspectRatio: value,
            },
            '@supports not (aspect-ratio: 1 / 1)': {
              // https://github.com/takamoso/postcss-aspect-ratio-polyfill

              '&::before': {
                content: '" "',
                float: 'left',
                paddingTop: `calc(100% / (${value}))`,
                /* position: 'absolute', */
              },
              '&::after': {
                clear: 'left',
                content: '" "',
                display: 'block',
                /* position: 'absolute', */
              }
            },
          }),
        },
        { values: theme('aspectRatio') }
      )
    },
  ],
}
