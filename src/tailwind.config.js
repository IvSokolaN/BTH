/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: 'var(--primary-color)',
                secondaryColor: 'var(--secondary-color)',
            },
            backgroundImage: {
                'expand-down': "url('/img/expand_down.svg')",
            }
        }
    },
    plugins: [],
}

