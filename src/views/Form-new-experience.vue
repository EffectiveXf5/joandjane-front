<template>
  <main class="main">
    <h2 class="main__title">NUEVA EXPERIENCIA</h2>

    <section class="main__section">
      <form class="main__section-form" @submit.prevent="sendForm">
        <label class="label">Título de la actividad:</label>
        <input class="input" type="text" v-model="activity.title" placeholder="Titulo">

        <label class="label">Precio:</label>
        <input class="input" type="text" v-model="activity.price" placeholder="Precio">

        <label class="label">Destino:</label>
        <select class="input" v-model="activity.destination">
          <option disabled value="">Seleccione un destino</option>
          <option value="Arriondas">Arriondas</option>
          <option value="Gijón">Gijón</option>
          <option value="Oviedo">Oviedo</option>
          <option value="Avilés">Avilés</option>
          <option value="Llanes">Llanes</option>
          <option value="Ribadesella">Ribadesella</option>
          <option value="Villaviciosa">Villaviciosa</option>
          <option value="Cangas de Onís">Cangas de Onís</option>
          <option value="Poncebos">Poncebos</option>
          <option value="Pola de Laviana">Pola de Laviana</option>
          <option value="Somiedo">Somiedo</option>
          <option value="Cabrales">Cabrales</option>
          <option value="Cangas de Narcea">Cangas de Narcea</option>
          <option value="Taramundi">Taramundi</option>
          <option value="Navia">Navia</option>
          <option value="Tapia de Casariego">Tapia de Casariego</option>Somiedo
        </select>

        <label class="label">Tipo de Actividad:</label>
        <select class="input" v-model="activity.type">
          <option disabled value="">Tipo de Actividad</option>
          <option value="Actividades al aire libre">Actividades al aire libre</option>
          <option value="Rutas 4x4 y motor">Rutas 4x4 y motor</option>
          <option value="Actividades acuaticas">Actividades acuaticas</option>
          <option value="Barco y pesca">Barco y pesca</option>
          <option value="Nieve">Nieve</option>
          <option value="Niños">Niños</option>
        </select>

        <label class="label">Resumen actividad:</label>
        <textarea class="input" v-model="activity.sumary" cols="40" rows="10"></textarea>

        <label class="label">Duración:</label>
        <input class="input" v-model="activity.duration" type="text">

        <label class="label">Cancelación:</label>
        <input class="input" v-model="activity.cancelation" type="text">

        <label class="label option">Niños:</label>
        <select class="input" v-model="activity.children">
          <option disabled value="">Seleccione opción</option>
          <option value="true">Si</option>
          <option value="no">No</option>
        </select>

        <label class="label">Confirmación:</label>
        <select class="input" v-model="activity.instant_confirmation">
          <option disabled value="">Seleccione el tipo</option>
          <option value="Instantánea">Instantanea</option>
          <option value="Próxima">Próxima</option>
        </select>

        <label class="label option">Ticket móvil:</label>
        <select class="input" v-model="activity.mobile_ticket">
          <option disabled value="">Seleccione opción</option>
          <option value="true">Si</option>
          <option value="false">No</option>
        </select>

        <label class="label option">Pet-friendly:</label>
        <select class="input" v-model="activity.pet_friendly">
          <option disabled value="">Seleccione opción</option>
          <option value="yes">Si</option>
          <option value="false">No</option>
        </select>

        <label class="label">Detalles experiencia:</label>
        <textarea class="input" v-model="activity.experience_details" cols="40" rows="10"></textarea>

        <label class="label">¿Que incluye?</label>
        <select class="input" v-model="activity.includes">
          <option disabled value="">Seleccione una opcion</option>
          <option value="Parking">Parking</option>
          <option value="Seguro RC y accidentes">Seguro RC y accidentes</option>
          <option value="Seguro RC">Seguro RC</option>
          <option value="Vestuarios">Vestuarios</option>
          <option value="Guia oficial del Principado de Asturias">Guia oficial del Principado de Asturias</option>
          <option value="Material Necesario">Material Necesario</option>
          <option value="Vistas Espectaculares">Vistas Espectaculares</option>
          <option value="Transporte">Transporte</option>
          <option value="Monitor Cualificado">Monitor Cualificado</option>
          <option value="Equipamiento Completo">Equipamiento Completo</option>
          <option value="Guía de montaña">Guía de montaña</option>
          <option value="Recorrido en 4x4">Recorrido en 4x4</option>
          <option value="Fotografías de la excursión">Fotografías de la excursión</option>
          <option value="Tripulación profesional">Tripulación profesional</option>
          <option value="Briefing sobre manejo y seguridad">Briefing sobre manejo y seguridad</option>
        </select>

        <label class="label">Ubicación:</label>
        <input class="input" v-model="activity.location" type="text">

        <label class="label">Prepara tu experiencia:</label>
        <textarea class="input" v-model="activity.prepare_experience" cols="40" rows="10"></textarea>

        <label class="label">Valoraciones:</label>
        <label>Nombre:</label>
        <input class="input" v-model="activity.reviews.name" type="text">
        <label>Fecha:</label>
        <input class="input" v-model="activity.reviews.date" type="date">
        <label>Estrellas:</label>
        <input class="input" v-model="activity.reviews.stars" type="number">
        <label>Comentario:</label>
        <textarea class="input" v-model="activity.reviews.comment" cols="30" rows="10"></textarea>

        <input type="file" @change="fotoSelected">

        <button class="btn-submit" type="submit">Enviar</button>
      </form>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Nueva-experiencia',

  data() {
    return {
      activity: {
        title: '',
        price: '',
        img: '',
        destination: '',
        type: '',
        sumary: '',
        duration: '',
        cancelation: '',
        children: '',
        instant_confirmation: '',
        mobile_ticket: '',
        pet_friendly: '',
        experience_details: '',
        includes: '',
        location: '',
        prepare_experience: '',
        reviews: {
          name: '',
          date: '',
          stars: '',
          comment: ''
        }
      }
    }
  },



  methods: {
    fotoSelected(event){
       this.activity.img = "/images/" + event.target.files[0].name;
    },
    sendForm() {
      this.axios.post('/activity/create-activity', this.activity)
        .then( res => {
          this.activity.push(res.data)
          this.activity = '',
          this.activity.title = '',
          this.activity.price = '',
          this.activity.img = '',
          this.activity.destination = '',
          this.activity.type = '',
          this.activity.sumary = '',
          this.activity.duration = '',
          this.activity.cancelation = '',
          this.activity.children = '',
          this.activity.instant_confirmation = '',
          this.activity.mobile_ticket = '',
          this.activity.pet_friendly = '',
          this.activity.pet_friendly = '',
          this.activity.experience_details = '',
          this.activity.includes = '',
          this.activity.location = '',
          this.activity.prepare_experience = '',
          this.activity.reviews.name = '',
          this.activity.reviews.date = '',
          this.activity.reviews.stars = '',
          this.activity.reviews.comment = ''
        })

        .catch( e => {
          return e.response
        })
    },

    /* clickImg(e) {
      this.activity.img = e.target.file
      console.log(this.activity.img)
    }, */
  }
}

</script>

<style scoped>

  .main__title {
    padding: 50px;
    text-align: center;
  }

  .main__section {
    width: 80%;
    margin: auto;
  }

  .main__section-form {
    display: flex;
    flex-direction: column;
  }

  .main__section-form input {
    width: 75%;
    align-self: center;
    margin-top: 5px;
  }

  .main__section-form label {
    width: 75%;
    align-self: center;
    margin-top: 10px;
  }

  .main__section-form textarea {
    width: 75%;
    align-self: center;
    margin-top: 5px;
  }

  .main__section-form select {
    width: 75%;
    align-self: center;
    margin-top: 5px;
  }

  .option {
    align-self: center;
  }

  .btn-submit {
    width: 25%;
    align-self: center;
    margin: 20px auto 20px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: var(--tertiary-color);
    color: rgb(224, 224, 224);
    cursor: pointer;
  }

  @media(max-width: 450px) {
    .main__title {
      font-size: smaller;
    }
  }

</style>
