<template>
    <div>
    
    <div class="row" style="height:100px;"></div>

    <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 qx-pa-md q-gutter-md">

                <q-input outlined v-model="firstName" label="First Name" />
                <q-input outlined v-model="middleName" label="Middle Name" />
                <q-input outlined v-model="lastName" label="Last Name" />
                <q-select outlined v-model="companyName" label="Company"  :options="companies" />
                <q-select outlined v-model="roleName" :options="roles" label="Role" />
                <q-input outlined v-model="jobDescription" label="Job Description" />
                <q-input outlined v-model="userName" label="UserName" />
                <q-input outlined v-model="password" label="Password" />
                <div>
                <q-btn color="primary" label="Create" @click="createUser" />
                </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
    </div>

    </div>
</template>

<script>


export default {
    components: {
        
    },
    computed: {
            theme_color() {
                return this.$store.getters['themeStore/theme_color'];
            },
            theme_color_2() {
                return this.$store.getters['themeStore/theme_color_2'];
            },
            companies(){
                var i = 0;
                var comps = this.$store.getters['companyStore/companies'];
                var lent = comps.length;
                var compNames = []
                for (i = 0; i < lent; i++){
                    compNames.push(comps[i].companyName);
                }
                return compNames;
            }
    },
    data () {
    return {
        firstName: "",
        middleName: "",
        lastName: "",
        companyName: "",
        roleName: "",
        jobDescription: "",
        password: "",
        userName: "",
        roles: [
        'admin', 'member'
      ]
      
     }
    },
    methods: {
        createUser() {
            var context = this;
            var payload = {
                companyName: context.companyName,
                user: {
                    firstName: context.firstName,
                    middleName: context.middleName,
                    lastName: context.lastName,
                    companyName: context.companyName,
                    roleName: context.roleName,
                    jobDescription: context.jobDescription,
                    password: context.pword,
                    userName: context.userName
                }
            }

            console.log("payload: ", payload)
            this.$store.dispatch('userStore/createIdentity', payload);
        }
    },
    created(){
        this.$store.dispatch('companyStore/GetCompanies')
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');

body{
	/* background-image: url("https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"); */
	background-position: center;
    background-origin: content-box;
    background-repeat: no-repeat;
    background-size: cover;
	min-height:100vh;
	font-family: 'Noto Sans', sans-serif;
}
.text-center{
	color:#fff;	
	text-transform:uppercase;
    font-size: 23px;
    margin: -50px 0 80px 0;
    display: block;
    text-align: center;
}
.box{
	position:absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
	padding:70px 100px;
}
.input-container{
	position:relative;
	margin-bottom:25px;
}
.input-container label{
	position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	color:#fff;	
    pointer-event:none;
	transition: all 0.5s ease-in-out;
}
.input-container input{ 
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:#fff;
}
.input-container input:focus{ 
 border:none;	
 outline:none;
 border-bottom:1px solid #e74c3c;	
}
.btn{
	color:#fff;
	background-color:#e74c3c;
	outline: none;
    border: 0;
    color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	margin-top:50px;
	border-radius:2px;
	cursor:pointer;
	position:relative;
}
/*.btn:after{
	content:"";
	position:absolute;
	background:rgba(0,0,0,0.50);
	top:0;
	right:0;
	width:100%;
	height:100%;
}*/
.input-container input:focus ~ label,
.input-container input:valid ~ label{
	top:-12px;
	font-size:12px;
	
}

</style>