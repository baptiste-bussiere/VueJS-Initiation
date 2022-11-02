<template>
  <div class="box">
    <div class="banner_high">
      <img src="../assets/logo.svg" alt="">
      <div class="language">
        <div class="flag" :class="{active:isActive}"  v-on:click="isActive = ! isActive"><img src="../assets/fr_flag.png" alt=""></div>
    <div class="flag" :class="{active:!isActive}"  v-on:click="isActive = ! isActive"><img src="../assets/uk_flag.png" alt=""></div>
    </div>
    </div>
   
    <h1>S'inscrire</h1>
   
    <div class="in">
        <label for="name">Pseudo</label>
        <div>  <input type="text" v-model="username" placeholder="Entrer votre pseudo"
             /><img v-if="username.length >= 5" src="../assets/ok.svg" alt=""></div>

             <label for="name">Adresse Mail</label>
        <div>  <input type="text" v-model="mail" placeholder="Entrer votre adresse mail"
             /><img v-if="mail.length >= 6" src="../assets/ok.svg" alt=""></div>
  
    <div class="button_action">
      <button v-on:click="mail = ' @gmail.com' ">@gmail.com</button> <button v-on:click="mail = '@yahoo.com' ">@yahoo.com</button>  <button v-on:click="mail = '@outlook.com' ">@outlook.com</button>  <button v-on:click="mail = '@aol.com' ">@aol.com</button>
    </div>
    
    <label for="name">Confirmer l'adresse mail</label>
        <div>  <input type="text" v-model="mail_confirm" placeholder="Confirmer l'adresse mail ..."
             /><img v-if="!mail" style="display: none;" src="../assets/ok.svg" alt=""><img v-else-if="mail_confirm === mail" src="../assets/ok.svg" alt=""></div>
  
  
  
  
  
    </div>
  
    <div class="in">
    <label for="name">Mot de passe</label>
    <div>
      <v-text-field type="password"> 
        <input v-model="password_confirmation" type="password" placeholder="8 caracteres minimum" required/><img v-if="password_confirmation.length >= 8" src="../assets/ok.svg" alt="">

      </v-text-field>
      </div>  
     <div class="password_bar">
      <div :class="{'bar':true, 'green':(password_confirmation.length > 1)}" ></div> 
      <div :class="{'bar':true, 'green':(password_confirmation.length > 3)}" ></div> 
      <div :class="{'bar':true, 'green':(password_confirmation.length > 5)}" ></div>  
      <div :class="{'bar':true, 'green':(password_confirmation.length > 7)}" ></div> 
    </div>
    <label for="name">Confirmer le mot de passe</label>
    <div>
      <v-text-field type="password"> 
        <input v-model="password" type="password" placeholder="Confirmer le mot de passe ..." required/><img v-if="!password_confirmation" style="display: none;" src="../assets/ok.svg" alt=""><img v-else-if="password === password_confirmation" src="../assets/ok.svg" alt="">
      </v-text-field>
    </div>
  
    </div>
  
 
   
    <div class="check_bar">
      <div> <input type="checkbox" name="" id="">
      <label for="">Se souvenir de moi</label></div>
     
      <a href="">Mot de passe oublié ? </a>
  
    </div>
  
  
    <button class="log">
      Se connecter
      </button>
     
  
  <span>Déja inscrit ? <a href="/">Se connecter</a> </span> 
  </div>
  
  </template>
  
  
  <script>
  export default {
  
    data() {
      return {
        password:"",
        userLoggedIn: false,
        username:"",
        mail:"",
        mail_confirm:"",
        password_confirmation:"",
        isActive: false,

      };
      
    },
    toggle() {
this.isActive = ! this.enable ;
},
  };
  
  </script>
  
  
  
  
  