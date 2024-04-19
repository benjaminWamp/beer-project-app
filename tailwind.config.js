/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
    content: [
        "./resources/**/*.blade.php",
        './resources/**/*.{js,jsx,ts,tsx}',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        'node_modules/flowbite-react/lib/esm/**/*.js',
            ],
    theme: {
        colors: {
            primary: "#715315",
            secondary: "#F8E7BC",
            accent: "#514339",
            background: "#f6f5f0",
            offWhite: "f6f7f7",
            table: "#e8e5d9",
            black: "#161616",
            blue: colors.blue,
            cyan: colors.cyan,
            emerald: colors.emerald,
            fuchsia: colors.fuchsia,
            gray: colors.trueGray,
            blueGray: colors.blueGray,
            coolGray: colors.coolGray,
            //trueGray: colors.trueGray,
            warmGray: colors.warmGray,
            green: colors.green,
            indigo: colors.indigo,
            lime: colors.lime,
            orange: colors.orange,
            pink: colors.pink,
            purple: colors.purple,
            red: colors.red,
            rose: colors.rose,
            sky: colors.sky,
            teal: colors.teal,
            violet: colors.violet,
            yellow: colors.amber,
            white: colors.white,
        },
        fontFamily: {
            sans: ["Nunito", "sans-serif"],
            serif: ["Merriweather", "serif"],
            title: ["QTGraveure", "serif"],
        },
        extend: {
            backgroundImage: {
                'headerHome': "url('contact-bg.png')",
            }
        }
    },
    plugins: [require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'),],
};
