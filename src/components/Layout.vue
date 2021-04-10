<template>
    <div class="main-container">
        <Dashboard v-if="!showForm" :users="filteredList" :showHideForm="showHideForm" :searchName="searchName" />
        <Form v-if="showForm" :showHideForm="showHideForm" :editItem="editItem" :addItem="addItem" :user="user" />
        
    </div>
</template>


<script>
import Dashboard from './Dashboard.vue';
import Form from './Form.vue';

export default {
    data(){
        return{
            user: null,
            showForm: false,
            users:[
                {id:'CUI09861',name:'Abhishek LG',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner','milk'],amount:1500},
                {id:'CUI09862',name:'nimisha srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner','fruits'],amount:1500},
                {id:'CUI09863',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk', 'fruits'],amount:1500},
                {id:'CUI09864',name:'aamir sharma',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk'],amount:1500},
                {id:'CUI09865',name:'riya singh',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk', 'fruits'],amount:1500},
                {id:'CUI09866',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'debit',date:'06-01-21',items:['dinner', 'milk'],amount:1500},
                {id:'CUI09867',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'fruits'],amount:1500},
                {id:'CUI09868',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk', 'fruits'],amount:1500},
                {id:'CUI09869',name:'srijan srivastava',email:'abhishek.abhi@gmail.com',type:'credit',date:'06-01-21',items:['dinner', 'milk'],amount:1500},
                ],
                search: ''
        }
    },
    components:{
        Dashboard,
        Form,   
    },
    computed: {
        filteredList () {
           if (this.search !== '') {
               let filtered = this.users.filter(user => {
                   return user.name.includes(this.search);
               })
               return filtered;
           } else {
               return this.users;
           }
        }
    },
    methods:{
        searchName (name) {
            this.search = name;
        },
        showHideForm (value, currentUser) {
            this.showForm = value;
            if(value === true) {
                this.user = currentUser;
            }else{
                this.user = null;
            }
        },
        addItem (object) {
            this.users.push(object);
        },
        editItem (object) {
            let index = this.users.findIndex(u =>{
                return u.id === object.id;
            });
            if (index > -1) {
                this.users[index] = object;
            }
        },
    }
    
}
</script>