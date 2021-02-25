<template>
    <div class="bg-accent text-primary q-pa-sm">
    
     <div  
        class="row">
            <q-bar class="col-12 q-pa-sm row bg-primary" >
                <div class="col-12 text-accent text-center">Subscribe</div>
            </q-bar>
        </div>

    <div class="row">
          <div class="col-12 q-pa-sm">

                <q-input class="q-pa-sm" outlined v-model="companyName" label="Company Name" />
                <q-input class="q-pa-sm" outlined v-model="databaseName" label="Database Name" />
                <q-input class="q-pa-sm" outlined v-model="serverName" label="Server Name" />
                <q-input class="q-pa-sm" outlined v-model="dbPassword" label="Database Password" type="password"/>
                <div class="text-right q-pa-sm">
                <q-btn color="primary" label="Subscribe" @click="createCompany" />
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
    },
    data () {
    return {
        companyName: "",
        databaseName: "",
        serverName: "",
        dbPassword: ""
      
     }
    },
    methods: {  
        createCompany() {
            var context = this;

            this.$store.dispatch('companyStore/createCompany', {
             companyName: context.companyName,
             databaseName: context.databaseName,
             serverName: context.serverName,
             dbPassword: context.dbPassword
            });
        }
    },
    created(){
    }
  }
</script>

<style scoped>


</style>