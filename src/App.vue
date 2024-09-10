<template>
  <div class="wrapper" :class="this.$store.getters.isDarkMode ? 'dark' : ''">
      <Aside />
      <main>
        <router-view />
      </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Aside from '@/components/Aside/Aside.vue';

@Component({
  components: {
    Aside
  }
})
export default class App extends Vue {}
</script>