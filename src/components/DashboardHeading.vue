<template>
       <div class="content">
            <h2>List of transactions</h2>
            <span>
            <button @click="showHideForm(true, null)">Create New</button>
            </span>
            
        </div>
    
</template>

<script>


export default {
    name:'DashboardHeader',
    props: {
        showHideForm: Function,
        
        
    }
    
}
</script>

<style>
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 100px;
    
}

</style>