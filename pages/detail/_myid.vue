<template>
    <div>
        <!-- 获取参数 参数名为本文件名 -->
        detail -- {{ this.$route.params.myid }}
    </div>
</template>

<script>
    export default {
        name: "_myid",
        data() {
            return {}
        },

    }
</script>

<style scoped>

</style>
