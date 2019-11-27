/*According to my Laravel project structure:
 |
 |/laravel
 |/public_html
 |
 |I've successfully configured the laravel-mix using the following code
 |
 */

let mix = require('laravel-mix');
let path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath(`..${path.sep}public_html`);

mix.js('resources/assets/js/app.js', 'js/app.js')
   .sass('resources/assets/sass/app.scss', 'css/app.css');
   
   
