module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // 反向代理
        '@nuxtjs/proxy'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        proxy: true
    },
    proxy: {
        '/v2': {
            target: 'https://douban.uieee.com',
            changeOrigin: true,
        }
    },
    /*
    ** Build configuration
    */
    build: {
        transpile: [/^element-ui/],
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    // 路由重定向
    router: {
        middleware: 'redirect',
        extendRoutes(routes) {
            // 每次路由跳转回调用该中间件（多个中间件写法为数组包着）
            routes.push({
                path: '/',
                redirect: '/film/nowplaying'
            })
        },
    }
}
