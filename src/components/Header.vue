<template>
    <div>
        <nav 
        :nav-links="navLinks" 
        class="header">
        <router-link to='/' id="titulo-header">JO&JANE</router-link>  
        <ul v-if="!mobileview" class="menu-nav">
          <li v-for="(link, index) in navLinks" :key="index">
            <router-link :to="link.path" id="links"> {{link.name}} </router-link>
          </li>
        </ul>
        <a  href="https://www.virtual.joandjane.es/" id="virtual"> VIRTUAL</a>
        <div id="navegation-icon">
          <img src="/images/bars-solid.svg" alt="menu-toggle">
        </div>
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
    background-color: var(--primary-color);
    font-family: var(--primary-font-family);
    display:flex;
    align-items: center;
    width:100%;
    height: 50%;
}

@media (min-width: 1000px) {
#titulo-header {
    margin-left:3%;
    padding-top:1.5%;
    padding-bottom: 1.5%;;
    font-size: 2.5rem;
    color:black
}
#titulo-header:hover {
   cursor:pointer;
   }
#navegation-icon{
   width: 10%;
   margin-right: 5%;
   display:none;
   }
.menu-nav {
    font-size: 1.4em;
    margin-left:-40%;
    }
 .menu-nav li {
   /* margin-right: 2%;
    padding: 2% 0 2% 0;
    font-weight: bolder;*/
    align-content: center;
}
.menu-nav li:hover {
   cursor: pointer;
   color:white;
   font-weight: bold;
} 

#links {
  /*  margin-right: 2%;*/
    margin:2%;
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
    width:25%;
    cursor:pointer;
    

}
#virtual:hover {
    background-color: var(--primary-color);
    color: black;
    box-shadow: inset 0 0 0 2.5px black;
}


  
}

@media (max-width: 999px) and (min-width: 425px) {
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
   margin-right: 5%;
   border: none;
   display:block;
   }
.menu-nav {
    font-size: 1.4em;
    margin-left:-45%;
    flex-wrap: nowrap;
    display:none;
}
/* .menu-nav li {
    margin-right: 2%;
    padding: 2% 0 2% 0;
    font-weight: bolder;
}
.menu-nav li:hover {
   cursor: pointer;
   color:white;
   font-weight: bold;
} */

#links {
    margin-right: 2%;
    padding: 2% 0 2% 0;
    font-weight: bolder;
    color:black;
    display:flex;
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
    margin-right: 3%;;
     width:25%;
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