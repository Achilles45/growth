<template>
  <div class="navbar__wrapper container-fluid">
      <div class="container">
          <div class="navbar__content d-flex justify-content-between align-items-center">
              <div class="logo pt-2">
                  <router-link to="/" class="logo"><img src="../assets/images/logo.jpg" class="logo__img" alt=""></router-link>
              </div>
              <div class="menu">
                  <ul class="d-flex justify-content-between pt-3">
                      <li><router-link to="/" class="links">Home</router-link></li>
                      <!-- <li><router-link to="/faqs" class="links">Faqs</router-link></li> -->
                      <li><router-link to="/contact" class="links">Contact Us</router-link></li>
                      <li><router-link to="/signup" class="links">Register</router-link></li>
                      <li><router-link to="/signin" class="login links">Sign In</router-link></li>
                  </ul>
              </div>
              <div @click="showNav()" class="navbar__toggler">
                  <i class="fa fa-bars"></i>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        //  logOut:function(){
        //    firebase.auth().signOut()
        //    .then(()=>{
        //        this.$router.push({name: 'Signin'})
        //    })
        // },
        showNav:function(){
            const navbarToggler = document.querySelector('.navbar__toggler');
            const nav = document.querySelector('.menu');
            const navLinks = document.querySelector('.links')
            nav.classList.toggle('show__nav');
            navLinks.classList.remove('show__nav');
        },
        fixNav:function(){
             const nav = document.querySelector('.navbar__wrapper');
            window.onscroll = function(){
                if (window.pageYOffset > 150) {
                    nav.classList.add('fix__nav');
                }else{
                    nav.classList.remove('fix__nav');
                }
            }
        },
 },
 mounted(){
     this.fixNav()
 }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.navbar__wrapper{
    background: #fff;
    padding: 1rem 0;
    .navbar__content{
        .logo{
             text-decoration: none !important;
            //  color: #fff;
            h4{
                color: $primary-color;
                font-weight: bolder;
                font-size: 1rem;
            }
            .logo__img{
                max-width: 60px;
                height: auto;
            }
        }
        .menu{
            ul li a{
                text-decoration: none;
                margin: 0 1.2rem;
                font-weight: bold;
                opacity: .7;
                color:$primary-color;
                text-transform: uppercase;
                font-size: .8rem;
            }
            .login{
                border: 1px solid $primary-color;
                padding: .9rem 2rem;
                border-radius: 4px;
                background: $primary-color;
                color: #fff;
                font-weight: normal !important;
                opacity: 1 !important;
            }
        }
        .navbar__toggler{
            display: none;
            font-size: 1.2rem;
            padding-right: 1rem;
            color: $secondary-color !important;
        }
    }
}
//Fix navigation
.fix__nav{
    position: fixed;
    top: 0; 
    width: 100%;
    z-index: 100;
    background: $primary-color;
    padding: .8rem 0;
    transition: all ease-in-out .5s;
    // box-shadow: 0px 0px 5px rgba(0,0,0,0.17);
    a{
           color: #fff !important;
           opacity: .8 !important;
    }
    h4{
        color: #fff !important;
        opacity: .8 !important;
    }
}

//Show Navigation
.show__nav{
    display: block !important;
    transition: all ease-in .5s;
}
//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .menu{
        background-color: #000;
        width: 100%;
        position: absolute;
        z-index: 100;
        height: 100vh;
        bottom: 0;
        left: 0;
        top: 10%;
        display: none;
        ul{
            flex-direction: column;
            li a{
                color: #fff !important;
                line-height: 4;
            }
            .login{
                border: 1px solid #fff !important;
                color: #fff !important;
            }
        }
    }
    .navbar__toggler{
        display: block !important;
        color: #fff !important;
    }
}
</style>