<template>
    <div class="home-policy">
        <div class="cajaRosa">
          <h2>Politica cancelación flexible</h2>
          <p>¡Sin coste! Entendemos que pueden surgir imprevistos, por lo que si cancelas hasta 24 horas antes en la mayoría de experiencias no aplicaremos ningún cargo.</p>
        </div>
        <div class="cajaVerde">
          <h2>La mejor experiencia</h2>
          <p>Garantizamos una aventura inolvidable, somos expertos en lo que hacemos y nos encargamos de que lo disfrutes.</p>
        </div>
        <div class="remo">
          <img src="/images/remo.png" alt="Remo">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home-cancelation-policy',
  components: {
  }

}
</script>

<style scoped>
.home-policy{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:2rem;
}

.home-policy h2{
  padding-bottom: 0.5rem;
}
.home-policy p{
  font-size: 0.9rem;
}
.cajaRosa{
  position: relative;
  max-width: 35rem;
  height: 8rem;
  background: #F5DAEC;
  padding-left:2rem;
  padding-right:7rem;
  padding-top: 1rem;
}
.cajaVerde{
  position: relative;
  max-width: 35rem;
  height: 8rem;
  background: #DEE8EA;
  text-align: right;
  padding-left:7rem;
  padding-right:2rem;
  padding-top: 1rem;
}
.remo{
  position: absolute;
}



@media (min-width: 1000px) {

}

@media (max-width: 999px) and (min-width: 425px) {
  
}

@media (max-width: 424px) {
  
}
</style>
