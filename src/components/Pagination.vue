<template>
   
    <footer class="foot">
        <a href="#">Prev</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">Next</a>
   
    </footer>
   
</template>
<script>

export default {
  name:'Footer',
      components: {
      
    
  },
}
</script>

<style>
.foot{
   margin-left: 28%;
  display: inline-block;
  margin-top: 36px;
    position: absolute;
}

.foot a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  margin: 0 4px;
}

.foot a.active {
  background-color: #19174a;
  color: white;
  border: 1px solid #19174a;
}

.foot a:hover:not(.active) {background-color: #ddd;}
    
</style>