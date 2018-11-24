'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {

        "/v2":{
            target:"https://m.wowdsgn.com",
            host:"m.wowdsgn.com",
            changeOrigin:true
        },



        "/pages":{
            target:'https://m.wowdsgn.com',
            host:'m.wowdsgn.com',
            changeOrigin:true
        },

        '/message':{
            target:'https://m.wowdsgn.com',
            host:'m.wowdsgn.com',
            changeOrigin:true,
            headers:{
                Cookie:'JSESSIONID=B07mm02bQrRWitSuHTVWejF2bn0l__WYHka8f-XH; UM_distinctid=16734a099ce389-0699ee140c36af-2d604637-3d10d-16734a099cf15f; CNZZDATA1261113455=553878183-1542775703-https%253A%252F%252Fm.wowdsgn.com%252F%7C1542775703; channel=3; sessionToken=4kg4ezctihqguczpd7ufndakuuhb91u1rx0f'
            }
        },
        
        '/marketing':{
            target:'https://m.wowdsgn.com',
            host:'m.wowdsgn.com',
            changeOrigin:true,
            headers:{
                Cookie:'JSESSIONID=B07mm02bQrRWitSuHTVWejF2bn0l__WYHka8f-XH; UM_distinctid=16734a099ce389-0699ee140c36af-2d604637-3d10d-16734a099cf15f; CNZZDATA1261113455=553878183-1542775703-https%253A%252F%252Fm.wowdsgn.com%252F%7C1542775703; channel=3; sessionToken=4kg4ezctihqguczpd7ufndakuuhb91u1rx0f'
            }
        },

        '/recommend':{
            target:'https://m.wowdsgn.com',
            host:'m.wowdsgn.com',
            changeOrigin:true,
            headers:{
                Cookie:'JSESSIONID=B07mm02bQrRWitSuHTVWejF2bn0l__WYHka8f-XH; UM_distinctid=16734a099ce389-0699ee140c36af-2d604637-3d10d-16734a099cf15f; CNZZDATA1261113455=553878183-1542775703-https%253A%252F%252Fm.wowdsgn.com%252F%7C1542775703; channel=3; sessionToken=4kg4ezctihqguczpd7ufndakuuhb91u1rx0f'
            }
        },

        '/itemdetail':{
            target:'https://m.wowdsgn.com',
            host:'m.wowdsgn.com',
            changeOrigin:true,
            headers:{
                Cookie:'JSESSIONID=B07mm02bQrRWitSuHTVWejF2bn0l__WYHka8f-XH; UM_distinctid=16734a099ce389-0699ee140c36af-2d604637-3d10d-16734a099cf15f; CNZZDATA1261113455=553878183-1542775703-https%253A%252F%252Fm.wowdsgn.com%252F%7C1542775703; channel=3; sessionToken=4kg4ezctihqguczpd7ufndakuuhb91u1rx0f'
            }
        },
        '/api':{
            target:'http://10.2.157.8:3000',
            host:'10.2.157.8:3000',
            changeOrigin:true
        },
        '/product':{
            target:'https://m.wowdsgn.com',
            host:'m.wowdsgn.com',
            changeOrigin:true
        }


    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: false,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
