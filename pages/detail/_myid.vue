<template>
    <div>
         <!--获取参数 参数名为本文件名 -->
        detail -- {{ this.$route.params.myid }}
        {{ dataList }}
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "_myid",
        // 指定根组件的模板
        layout: 'detailtemplate',
        data() {
            return {
                dataList: null
            }
        },
        asyncData(data) {
            console.log(data.params)
            return axios({
                url: `https://m.maizuo.com/gateway?filmId=${data.params.myid}&k=559072`,
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"440300"}',
                    'X-Host': 'mall.film-ticket.film.info'
                }
            }).then(res => {
                return {
                    dataList: res.data.data.films
                }
            })
        }
    }
</script>

<style scoped>

</style>
