<template>
  <div>
    <the-preloader></the-preloader>
    <the-navigation></the-navigation>
    <the-home></the-home>
    <the-about></the-about>
    <the-skill></the-skill>
    <the-work></the-work>
    <the-footer></the-footer>
  </div>
</template>

<script>
import ThePreloader from './ThePreloader.vue'
import TheNavigation from './TheNavigation.vue'
import TheHome from './TheHome.vue'
import TheAbout from './TheAbout.vue'
import TheSkill from './TheSkill.vue'
import TheWork from './TheWork.vue'
import TheFooter from './TheFooter.vue'

export default {
  components:{
    'the-preloader': ThePreloader,
    'the-navigation': TheNavigation,
    'the-home': TheHome,
    'the-about': TheAbout,
    'the-skill': TheSkill,
    'the-work': TheWork,
    'the-footer': TheFooter
  }
};
</script>