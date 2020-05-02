<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in dataList" :key="data" @click="handleClick(data)">
                {{ data }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "nowplaying",
        data() {
            return {
                dataList: ['111', '222', '333']
            }
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

</style>
