<template>
<div class="box">
  <div class="banner_high">
    <img src="../assets/logo.svg" alt="">
    <div class="language">
    <div class="flag"><img src="../assets/fr_flag.png" alt=""></div>
    <div class="flag"><img src="../assets/uk_flag.png" alt=""></div>
  </div>
  </div>
 
  <h1>Se connecter</h1>
  <div class="in">
      <label for="name">Adresse Mail</label>
    
  <input type="text" :value="value_placeholder"/>
  <div class="button_action">
    <button v-on:click="value_placeholder = '@gmail.com' ">@gmail.com</button> <button v-on:click="value_placeholder = '@yahoo.com' ">@yahoo.com</button>  <button v-on:click="value_placeholder = '@outlook.com' ">@outlook.com</button>  <button v-on:click="value_placeholder = '@aol.com' ">@aol.com</button>
  </div>




  </div>

  <div class="in">
  <label for="name">Mot de passe</label>
  <input v-model="password" type="password" :name="string" placeholder="8 caractere minimum"/>

  </div>

  <div class="password_bar">
    <div :class="{'bar':true, 'green':(password.length > 1)}" ></div> 
    <div :class="{'bar':true, 'green':(password.length > 3)}" ></div> 
    <div :class="{'bar':true, 'green':(password.length > 5)}" ></div>  
    <div :class="{'bar':true, 'green':(password.length > 7)}" ></div> 
  </div>
 
  <div class="check_bar">
    <div> <input type="checkbox" name="" id="">
    <label for="">se souvenir de moi</label></div>
   
    <a href="">Mot de passe oublié ?</a>

  </div>
  <button class="log">
    login 
  </button>
  <div class="alert" v-if="password.length > 7">
    C'est ok 
  </div>
  <div class="alert" v-else>
    C'est pas ok 
  </div>
<span>Pas encore de compte ? <a href="/signup">s'inscrire !</a> </span> 
</div>

</template>


<script>
export default {
  name: 'signin',
  data() {
    return {
      name: "",
      password:"",
      text:"",
      string:"",  
      value_placeholder :""
    };
  },
};

</script>

<style scoped>
.green {
    background-color: rgb(109, 209, 109);
}
</style>


