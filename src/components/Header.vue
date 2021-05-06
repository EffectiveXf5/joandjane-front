<template>
    <div>
        <nav class="header">
           <h1 id="titulo-header">JO&JANE</h1>
           <ul class="menu-nav">
             <li>DESTINOS</li>
             <li>EXPERIENCIAS</li>
             <li>QUIÉNES SOMOS</li>
             <li>BLOG</li>
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
}
#titulo-header {
    margin-left: 5%;
    font-size: 2em;
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
</style>