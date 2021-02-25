<template>
    <div class="bg-accent text-primary q-pa-sm">
    
     <div  
        class="row">
            <q-bar class="col-12 q-pa-sm row bg-primary" >
                <div class="col-12 text-accent text-center">Login</div>
            </q-bar>
        </div>

    <div class="row">
          <div class="col-12 q-pa-sm">

                <q-input class="q-pa-sm" outlined v-model="username" label="Username" />
                <q-input class="q-pa-sm" outlined v-model="password" label="Password" type="password" />
                <div class="text-right q-pa-sm">
                <q-btn color="primary" label="Login" @click="login" />
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
        username: "",
        password: ""
      
     }
    },
    methods: {  
        login (){
            var context = this;

            this.$store.dispatch('authStore/Login', {
             username: context.username,
             password: context.password
            });
        }
    },
    created(){
    }
  }
</script>

<style scoped>


</style>