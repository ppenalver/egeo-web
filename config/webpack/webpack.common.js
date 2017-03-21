const webpack = require('webpack');
const helpers = require('../helpers');

/*
 * Webpack Plugins
 */
const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ngcWebpack = require('ngc-webpack');

/*
 * Webpack Constants
 */
const HMR = helpers.hasProcessFlag('hot');
const AOT = helpers.hasNpmFlag('aot');

/*
 * Webpack configuration
 */
module.exports = function (options) {
   isProd = options.env === 'production';
   return {
      entry: {
         'polyfills': './src/polyfills.ts',
         'main': AOT ? './src/main.aot.ts' : './src/main.ts'
      },
      resolve: {
         alias: {
            'shared': helpers.root('src', 'app', 'shared'),
         },
         extensions: ['.ts', '.js', '.json'],
         modules: [helpers.root('src'), helpers.root('node_modules')],

      },
      performance: {
         hints: false
      },
      module: {

         rules: [{
               test: /\.ts$/,
               use: [{
                     loader: '@angularclass/hmr-loader',
                     options: {
                        pretty: !isProd,
                        prod: isProd
                     }
                  },
                  { // MAKE SURE TO CHAIN VANILLA JS CODE, I.E. TS COMPILATION OUTPUT.
                     loader: 'ng-router-loader',
                     options: {
                        loader: 'async-import',
                        genDir: 'temp/compiled',
                        aot: AOT
                     }
                  },
                  {
                     loader: 'awesome-typescript-loader',
                     options: {
                        configFileName: 'tsconfig.webpack.json'
                     }
                  },
                  {
                     loader: 'angular2-template-loader'
                  }
               ],
               exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
               test: /\.json$/,
               use: 'json-loader'
            },
            {
               test: /\.css$/,
               use: ['to-string-loader', 'css-loader'],
               include: [helpers.root('src', 'app')]
            },
            {
               test: /\.scss$/,
               use: ['to-string-loader', 'css-loader', 'sass-loader'],
               include: [helpers.root('src', 'app')]
            },
            {
               test: /\.html$/,
               use: 'raw-loader',
               exclude: [helpers.root('src/index.html')]
            },
            {
               test: /\.(jpg|png|gif)$/,
               use: 'file-loader'
            },
            {
               test: /\.(ttf|eot|svg|woff|woff2|ico)$/,
               use: 'file-loader?name=assets/fonts/[name].[ext]'
            }
         ],

      },


      plugins: [
         new AssetsPlugin({
            path: helpers.root('target', 'site', 'web'),
            filename: 'webpack-assets.json',
            prettyPrint: true
         }),
         new CheckerPlugin(),
         new CommonsChunkPlugin({
            name: 'polyfills',
            chunks: ['polyfills']
         }),
         // This enables tree shaking of the vendor modules
         new CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['main'],
            minChunks: module => /node_modules/.test(module.resource)
         }),
         // Specify the correct order the scripts will be injected in
         new CommonsChunkPlugin({
            name: ['polyfills', 'vendor'].reverse()
         }),
         new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
            helpers.root('src'), // location of your web
            {
               // your Angular Async Route paths relative to this root directory
            }
         ),
         new CopyWebpackPlugin([{
               from: 'src/assets',
               to: 'assets'
            },
            {
               from: 'node_modules/@stratio/egeo/CHANGELOG.md',
               to: 'assets/CHANGELOG.md'
            },
            {
               from: 'package.json',
               to: 'assets/package.json'
            },
            {
               from: 'node_modules/@stratio/egeo-theme/egeo-theme-stratio.css',
               to: 'assets/theme-stratio.css'
            }
         ]),

         new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
         }),

         new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
         }),

         new LoaderOptionsPlugin({}),

         // Fix Angular 2
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)async/,
            helpers.root('node_modules/@angular/core/src/facade/async.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)collection/,
            helpers.root('node_modules/@angular/core/src/facade/collection.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)errors/,
            helpers.root('node_modules/@angular/core/src/facade/errors.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)lang/,
            helpers.root('node_modules/@angular/core/src/facade/lang.js')
         ),
         new NormalModuleReplacementPlugin(
            /facade(\\|\/)math/,
            helpers.root('node_modules/@angular/core/src/facade/math.js')
         ),

         new ngcWebpack.NgcWebpackPlugin({
            disabled: !AOT,
            tsConfig: helpers.root('tsconfig.webpack.json'),
            resourceOverride: helpers.root('config/resource-override.js')
         })

      ],
      node: {
         global: true,
         crypto: 'empty',
         process: true,
         module: false,
         clearImmediate: false,
         setImmediate: false
      }

   };
}
