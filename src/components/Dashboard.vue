<template>
    <div class="dashboard">
        <DashboardHeading :showHideForm="showHideForm"  />
        <div class="container">            
            <div class="part">
                <div class="search_box">
                    <i class="fa fa-search" @click="searchName(searchValue)"></i>
                    <input type="text" v-model="searchValue" class="input" placeholder="search">
                </div>
                <p>Showing {{users.length}} of {{users.length}}</p>
            </div>
            <CustomTable :users="users" :showHideForm="showHideForm" :delItem="delItem" />
        </div>
        <Pagination />
    </div>
</template>

<script>
import CustomTable from './CustomTable'
import DashboardHeading from './DashboardHeading'
import Pagination from './Pagination'

export default {
    name:'Dashboards',
    props:{
        users: Array,
        showHideForm: Function,
        searchName: Function,
        delItem: Function,
    },
    components:{
        CustomTable,
        DashboardHeading,
        Pagination,

    },
    data() {
        return{
            searchValue: ''
        }
    }
    
};
</script>

<style scoped>
.dashboard{
    width: 100%;
}
.container{
    background: white;
    border-radius: 8px;
    
}
.part{
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 20px;
}
.search_box {
    background: #f2f2f2;
    position: relative;
    border-radius: 5px;
    height: 35px;
}
.input{
    border: none;
    background: #f2f2f2;
    padding-left: 46px;
    padding-right: 10px;
    height: 100%;
    width: 100%;
    border-radius: 6px;

}
.search_box i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    color: #c3c3c3;
}
.part p {
    color: #2e2e2e;
    font-size: 17px;
    font-weight: bold ;
}

</style>