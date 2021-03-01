<template>
    <div class="q-pa-sm bg-primary text-accent">
      <div class="row">
          <div class="col-12 q-pa-sm">
              <div class="row">
                  <div class="col-4">
                       <q-card 
                       @click="goto('login')"
                       class="my-card bg-primary text-accent text-center shadow-2">
                           <q-icon name="login" style="font-size: 100px;">
                               
                           </q-icon><br>
                           LOGIN
                        </q-card>
                  </div>
                  <div class="col-4">
                      <q-card 
                      @click="goto('subscriptions')"
                       class="my-card bg-primary text-accent text-center shadow-2">
                           <q-icon 
                           name="subscriptions" style="font-size: 100px;">
                               
                           </q-icon><br>
                           SUBSCRIBE
                     </q-card>
                  </div>
                  <div class="col-4">
                      <q-card @click="goto('home')"
                       class="my-card bg-primary text-accent text-center shadow-2">
                           <q-icon name="home" style="font-size: 100px;">
                               
                           </q-icon><br>
                           HOME
                      </q-card>
                  </div>
              </div>
          </div>
          <div class="col-12 q-pa-sm">
              <div class="row">
                  <div class="col-2"></div>
                  <div class="col-8">
                      <carousel v-if="carouselComponent"></carousel>
                      <login v-if="loginComponent"></login>
                      <subscriptions v-if="subscriptionsComponent"></subscriptions>
                      <about v-if="aboutComponent"></about>
                      <registration v-if="registrationComponent"></registration>
                      <contact v-if="contactComponent"></contact>
                  </div>
                   <div class="col-2"></div>
                   <div class="col-4">
                      <q-card @click="goto('about')"
                       class="my-card bg-primary text-accent text-center shadow-2">
                           <q-icon name="description" style="font-size: 100px;">
                               
                           </q-icon><br>
                           ABOUT US
                      </q-card>
                  </div>
                  <div class="col-4">
                      <q-card @click="goto('registration')"
                       class="my-card bg-primary text-accent text-center shadow-2">
                           <q-icon name="app_registration" style="font-size: 100px;">
                               
                           </q-icon><br>
                           REGISTER
                      </q-card>
                  </div>
                  <div class="col-4">
                      <q-card @click="goto('contact')"
                       class="my-card bg-primary text-accent text-center shadow-2">
                           <q-icon name="contact_mail" style="font-size: 100px;">
                               
                           </q-icon><br>
                           CONTACT
                      </q-card>
                  </div>
              </div>
          </div>
      </div>

    </div>
</template>

<script>

import carousel from 'pages/auth/carousel.vue';
import login from 'pages/auth/login.vue';
import subscriptions from 'pages/auth/subscriptions.vue';
import about from 'pages/auth/about.vue';
import registration from 'pages/auth/registration.vue'
import contact from 'pages/auth/contact.vue';
export default {
    components: {
        carousel,
        login,
        subscriptions,
        about,
        registration,
        contact
    },
    data () {
    return {
        tab: 'login',
        carouselComponent: true,
        loginComponent: false,
        subscriptionsComponent: false,
        aboutComponent: false,
        registrationComponent: false,
        contactComponent: false
      
     }
    },
    methods: {
        goto(path){
            var context =  this;

            switch(path){
              case "login":
                context.carouselComponent = false;
                context.loginComponent = true;
                context.subscriptionsComponent = false;
                context.aboutComponent = false;
                context.registrationComponent = false;
                context.contactComponent = false;
                break;
              case "subscriptions":
                context.carouselComponent = false;
                context.loginComponent = false;
                context.subscriptionsComponent = true;
                context.aboutComponent =  false;
                context.registrationComponent = false;
                context.contactComponent = false;
                break;
              case "about":
                context.carouselComponent = false;
                context.loginComponent = false;
                context.subscriptionsComponent = false;
                context.aboutComponent =  true;
                context.registrationComponent = false;
                context.contactComponent = false;
                break;
              case "registration":
                context.carouselComponent = false;
                context.loginComponent = false;
                context.subscriptionsComponent = false;
                context.aboutComponent =  false;
                context.registrationComponent = true;
                context.contactComponent = false;
                break;
              case "contact":
                context.carouselComponent = false;
                context.loginComponent = false;
                context.subscriptionsComponent = false;
                context.aboutComponent =  false;
                context.registrationComponent = false;
                context.contactComponent = true;
                break;
                default:
                context.carouselComponent = true;
                context.loginComponent = false;
                context.subscriptionsComponent = false;
                context.aboutComponent = false;
                context.registrationComponent = false;
                context.contactComponent = false;
                break

            }
        }
    }
  }
</script>

<style  scoped>
.custom-caption
{
  text-align: center;
  padding: 12px;
  color: white;
  background-color: black;
}

.menu-item{
        height: 25vh;
        text-align: center;
        padding-top: 7vh!important;
        color: rgba(255,255,255, 1); /* orange; */
        border: 1px  rgba(255,255,255, 1) solid;
        
  }

  .my-card{
      width: 100%;
      height: 25vh;
      border: 1px  rgba(255,255,255, 1) solid;
      /* max-width: 250px; */
  }
</style>