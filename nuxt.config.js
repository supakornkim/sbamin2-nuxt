import axios from 'axios'
let basepath = '/'
let baseurl = '/' //url backend
let baseurlfile = '/' //url backend

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  generate: {
    fallback: true,
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/vendor/fontawesome-free/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i' },
      { rel: 'stylesheet', href: '/css/sb-admin-2.min.css' },
    ],
    script: [
      { src: '/vendor/jquery/jquery.min.js', body: true },
      { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', body: true },
      { src: '/vendor/jquery-easing/jquery.easing.min.js', body: true },
      { src: '/js/sb-admin-2.min.js', body: true },
      //{ src: '/vendor/chart.js/Chart.min.js', body: true },
      //{ src: '/js/demo/chart-area-demo.js', body: true },
      //{ src: '/js/demo/chart-pie-demo.js', body: true },
    ]
  },

  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],
  bootstrapVue: {
    icons: true,
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: basepath,
    //baseURL: 'http://18.140.47.208/back/',
    proxy: process.env.NODE_ENV !== "production"
        ? true
        : false
  },

  proxy: {
    '/oapi/': { target: baseurl },
    '/api/': { target: baseurl },
    '/sites/': { target: baseurlfile },
    '/s/sites/': { target: baseurlfile, pathRewrite: {'^/s/': ''} },
  },

  auth: {
    redirect: {
      home: false,
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/oapi/user/login', method: 'post'  },
          logout: { url: '/api/user/logout', method: 'post' },
          user: { url: '/api/user_info/connect', method: 'post' },
        },
        tokenRequired: true,
        tokenName: 'X-CSRF-TOKEN',
        tokenType: false,
        //autoFetchUser: false,
        //rewriteRedirects: false
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
