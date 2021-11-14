<template>
  <header>
    <nav class="container">
      <a href="/">
        <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg
" alt="Logo" id="logo">
      </a>

      <img v-on:click="openMenu" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg
" alt="Abrir Menu" id="menu-button">

      <div id="menu-overlay" v-if="menuActive" v-on:click="closeMenu"></div>

      <div id="menu-items" :class="{
        active:menuActive
       }">
        <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg
" alt="Logo" id="menu-logo">

        <ul>
          <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
          <li v-on:click="closeMenu"><router-link to="/videos">Videos</router-link></li>
          <li v-on:click="closeMenu"><router-link to="/sobre">Sobre</router-link></li>
          <li v-on:click="closeMenu"><router-link to="/contato">Contatos</router-link></li>
        </ul>
      </div>

    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      menuActive: false,

    }

  },

  methods: {
    openMenu: function ()  {
      this.menuActive = true;

    },

    closeMenu: function ()  {
      this.menuActive = false;

    }

  }

}
</script>

<style scoped>
  header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 60px;

    display: flex;

    justify-content: center;
    align-items: center;

  }

  nav {
    display: flex;

    justify-content: space-between;

    height: 60px;

    align-items: center;

  }

  ul {
    list-style: none;
    text-align: center;

  }

  ul li {
    margin: 20px 0;

  }

  ul li a {
    color: var(--color-text-light);

  }

  #menu-overlay {
    position: fixed;

    top: 0;
    left: 0;

    width: 40%;
    height: 100vh;

    background-color: black;

    opacity: 0.8;

  }

  #logo {
    width: 130px;

  }

  #menu-button {
    width: 30px;

  }

  #menu-logo {
    width: 110px;

    margin-top: 30px;
    margin-bottom: 10px;

  }

  #menu-items {
    position: fixed;

    top: 0;
    right: 0;

    background-color: var(--color-background-nav);

    width: 60%;
    height: 100vh;

    display: none;

    flex-direction: column;
    justify-content: flex-start;

    align-items: center;

  }

  #menu-items.active {
    display: flex;

  }

  @media (min-width: 700px) {
    #menu-button, #menu-logo, #menu-overlay {
      display: none;

    }

    #menu-items {
      display: flex;

      position: static;

      height: 60px;
      width: auto;

    }

    ul {
      display: flex;

      flex-direction: row;

      height: 60px;
      align-items: center;


    }

    ul li {
      margin: 0;

      margin-left: 20px;

    }

  }

</style>