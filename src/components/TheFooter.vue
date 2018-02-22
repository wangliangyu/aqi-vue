<template>
  <section id="footer">
    <p class="footer-copyright">{{ icp }}</p>
  </section>
</template>

<script>
export default {
  data(){
    return{
      icp: '苏ICP备 17070071号'
    }
  }
}
</script>

<style scoped>
  #footer{
    border-top: 1px solid #f0f0f0;
  }
</style>
