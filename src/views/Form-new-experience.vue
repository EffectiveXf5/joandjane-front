<template>
  <div>
    <h2>NUEVA EXPERIENCIA</h2>

    <section>
      <form class="section__form">
        <label>Título de la actividad:</label>
        <input type="text" v-model="activity.title" placeholder="Titulo">

        <label>Precio:</label>
        <input type="text" v-model="activity.price" placeholder="Precio">

        <label>Fotos:</label>
        <input type="file" placeholder="Fotos">

        <label>Destino:</label>
        <select v-model="activity.destination">
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

        <label>Tipo de Actividad:</label>
        <select v-model="activity.type">
          <option value="Actividades al aire libre">Actividades al aire libre</option>
          <option value="Rutas 4x4 y motor">Rutas 4x4 y motor</option>
          <option value="Actividades acuaticas">Actividades acuaticas</option>
          <option value="Barco y pesca">Barco y pesca</option>
          <option value="Nieve">Nieve</option>
          <option value="Niños">Niños</option>
        </select>

        <label>Resumen actividad:</label>
        <textarea v-model="activity.sumary" cols="40" rows="10"></textarea>

        <label>Duración:</label>
        <input v-model="activity.duration" type="text">

        <label>Cancelación:</label>
        <input v-model="activity.cancelation" type="text">

        <label>Niños:</label>
        <input type="checkbox" v-model="activity.children">

        <label>Confirmación:</label>
        <input type="checkbox" v-model="activity.instant_confirmation">

        <label>Ticket móvil:</label>
        <input type="checkbox" v-model="activity.mobile_ticket">

        <label>Pet-friendly:</label>
        <input type="checkbox" v-model="activity.pet_friendly">

        <label>Detalles experiencia:</label>
        <textarea v-model="activity.experience_details" cols="40" rows="10"></textarea>

        <label>¿Que incluye?</label>
        <select v-model="activity.includes">
          <option value="Parking">Parking</option>
          <option value="Seguro RC y accidentes">Seguro RC y accidentes</option>
          <option value="Seguro RC">Seguro RC</option>
          <option value="Vestuarios">Vestuarios</option>
          <option value="Transporte">Transporte</option>
          <option value="Monitor Cualificado">Monitor Cualificado</option>
          <option value="Equipamiento Completo">Equipamiento Completo</option>
          <option value="Guía de montaña">Guía de montaña</option>
          <option value="Recorrido en 4x4">Recorrido en 4x4</option>
          <option value="Fotografías de la excursión">Fotografías de la excursión</option>
          <option value="Tripulación profesional">Tripulación profesional</option>
          <option value="Briefing sobre manejo y seguridad">Briefing sobre manejo y seguridad</option>
        </select>

        <label>Ubicación:</label>
        <input v-model="activity.location" type="text">

        <label>Prepara tu experiencia:</label>
        <textarea v-model="activity.prepare_experience" cols="40" rows="10"></textarea>

        <label>Valoraciones:</label>
        <input v-model="activity.reviews" type="text">
        <input v-model="activity.reviews" type="date">
        <input v-model="activity.reviews" type="text">
        <textarea cols="30" rows="10"></textarea>
      </form>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Nueva-experiencia',

  data() {
    return {
      activity: ''
    }
  },
}

</script>

<style scoped>

  

</style>
