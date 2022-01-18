<template>
    <div class="bg-accent text-primary q-pa-sm">
    
     <div  
        class="row">
            <q-bar class="col-12 q-pa-sm row bg-primary" >
                <div class="col-12 text-accent text-center">Register</div>
            </q-bar>
        </div>

    <div class="row">
          <div class="col-12 q-pa-sm">

                <q-input class="q-pa-sm" outlined v-model="firstName" label="First Name" />
                <q-input class="q-pa-sm" outlined v-model="middleName" label="Middle Name" />
                <q-input class="q-pa-sm" outlined v-model="lastName" label="Last Name" />
                <q-select class="q-pa-sm" outlined v-model="companyName" label="Company"  :options="companies" />
                <q-select class="q-pa-sm" outlined v-model="roleName" :options="roles" label="Role" />
                <q-input class="q-pa-sm" outlined v-model="jobDescription" label="Job Description" />
                <q-input class="q-pa-sm" outlined v-model="userName" label="UserName" />
                <q-input class="q-pa-sm" outlined v-model="pword" label="Password" />
                <div class="text-right q-pa-sm">
                <q-btn color="primary" label="Register" @click="createUser" />
                </div>
        </div>
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
        pword: "",
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

            console.log("pword: ", context.pword);
            console.log("payload: ", payload);
            this.$store.dispatch('userStore/createIdentity', payload);
        }
    },
    created(){
        this.$store.dispatch('companyStore/GetCompanies')
    }
  }
</script>

<style scoped>


</style>