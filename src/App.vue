<template>
  <div>
    <MyHeader/>
    <router-view/>
    <MyFooter/>
  </div>
</template>

<script>

  import MyHeader from './components/layout/MyHeader'
  import MyFooter from './components/layout/MyFooter'

export default {
  name: 'App',

  components:{
    MyHeader,
    MyFooter
  },

  data: () => ({
    //
  }),
};
</script>
