<template>
    <div class="main-container">
        <Dashboard v-if="!showForm" :users="users" :showHideForm="showHideForm" />
        <Form v-if="showForm" :showHideForm="showHideForm" :addItem="addItem" />
        
    </div>
</template>


<script>
import Dashboard from './Dashboard.vue';
import Form from './Form.vue';

export default {
    data(){
        return{
            showForm: false,
            users:[
                {id:'CUI09867',name:'Abhishek LG',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner','milk'],amount:1500},
                {id:'CUI09867',name:'nimisha srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner','fruits'],amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk', 'fruits'],amount:1500},
                {id:'CUI09867',name:'aamir sharma',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk'],amount:1500},
                {id:'CUI09867',name:'riya singh',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk', 'fruits'],amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk'],amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'fruits'],amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk', 'fruits'],amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk'],amount:1500},
                ]
        }
    },
    components:{
        Dashboard,
        Form,
        
    },
    methods:{
        showHideForm (value) {
            // this.user={id:'CUI09867',name:'Abhishek LG',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner','milk'],amount:1500}
            this.showForm = value;
        },
        addItem (object) {
            this.users.push(object);
        }
    }
    
}
</script>