<template>
  <div class="graph">
    <div class="graph__nav">
      <p
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="changeTab(index)"
      >
        {{ tab.label }}
      </p>
    </div>
    <div class="graph__content">
      <div v-if="activeTab === 0">
        {{ graph.content[0].text1 }}
        <img v-if="graph.content[0].image1" :src="graph.content[0].image1" alt="">
      </div>
      <div v-if="activeTab === 1">
        {{ graph.content[0].text2 }}
        <img v-if="graph.content[0].image2" :src="graph.content[0].image2" alt="">
      </div>
    </div>   
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Graph extends Vue {
    @Prop () graph!: any

    tabs = [
        { label: "All Statistic" },
        { label: "All Chart" },
    ];
    activeTab: number = 0;
    changeTab(index: number) {
        this.activeTab = index;
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/graph.sass'
</style>