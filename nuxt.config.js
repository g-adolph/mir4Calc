export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mir4_calc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'animate.css/animate.min.css',
    '@/static/assets/css/default.css',
    '@/static/assets/css/slick.css',
    '@/static/assets/css/style.css',
    '@/static/assets/css/responsive.css',
    '@/static/assets/css/mir4calc.css',
    'vue-notifyjs/themes/default.css',
    'pretty-checkbox/dist/pretty-checkbox.min.css'
  ],

  plugins: [
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
    { src: "~/plugins/toasted.js", mode: "client" }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    ['nuxt-vuex-localstorage', {
      mode: 'debug',
      localStorage: ['armazem']
    }]
  ],

  fontawesome:{
    component:'fa',
    icons:{
      solid:true,
      brands:true
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
