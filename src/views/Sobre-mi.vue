<template>
  <div class="sobre-mi">
    <header class="masthead header"
      style="background-image:url('assets/img/about-bg.jpg');">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1 class="titulo">Sobre mí</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <p class="parrafo">
            Este es un blog dedicado al mundo automotor, en el cual te mostraré
            las últimas novedades de automóviles, los lanzamientos más recientes
            y te enseñaremos algunos tips para cuidar tu vehículo.
          </p>
          <p class="parrafo">
            Este es un medio independiente. Si te gusta nuestro contenido,
            ayúdanos en Patreon o haciendo una donación a través de PayPal. Te
            lo agradeceré mucho.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-twitter fa-stack-1x fa-inverse"></i
                ></span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-facebook fa-stack-1x fa-inverse"></i
                ></span>
              </li>
              <li class="list-inline-item">
                <span class="fa-stack fa-lg"
                  ><i class="fa fa-circle fa-stack-2x"></i
                  ><i class="fa fa-github fa-stack-1x fa-inverse"></i
                ></span>
              </li>
            </ul>
            <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
 .header {
    width: 100%;
    height: 700px;
    background-repeat: no-repeat;
    background-size: cover;
 }
 .parrafo {
   margin-top: 50px;
   text-align: justify;
   line-height: 1.5
 }
  .sobre-mi {
    background: antiquewhite;
  }
</style>
