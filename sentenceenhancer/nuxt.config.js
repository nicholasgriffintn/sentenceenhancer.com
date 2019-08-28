const webpack = require("webpack");

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sentence Enhancer | Enhancing sentences since 2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Enhancing sentences since 2019' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  script: [
    {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript"
    },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#a719ff' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
   vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

