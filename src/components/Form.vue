<template>
    <div class="main-container">
        <h1>Create New</h1>
        <div class="form">
            <div class="form-box">
                <h1>Add New Transaction</h1>
                <p>please fill the bellow detail to add the new transaction</p>
                <hr style="margin-left: 45%;margin-top: 20px;margin-right: 45%;">
            </div>
                <div class="button-box">
                    <form @submit.prevent="savaItem">
                        <div class="user-details">
                            <div class="input-box">
                                <span class="details">Transaction Name*</span>
                                <input type="text" placeholder="" v-model="name" required>
                            </div>
                            <div class="input-box">
                                <span class="details">Email*</span>
                               <input type="email" placeholder="" v-model="email" required>
                            </div>
                            <div class="input-box">
                                <span class="details ">Date OF Transaction*</span>
                                <input type="date" placeholder=""  v-model="date"  required>
                            </div>
                            <div class="input-box">
                                <span class="details">Type*</span>
                                <!-- <input type="text" placeholder="" v-model="type"  required> -->
                                <select name="select" v-model="type" >
                                    <option>Credit</option>
                                    <option>Debit</option>
                                </select>
                            </div>
                            <div class="input-box" style="position:relative">
                                <span class="details">Items*</span>
                                <input type="text" placeholder="" v-model="selectedFields"  required><i class="fa fa-arrow-down" style="float:right;transform: translateY(-27px);
                                 padding-right:7px"></i>
                                 <div class="dropdown-content" style="position:absolute;">
                                    <a href="#" class="dropdown"><input type="checkbox" v-model="dinner">Dinner</a>
                                    <a href="#" class="dropdown"><input type="checkbox" v-model="fruits">Fruits</a>
                                    <a href="#" class="dropdown"><input type="checkbox" v-model="milk">Milk</a>
                                 </div>
                            </div>
                            <div class="input-box">
                                <span class="details">Transaction Amount(<i class="fa fa-inr"></i>)*</span>
                                <input type="number" placeholder="" v-model="amount" required>
                            </div>
                        </div>
                        <div class="next">

          <button type="button" id="close" class="submit-btn" @click="showHideForm(false)">Close</button>
          <button @click="savaItem()" type="submit" class="submit-btn  submit-btn1">Submit</button>
           </div>
                    </form>
    </div>
    </div>
    </div>


</template>

<script>
export default {
    name:'CustomForm',
    

    props: {
        showHideForm: Function,
        addItem: Function,
        editItem: Function,
        delItem: Function,
        item: Object,
        user: null,
     },
     data(){
         return{
             name:'',
             email:'',
             type:'',
             date:'',
             items:[],
             amount:'',
             dinner:false,
             fruits:false,
             milk:false
         }
    },
    computed :{
        selectedFields () {
            let selectedItems = [];
            if (this.dinner) {
                selectedItems.push('dinner');
            }
            if (this.fruits) {
                selectedItems.push('fruits');
            }
            if (this.milk) {
                 selectedItems.push('milk');
            }
            return selectedItems;
        }

        },

    
    mounted () {
            if(this.user){
                this.name = this.user.name;
                this.email = this.user.email;
                this.date = this.user.date;
                this.type = this.user.type;
                this.items = this.user.items;
                this.amount = this.user.amount;
                this.findItemAndSetValue('dinner');
                this.findItemAndSetValue('fruits');
                this.findItemAndSetValue('milk');
            }
    },
     methods:{
         findItemAndSetValue (value){
             let index = this.items.findIndex(item => {
                 return item === value;
             });
             if (index > -1) {
                 this[value] = true;
             }else{
                 this[value] = false;
             }

         },
            savaItem() {
               if (this.user){
                   this.editItem({id:this.user.id,name:this.name,email:this.email,type:this.type,date:this.date,items:this.selectedFields,amount:this.amount})
                      console.log(this.name, this.email, this.date, this.type, this.items, this.amount);
                }else{
                      this.addItem({id:Math.random(),name:this.name,email:this.email,type:this.type,date:this.date,items:this.selectedFields,amount:this.amount});  
                }
                this.showHideForm(false)
                }
            }
        }

</script>


<style scoped>
.form{
    background: white;
    padding: 30px;
    margin: 20px auto;
    border-radius: 6px;
}
.form-box{
    text-align: center;
    /* border-bottom: 4px solid lightgrey; */
}
.form-box p{
    color: gray;

}
.form-box p hr{
    margin-top: 22px;
    margin-right: 45%;
    margin-left: 45%;
}
.button-box{
    margin: 80px;
}
.button-box form .user-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 15px  40px 6px 40px;
}
form .user-details .input-box{
    width: calc(100% / 2 - 20px);
    margin-bottom: 15px;
}
.user-details .input-box .details{
    font-weight: 500;
    margin-bottom: 7px;
    display: block;
}
.user-details .input-box input{
    height: 35px;
    width: 95%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ededed;
    padding-left: 15px;
    font-size: 12px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
    background: #F2F2F2;
    position: relative;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid{
    border-color: gray;
}
.next{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}
.submit-btn{
    padding: 10px 0px;
    cursor: pointer;
    color: white;
    border: 2px solid #16C1F3;
    font-size: 16px;
    width: 136px;
    max-width: 50%;
    border-radius: 8px;
    background: #16C1F3;
}
.submit-btn1{
    background: #19174a;
    color: white;
    margin-left: 8px;
    border: 2px solid #19174a;
}

.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.input-box {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  border-radius: 8px;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 8px;
  left: 0;
  width: 100%;
  top: 60px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  margin-right: 12rem;


}
a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 65%;
}

.input-box:hover .dropdown-content {
  display: block;
}
.dropdown-content a i {
    margin-right: 12px;
}
.dropdown{
    margin-left: 13px;
}

/* .dropdown:hover .details {
  background-color: #3e8e41;
} */
input[type=checkbox]{
    width: 20px!important;
}
select {
    width: 100%;
    height: 35px;
    background:#f2f2f2;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ededed;
    border-bottom-width: 2px;
}

</style>