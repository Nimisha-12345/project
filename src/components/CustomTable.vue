<template>
   <table>
       <TableHeader /> 
       
            <Child />
    </table>
            
</template>

<script>

import TableHeader from '../components/TableHeader'
import Child from '../components/Child'

export default ({
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


