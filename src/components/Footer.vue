<template>
    <div>
        <footer>
            <h1 id="footer__title">GREETINGS FROM ASTURIAS</h1>
            <section class="footer__section">
                <article class="footer__section-about-us">
                    <h3>SOBRE JO&JANE</h3>
                    <p>Términos y condiciones</p>
                    <p>Política de privacidad</p>
                    <p>Política de cookies</p>
                    <p>Aviso legal</p>
                </article>
                <article class="footer__section-contact-us">
                    <h3>CONTÁCTANOS</h3>
                    <p>Nuestro horario de att. al cliente es de lunes a domingo de 9 a 20 horas</p>
                    <i class="fas fa-mobile-alt"></i><p>644 184 492</p>
                    <i class="far fa-envelope-open"></i><p>hola@joandjane.es</p>
                    <i class="fas fa-map-marker-alt"></i><p>Coworking Edificio Impulsa Parque<br>Científico-Tecnológico de Gijón CP<br>33203 Asturias (España)</p>
                </article>



            </section>

        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

footer{
    background-color: var(--primary-color);
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
}

#greetings{
    color: var(--primary-color);
    background-color: black;
}

@media (min-width: 1000px) {
    footer{
        background-color: blueviolet;
    }
}

@media (max-width: 999px) and (min-width: 425px) {

}

@media (max-width: 424px) {

}
</style>