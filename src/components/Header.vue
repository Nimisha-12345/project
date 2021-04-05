<template>
    <div class="head">
        <h1>C<label>rud UI</label></h1>
        <div class="main">
        <nav>
            <ul class="icon">
                <li><i class="fa fa-bell-o"></i></li>
                <li><i class="fa fa-envelope"></i></li>
                <li><i class="fa fa-cog"></i></li>   
            </ul>
        </nav>
        <div class="login">
                <i class="fa fa-user-circle"></i>
                <span>Abhishek LG <i class="fa fa-angle-down" aria-hidden="true"></i></span>
        </div>
        </div>
       
    </div>
    

</template>

<script>


export default {
    name:'Header',
    components:{
        
    }

    }

</script>

<style >
.head{
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5%;
    line-height: 80px;
    height: 80px;
    cursor: pointer;
    background-color: #19174a;
    padding-left: 145px;
    padding-right: 95px;
}
.head h1{
    font-size: 45px;
}
nav{
    color: #6C6A9D;
    display: inline-flex;
}
.icon{
    list-style: none;
    
}
.icon li{
    display: inline-block;
    padding: 0px 11px;
}
.main{
    display: flex;
    font-size: 25px;
    padding-right: 40px;
}
.login{
    font-size: 25px;
}
.login i{
    color:gray;
    padding-right: 27px;
    padding-left: 8px;
}
label{
    font-size: 17px;
}


</style>