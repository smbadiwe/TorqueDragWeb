<template>
    <div>

        <ul class="nav">
            <li @click="showLogin">Login</li>
            <li @click="showSignup">Sign up</li>
            <li @click="showForgotPassword">Forgot password</li>
            <li @click="showSubscribe">Subscribe</li>
            <li @click="showContactUs">Contact us</li>
            </ul>
            <div class="wrapper">
            <div class="rec-prism">
                <div class="face face-top">
                <div class="content">
                    <h2>Subscribe</h2>
                    <small>Enter your email so we can send you the latest updates!</small>
                    <form onsubmit="event.preventDefault()">
                    <div class="field-wrapper">
                        <input type="text" name="email" placeholder="email">
                        <label>e-mail</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="submit" @click="showThankYou">
                    </div>
                    </form>
                </div>
                </div>
                <div class="face face-front">
                <div class="content">
                    <h2>Sign in</h2>
                    <form onsubmit="event.preventDefault()">
                    <div class="field-wrapper">
                        <input type="text" name="username" placeholder="username" v-model="username">
                        <label>username</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="password" name="password" placeholder="password" autocomplete="new-password"
                        v-model="password">
                        <label>password</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="submit" @click="login">
                    </div>
                    <span class="psw" @click="showForgotPassword">Forgot Password?   </span>
                    <span class="signup" @click="showSignup">Not a user?  Sign up</span>
                    </form>
                </div>
                </div>
                <div class="face face-back">
                <div class="content">
                    <h2>Forgot your password?</h2>
                    <small>Enter your email so we can send you a reset link for your password</small>
                    <form onsubmit="event.preventDefault()">
                    <div class="field-wrapper">
                        <input type="text" name="email" placeholder="email">
                        <label>e-mail</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="submit" @click="showThankYou">
                    </div>
                    </form>
                </div>
                </div>
                <div class="face face-right">
                <div class="content">
                    <h2>Sign up</h2>
                    <form onsubmit="event.preventDefault()">
                    <div class="field-wrapper">
                        <input type="text" name="email" placeholder="email">
                        <label>e-mail</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="password" name="password" placeholder="password" autocomplete="new-password">
                        <label>password</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="password" name="password2" placeholder="password" autocomplete="new-password">
                        <label>re-enter password</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="submit" @click="showThankYou">
                    </div>
                    <span class="singin" @click="showLogin">Already a user?  Sign in</span>
                    </form>
                </div>
                </div>
                <div class="face face-left">
                <div class="content">
                    <h2>Contact us</h2>
                    <form onsubmit="event.preventDefault()">
                    <div class="field-wrapper">
                        <input type="text" name="name" placeholder="name">
                        <label>Name</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="text" name="email" placeholder="email">
                        <label>e-mail</label>
                    </div>
                    <div class="field-wrapper">
                        <textarea placeholder="your message"></textarea>
                        <label>your message</label>
                    </div>
                    <div class="field-wrapper">
                        <input type="submit" @click="showThankYou">
                    </div>
                    </form>
                </div>
                </div>
                <div class="face face-bottom">
                <div class="content">
                    <div class="thank-you-msg">
                    Thank you!
                    </div>
                </div>
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
            }
    },
    data () {
    return {
        username: "",
        password: "",
        prism: {}
      
     }
    },
    methods: {
        login (){
            var context = this;

            this.$store.dispatch('authStore/Login', {
             username: context.username,
             password: context.password
            });
        },
        recPrism(){
            var context = this;
            context.prism = document.querySelector(".rec-prism");
        },
        showSignup(){
            var context = this;
            context.recPrism();
            context.prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
        },
        showLogin(){
            var context = this;
            context.recPrism();
            context.prism.style.transform = "translateZ(-100px)";
        },
        showForgotPassword(){
            var context = this;
            context.recPrism();
            context.prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
        },
        showSubscribe(){
            var context = this;
            context.recPrism();
            context.prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
        },
        showContactUs(){
            var context = this;
            context.recPrism();
            context.prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
        },
        showThankYou(){
            var context = this;
            context.recPrism();
            context.prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
        }
    }
  }
</script>

<style lang="scss" scoped>
// Dimensions
$prism-height: 350px;
$prism-length: 250px;
$prism-depth: $prism-length;
$spacing: 20px;
$br: 3px;

// Colors
$text-light: #fff;
$text-dark: #666;
$blue: #03a9f4;
$smoke: #f9f9fa;
$coral: #ff5751;
$navy-blue: #42509e;
$green: #07ad90;

*{
  box-sizing: border-box;
}

body{
  font-family: Tahoma,Verdana,Segoe,sans-serif; 
  font-size: 14px;
  background: #f6fffd;
  padding: $spacing;
  text-align: center;
}
.wrapper{
  width: $prism-length;
  height: $prism-height;
  margin: 60px auto;
  perspective: 600px;
  text-align: left;
}

.rec-prism {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 0.5s ease-in;
}

.face {
  position: absolute;
  width: $prism-length;
  height: $prism-height;
  padding: $spacing;
  background: rgba(250,250,250,0.96);
  border: 3px solid $green;
  border-radius: 3px;
  
  .content{
    color: $text-dark;
    h2{
      font-size: 1.2em;
      color: $green;
    }
    .field-wrapper{
      margin-top: $spacing*1.5;
      position: relative;

      label{
        position: absolute;
        pointer-events: none;
        font-size: 0.85em;
        top: 40%;
        left: 0;
        transform: translateY(-50%);
        transition: all ease-in 0.25s;
        color: lighten($text-dark, 20%);
      }
      input[type="text"], input[type="password"], input[type="submit"], textarea{
        -webkit-appearance: none;
        appearance: none;
        &:focus{
          outline: none;
        }
      }
      input[type="text"], input[type="password"], textarea{
        width: 100%;
        border: none;
        background: transparent;
        line-height: 2em;
        border-bottom: 1px solid $green;
        color: $text-dark;

        &::-webkit-input-placeholder{
          opacity: 0;
        }
        &::-moz-placeholder{
          opacity: 0;
        }
        &:-ms-input-placeholder{
          opacity: 0;
        }
        &:-moz-placeholder { 
          opacity: 0;
        }
        &:focus, &:not(:placeholder-shown){
          + label{
            top: -35%;
            color: $navy-blue;
          }
        }
      }
      input[type="submit"]{
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        width: 100%;
        background: $green;
        line-height: 2em;
        color: $text-light;
        border: 1px solid $green;
        border-radius: $br;
        padding: $spacing/4;
        
        &:hover{
          opacity: 0.9;
        }
        &:active{
          transform: scale(0.96);
        }
      }
      textarea{
        resize: none;
        line-height: 1em;
        &:focus, &:not(:placeholder-shown){
          + label{
            top: -25%;
          }
        }
      }
    }
  }
  
  .thank-you-msg{
    position: absolute;
    width: 200px;
    height: 130px;
    text-align: center;
    font-size: 2em;
    color: $green;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    
    &:after{
      position: absolute;
      content: '';
      width: 50px;
      height: 25px;
      border: 10px solid $green;
      border-right: 0;
      border-top: 0;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) scale(0);
      transform: translate(-50%, -50%) rotate(0deg) scale(0);
      -webkit-animation: success ease-in 0.15s forwards;
      animation: success ease-in 0.15s forwards;
      animation-delay: 2.5s;
    }
  }
  &-front{ 
    transform: rotateY(0deg) translateZ($prism-length/2);  
  }
  &-top{ 
    height: $prism-depth;
    transform: rotateX(90deg) translateZ($prism-depth/2); 
  }
  &-back{ 
    transform: rotateY(180deg) translateZ($prism-length/2); 
  }
  &-right{ 
    transform: rotateY(90deg) translateZ($prism-length/2); 
  }
  &-left{ 
    transform: rotateY(-90deg) translateZ($prism-length/2); 
  }
  &-bottom{ 
    height: $prism-depth;
    transform: rotateX(-90deg) translateZ($prism-height - ($prism-depth/2));
  }
}

.nav{
  margin: $spacing 0;
  padding: 0;
  
  li{
    display: inline-block;
    list-style-type: none;
    font-size: 1em;
    margin: 0 $spacing/2;
    color: $navy-blue;
    position: relative;
    cursor: pointer;
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      border-bottom: 1px solid $navy-blue;
      transition: all ease-in 0.25s;
    }
    &:hover:after{
      width: 100%;
    }
  }
}

.psw, .signup, .singin{
  display: block;
  margin: $spacing 0;
  font-size: 0.75em;
  text-align: center;
  color: $navy-blue;
  cursor: pointer;
}

small{
  font-size: 0.7em;
}
@-webkit-keyframes success{
    from {
       -webkit-transform: translate(-50%, -50%) rotate(0) scale(0);
       }
    to {
      -webkit-transform: translate(-50%, -50%) rotate(-45deg) scale(1);
    }
}

</style>