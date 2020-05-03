<template>
    <div>
        comingsoon
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "comingsoon",
        data() {
            return {}
        },
        asyncData() {
            axios({
                // process.server 如果是在服务端运行，那么值为true，客户端为false
                url: process.server ? 'https://douban.uieee.com/v2/movie/in_theaters' : '/v2/movie/in_theaters'
            }).then(res => {
                console.log(res.data.subjects)
                return {
                    dataList: res.data.subjects
                }
            })
        }
    }
</script>

<style scoped>
</style>
