<template>
    <div id="header-mobile">
        <nav 
        :nav-links="navLinks" 
        class="header">
        <ul v-if="!mobileview" id="menu-nav">
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.path" id="links"> {{link.name}} </router-link>
          </li>
           <a  href="https://www.virtual.joandjane.es/" id="virtual"> VIRTUAL</a>
        </ul>
        <!-- <div id="social-icon">
           <i fab fa-twitter></i>
           <i fab fa-instagram></i>
          <!<img src="../assets/images/bars-solid.svg" alt="menu-toggle">
        </div> -->
        </nav>
       
    </div>
</template>

<script>

export default {
    name: 'Header',
    // props: ['navLinks'],
    data:()=> ({
      mobileview: false,
      showNav:false,
        navLinks: [
  {
    path: '/destinos',
    name: 'DESTINOS',
  },
  {
    path: '/experiencias',
    name: 'EXPERIENCIAS',
  },
  {
    path: '/',
    name: 'QUIÉNES SOMOS'
  },
  {
    path: '/blog',
    name: 'BLOG'
  },
 ]}
 ),
 methods: {
   handleView() {
     this.mobileview
   }

 }
}
</script>

<style scoped>
* {
    background-color: var(--senary-color);
    font-family: var(--primary-font-family);
   
}
@media (min-width: 1000px) {
#header-mobile{
    display:flex;
    align-items: center;
    width:100%;
    height: 50%;
}
#titulo-header {
    margin-left:3%;
    padding-top:1.5%;
    padding-bottom: 1.5%;;
    font-size: 2.5rem;
}
#titulo-header:hover {
   cursor:pointer;
   }
#navegation-icon{
   width: 10%;
   border: solid 5px black;
   margin-right: 5%;
  display:none;
   }

#menu-nav li:hover {
   cursor: pointer;
   color:white;
   font-weight: bold;
} 

#links {
    padding: 2%;
    font-weight: bolder;
    color:black;
}
#links:hover {
   cursor: pointer;
   color:white;
   font-weight: bold;
}

#virtual {
    background-color: black;
    color: var(--primary-color);
    justify-content: center;
    border-radius: 15px;
    padding: 1% 0 1% 0;
    margin-right:3%;
    cursor:pointer;

}
#virtual:hover {
    background-color: var(--primary-color);
    color: black;
    box-shadow: inset 0 0 0 2.5px black;
}


   
}

@media (max-width: 999px) and (min-width: 425px) {
.header {
display:flex;
font-size: 3rem;
justify-content: flex-end;
row-gap: 5%;
}
#titulo-header {
    font-size: 2.5rem;
}
#titulo-header:hover {
   cursor:pointer;
   }

#links {
    
    font-weight: bolder;
    color:black;
}
#links:hover {
   cursor: pointer;
   color:white;
   font-weight: bold;
}

#virtual {
    background-color: black;
    color: var(--primary-color);
    justify-content: center;
    border-radius: 15px;
    padding: 1% 0 1% 0;
    display:none;

}
#virtual:hover {
    background-color: var(--primary-color);
    color: black;
    box-shadow: inset 0 0 0 2.5px black;
}

}

@media (max-width: 424px) {

}
</style>