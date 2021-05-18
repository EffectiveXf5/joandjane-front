<template>
    <div>
        <nav class="header">
            <router-link to="/" class="links">
           <h1 id="titulo-header">JO&JANE</h1>
           </router-link>
           <ul class="menu-nav">
             <router-link to="/destinos" class="links">
             <li> DESTINOS</li>
             </router-link> 
             <router-link to="/experiencias" class="links">
             <li>EXPERIENCIAS</li>
             </router-link>
             <router-link to="/" class="links">
             <li>QUIÉNES <br> SOMOS</li>
             </router-link>
             <router-link to="/blog" class="links">
             <li>BLOG</li>
             </router-link>
             <li id="virtual">VIRTUAL</li>
           </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header'
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
    padding-top: 2.5px;
    padding-bottom: 2.5px;
}
#titulo-header {
    margin-left: 5%;
    font-size: 2em;
}
#titulo-header:hover {
   cursor:pointer;
   }
.menu-nav {
    font-size: 1.4em;
    margin-left:-45%;
}
.menu-nav li {
    margin-right: 2%;
    padding: 2% 0 2% 0;
    font-weight: bolder;
}
.menu-nav li:hover {
   cursor: pointer;
   color:white;
   font-weight: bold;
}
.links{
    color: black;
}

#virtual {
    background-color: black;
    color: var(--primary-color);
    justify-content: center;
    border-radius: 15px;
    padding: 1% 0 1% 0;
}
#virtual:hover {
    background-color: var(--primary-color);
    color: black;
    box-shadow: inset 0 0 0 2.5px black;
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