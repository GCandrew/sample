<script setup>
import { RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
   
<div>


</div>
  </header>
<main class="main1">
  <RouterView></RouterView>
</main>
 
</template>




<style>
.breadcrumb {
  font-size: 1rem;
  margin-bottom: 10px;
  position: absolute;
  top: 0px;
  right: 300px; /* Move the breadcrumb navigation to the right */
  z-index: 20;
}

.text-nowrap{
  white-space: nowrap;
}
.clickable {
  cursor: pointer;
}

.mtext1 {
  text-align:center;
}
.box {
  border: 1px solid white;
  margin: 10px;
  display: inline-block;
}
.main1 {
  width: 1400px;
  height: 1000px;
  overflow-y: scroll;
  border: 1px solid #ddd;

}

.menu1 {
  border: 1px solid white;
  background-color: rgb(244, 244, 242);
  font-size: 13pt;
  font-weight: bolder;
  color:black;
  text-indent: 10px;
  overflow:auto;
  /*text-align:left;
  vertical-align: middle ;*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10pt;
  height: 40pt;  
}

.menu2 {
  font-size: 9pt;
  font-weight: bolder;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.center-align {
  text-align: center;
}

.right-align {
  text-align: right;
}

.left-align {
  text-align: left;
}

.justify-align {
  text-align: justify;
}



 /* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}  */
</style>



