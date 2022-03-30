<template>
    <div>
        <button @click="add(5)">增加</button>
          <button @click="jian(2)">减少</button>
        <p>{{this.$store.state.count}}</p>
    </div>
</template>
<script>
export default {
    name:"HomeUser",
    methods:{
        add(a){
            //用户行为
            // 不能直接修改count
            // this.$store.state
            this.$store.dispatch("asyncincrement",a)
            // this.$store.commit("increment")
        },
        jian(b){
            this.$store.commit("decrement",b)
        }
    }
}
</script>
<style scoped>

</style>