export default function ({ isHMR, app, store, route, params, errors, redirect }) {
    if (isHMR) return

    // 中间件路由重定向
    if (route.fullPath === '/film') {
        return redirect('/film/nowplaying')
    }
}
