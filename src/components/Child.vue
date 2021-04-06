<template>
    <tbody>
       
        <tr >
            <td><input type="checkbox" placeholder="" required></td>
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>{{user.type}}</td>
            <td>{{user.date}}</td>
            <td >
                <span v-for="(items, index) in user.items" :key="index">{{items}}</span>
            </td>
            <td><i class="fa fa-inr"></i>{{user.amount}}</td>
            <td><button class="btnclick"><i class="fa fa-pencil-square-o" style="color:#16c1f3"></i></button>
            <i class="fa fa-trash" style="color:#19174a"></i></td>
        </tr>
    </tbody>
        
</template>

<script>
export default {
    name:'child',
    props:{
        user: Object

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

.btnclick {
    background: white;
    border: none;
    outline: none;
}
</style>