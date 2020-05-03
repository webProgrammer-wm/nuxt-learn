<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in dataList" :key="data.filmId" @click="handleClick(data.filmId)">
                {{ data.name }}
            </li>
        </ul>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "nowplaying",
        data() {
            return {
                dataList: ['111', '222', '333']
            }
        },

        // 从本页面刷新的话，是从服务端发起请求，如果从其他页面跳转过来，是从客户端发起请求
        // 目的是为了 首屏加载速度 和 seo优化
        asyncData(data) {
            console.log(data)
            return axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5891255',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15868717331090921694838","bc":"440300"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data)
                return {
                    dataList: res.data.data.films
                } // 状态
            })
        },

        methods: {
            // 动态路由跳转
            handleClick(data) {
                this.$router.push(`/detail/${data}`)
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
