<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'Home'}">Home</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'Sobre-mi'}">About</router-link></li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'Contacto'}">Contact</router-link></li>
                    <li class="nav-item" role="presentation"><router-link to="/Post/1">Last post</router-link></li>
                </ul>
        </div>
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
