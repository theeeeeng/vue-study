<template>
  <div class="navigation">
    <router-link to="/"><img class="logo" src="../assets/logo_white.png"/></router-link>
    <router-link to="/edit"><img class="edit-icon" src="../assets/edition_box.png"/></router-link>
    <a class="login" v-on:click="signInWithGoogle" v-if="!isAuth"><i class="fab fa-google-plus-g"></i></a>
    <a class="profile" v-on:click="signOut" v-if="isAuth"><img v-bind:src="photoURL"/></a>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Navigation',
  data() {
    return {
      isAuth: false,
      photoURL: '',
    };
  },
  methods: {
    signInWithGoogle: function() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...

        console.log(this.isAuth);
        console.log(user);
        console.log(user.photoURL);
        this.photoURL = user.photoURL;

        this.isAuth = true;

        console.log(this.isAuth);

      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.log(error);
      });
    },
  }
};
</script>

<style scoped>
.navigation {
  display: table-header-group;
}

.logo {
  width: auto;
  height: 50px;
  margin-left: 10px;
}

.edit-icon {
  float: right;
  margin: 7px 10px 7px 0;
}

.login {
  float: right;
  font-size: 25px;
  font-weight: 800;
  color: #fff;
}

.profile {
  float: right;
  width: auto;
  height: 50px;
  margin-left: 10px;
}
</style>
