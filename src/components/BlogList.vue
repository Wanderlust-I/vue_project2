<template>
<div class="list">
 <div class="card">
 <router-link :to="'/detail/'+1">
 <p class="title">nodejs教程</p>
 </router-link>
 <p class="date">2020-03-20</p>
 </div>
 <div class="card">
 <router-link :to="'/detail/'+1">
 <p class="title">nodejs教程</p>
 </router-link>
 <p class="date">2020-03-20</p>
 </div>
 <div class="card">
 <router-link :to="'/detail/'+1">
 <p class="title">nodejs教程</p>
 </router-link>
 <p class="date">2020-03-20</p>
 </div>
 </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.card {
    padding-bottom: 20px;
    margin-top: 15px;
    border-bottom: 1px solid #eee;
    .title {
        color: #0085a1;
        font-size: 26px;
        font-weight: 600;
    }
       .date {
        font-style: italic;
        font-family: Lora, "Times New Roman", serif;
        color: #808080;
        margin-top: 20px;
    }
}
</style>