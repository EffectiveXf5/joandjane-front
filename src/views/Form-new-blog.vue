<template>
  <main class="main">
    <h2 class="main__title">NUEVO POST</h2>

    <section class="main__section">
      <form class="main__section-form" @submit.prevent="sendForm">
        <label class="label">Título del post:</label>
        <input class="input" type="text" v-model="blog.title" placeholder="Titulo">

        <label class="label">Autor/a:</label>
        <input class="input" type="text" v-model="blog.author" placeholder="Autor/a">

        <label class="label">Tiempo de lectura:</label>
        <input class="input" type="text" v-model="blog.reading_time" placeholder="Tiempo de lectura">

  <!-- AQUI VA LA IMAGEN
        <label class="label">Imagen</label>
        <input class="input" type="text" v-model="blog.img"> -->

        <label class="label">Texto del post:</label>
        <textarea class="input" v-model="blog.description" cols="40" rows="10" placeholder="Descripción del post"></textarea>
        
        <label class="label">Fecha de creación:</label>
        <input class="input" v-model="blog.createdAt" type="date" placeholder="Fecha creación">

        <button class="btn-submit" type="submit">Enviar</button>
      </form>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Nuevo-blog',

  data() {
    return {
      blog: {
        title: '',
        author: '',
        reading_time: '',
        img: '',
        description: '',
        createdAt: '',
      }
    }
  },



  methods: {
    sendForm() {
      this.axios.post('/blog/create-blog', this.blog)
        .then( res => {
          this.blog.push(res.data)
          this.blog = '',
          this.blog.title = '',
          this.blog.author = '',
          this.blog.destination = '',
          this.blog.reading_time = '',
          this.blog.description = '',
          this.blog.createdAt = ''
        })

        .catch( e => {
          return e.response
        })
    },

    /* clickImg(e) {
      this.blog.img = e.target.file
      console.log(this.blog.img)
    }, */
  }
}

</script>

<style scoped>
*{
  font-family: var(--primary-font-family);
}
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
