<template>
    <div>
         <!--获取参数 参数名为本文件名 -->
        detail -- {{ this.$route.params.myid }}
    </div>
</template>

<script>
    export default {
        name: "_myid",
        // 指定根组件的模板
        layout: 'detailtemplate',
        data() {
            return {}
        },
        asyncData(data) {
            console.log(data.params)
        }
    }
</script>

<style scoped>

</style>
