<template>
   <table>
       <TableHeader /> 
       
            <Child v-for="user in users" :key="user.id" :user="user" :showHideForm="showHideForm" :delItem="delItem" />
    </table>
            
</template>

<script>

import TableHeader from '../components/TableHeader'
import Child from '../components/Child'

export default ({
     props:{
         users: Array,
         showHideForm: Function,
         delItem: Function,
     },
    components: {
        TableHeader,
        Child,
        
    }
})
</script>

<style>
table{
    border-collapse: collapse;
    width: 100%;
}
</style>


