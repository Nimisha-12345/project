<template>
   <table>
       <TableHeader /> 
       
            <Child v-for="user in users" :key="user.id" :user="user"  />
    </table>
            
</template>

<script>

import TableHeader from '../components/TableHeader'
import Child from '../components/Child'

export default ({
    components: {
        TableHeader,
        Child,
        
    },data(){
        return{
            users:[
                {id:'CUI09867',name:'Abhishek LG',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner milk',amount:1500},
                {id:'CUI09867',name:'nimisha srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner fruits',amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner milk fruits',amount:1500},
                {id:'CUI09867',name:'aamir sharma',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner milk',amount:1500},
                {id:'CUI09867',name:'riya singh',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner milk fruits',amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner milk',amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner fruits',amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner milk fruits',amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:'dinner milk',amount:1500},
                ]
        }


            
    }
})
</script>

<style>
table{
    border-collapse: collapse;
    width: 100%;
}
</style>


