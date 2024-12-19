const mix = require("laravel-mix");


console.log('Entry file:', 'resources/js/app.js');
console.log('Output folder:', 'public/js');

mix.js("resources/js/app.js", "public/js")
    .react()
    .sass("resources/sass/app.scss", "public/css").postCss('resources/css/app.css', 'public/css', [
       require('tailwindcss'),
   ]);
