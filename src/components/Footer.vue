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
                    <p><i class="fas fa-mobile-alt"></i>&nbsp;644 184 492</p>
                    <p><i class="far fa-envelope-open"></i>&nbsp;hola@joandjane.es</p>
                    <p><i class="fas fa-map-marker-alt"></i>&nbsp;Coworking Edificio Impulsa Parque Científico-Tecnológico de Gijón<br>CP 33203 Asturias (España)</p>
                    <img src="../assets/footer-icons/whatsapp.png" alt="icono whatsapp">
                </article>
                <article class="footer__section-pay">
                    <h3>PAGA CON</h3>
                    <div class="pay-icons">
                        <img src="../assets/footer-icons/logo-bizum.png" alt="logo bizum">
                        <img src="../assets/footer-icons/logo-mastercard.png" alt="logo mastercard">
                        <img src="../assets/footer-icons/logo-americanexpress.png" alt="logo american express">
                        <img src="../assets/footer-icons/logo-visa.png" alt="logo visa">
                        <img src="../assets/footer-icons/logo-stripe.png" alt="logo stripe">
                        <img src="../assets/footer-icons/logo-tick.png" alt="logo tick">
                        <img src="../assets/footer-icons/pago-seguro.png" alt="logo pago seguro">
                        <img src="../assets/footer-icons/pago-encriptacion.png" alt="logo pago encriptado">
                    </div>
                </article>
                <article class="footer__section-social-media">
                    <img src="../assets/footer-icons/facebook.svg" alt="logo facebook" class="rrss-icon">
                    <img src="../assets/footer-icons/instagram.svg" alt="logo instagram" class="rrss-icon">
                    <img src="../assets/footer-icons/linkedin.svg" alt="logo linkedin" class="rrss-icon">
                </article>
                <article class="footer__section-google">
                    <img src="../assets/footer-icons/logo-google.png" alt="logo google">
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
    font-family: var(--primary-font-family);
    /* position: absolute; */
    bottom: 0;
    width: 100%;
    text-align: justify;
}


@media (min-width: 1000px) {
        .footer__section-contact-us img{
        width: 2rem;
    }
}



@media (max-width: 999px) and (min-width: 425px) {
    #footer__title{
        color: var(--primary-color);
        background-color: black;
        text-align: center;
        font-size: 1.5rem;
        letter-spacing: 2px;
        margin-bottom:1rem;
    }

    .footer__section{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3);
        margin-right: 1rem;
        margin-left: 1rem;
        font-size:0.8rem;
        line-height: 1.8rem;
        column-gap: 2rem;
    }

    .footer__section-about-us{
        grid-column: 1;
        grid-row: 1/1;
    }

    .footer__section-contact-us{
        grid-column: 2;
        grid-row: 1/2;
    }
    .footer__section-contact-us img{
        width: 2.3rem;
    }

    .footer__section-pay{
        grid-column: 3;
        grid-row: 1/2;
    }


    .footer__section-social-media{
        grid-column: 2;
        grid-row: 2/3;
        text-align: center;
    }
    .rrss-icon{
        padding-right: 1rem;
    }

    .footer__section-google{
        grid-column: 1/3;
        grid-row: 3;
        text-align: center;
    }

}

@media (max-width: 424px) {
    #footer__title{
        color: var(--primary-color);
        background-color: black;
        text-align: center;
        font-size: 1.4rem;
        letter-spacing: 2px;
        margin-bottom:1rem;
    }

    .footer__section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3);
        row-gap: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
        font-size:0.9rem;
        line-height: 1.8rem;
    }

    .footer__section-about-us{
        grid-column: 1;
        grid-row: 1/1;
    }

    .footer__section-contact-us{
        grid-column: 2;
        grid-row: 1/3;
        text-align: left;
    }
    .footer__section-contact-us img{
        width: 2.3rem;
    }

    .footer__section-pay{
        grid-column: 1;
        grid-row: 1/3;
        margin-top: 10rem;
        align-items: center;
    }


    .footer__section-social-media{
        grid-column: 2;
        grid-row: 2/3;
        margin-top: 15rem;
        text-align: center;
    }
    .rrss-icon{
        padding-right: 1rem;
    }

    .footer__section-google{
        grid-column: 1/3;
        grid-row: 3;
        text-align: center;
    }

}
</style>