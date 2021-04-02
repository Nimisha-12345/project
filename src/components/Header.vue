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
    
    
}
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500&display=swap');
*{
    margin: 0;
    box-sizing: border-box;
    background-color: #19174a;
}
div{
    font-family: 'IBM Plex Serif', serif;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 7%;
}
.head{
    cursor: pointer;
}
nav{
    color: #989898;
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
    width: 43%;
}
.login i{
    color:white;
    padding-right: 27px;
    font-size: 25px;
    padding-left: 8px;
}
label{
    font-size: 17px;
}


</style>