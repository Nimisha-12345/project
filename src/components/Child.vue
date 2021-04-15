<template>
    <tbody>
       
        <tr >
            <td><input type="checkbox" placeholder="" required></td>
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td class="change"  v-if="user.type === 'Credit'" >{{user.type}}</td>
            <td class="chan" v-else >{{user.type}}</td>
            <td>{{user.date}}</td>
            <td >
                <span v-for="(items, index) in user.items" :key="index">{{items}}</span>
            </td>
            <td><i class="fa fa-inr"></i>{{user.amount}}</td>
            <td><button class="btnclick" @click="showEditForm"><i class="fa fa-pencil-square-o" style="color:#16c1f3"></i></button>
           <button class="btndel" @click="btndel"><i class="fa fa-trash" ></i></button></td>
        </tr>
    </tbody>
        
</template>

<script>
export default {
    name:'child',
    props:{
        user: Object,
        showHideForm: Function,
        addItem: Function,
        delItem: Function,

    },methods:{
        showEditForm(){
            this.showHideForm(true, this.user)
        },
        btndel(){
            this.delItem(this.user)
        }
        
    }
}
</script>

<style>
 td{
    text-align: center;
    padding: 7px;
    border-bottom: 2px solid #dedede;

}
i {
    margin-left: 15px;

}

.btnclick {
    background: white;
    border: none;
    outline: none;
    font-size: 21px;
}
td span{
    padding-right: 5px;
    background: lightgrey;
    margin: 4px;
    padding-left: 5px;
}
.btndel {
     background: white;
    border: none;
    outline: none;
    font-size: 20px;
    color:#19174a;
    margin-left: -17px;
}
.change{
    color:green;
}
.chan{
    color:red;
}

</style>