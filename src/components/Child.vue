<template>
    <tbody>
        <tr>
            <td><i class="fa fa-square-o"></i></td>
            <td>CUI09867</td>
            <td>Abhishek LG</td>
            <td>abhishek.abhi@gmail.com</td>
            <td>credit</td>
            <td>06-01-21</td>
            <td>Dinner Milk</td>
            <td><i class="fa fa-inr"></i>1500</td>
            <td><i class="fa fa-pencil-square-o" style="color: #16c1f3"></i>
            <i class="fa fa-trash" style="color:#19174a"></i></td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td><i class="fa fa-square-o"></i></td>
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.type}}</td>
            <td>{{user.date}}</td>
            <td >{{user.items}}</td>
            <td><i class="fa fa-inr"></i>{{user.amount}}</td>
            <td><i class="fa fa-pencil-square-o" style="color:#16c1f3"></i>
            <i class="fa fa-trash" style="color:#19174a"></i></td>
        </tr>
    </tbody>
        
</template>

<script>
export default {
    data(){
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
    }

</script>

<style>
 td{
    text-align: center;
    padding: 15px;
    border-bottom: 2px solid #dedede;

}
i {
    margin-left: 15px;

}
</style>