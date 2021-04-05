<template>
       <div class="content">
            <h2>List of transactions</h2>
            <span>
            <button v-on:click="hello()">Create New</button>
            </span>
            
        </div>
    
</template>

<script>


export default {
    name:'Contents',
    components:{
    
    },methods:{
        hello()
        {
            
            this.show=!this.show
        }
    }
    
}
</script>

<style>
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    
}

</style>