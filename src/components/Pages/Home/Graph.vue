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
        <img v-if="isUrl(graph.content[0])" :src="graph.content[0]" alt="">
        <p v-else>
          {{ graph.content[0] }}
        </p>
      </div>
      <div v-if="activeTab === 1">
        <img v-if="isUrl(graph.content[1])" :src="graph.content[1]" alt="">
        <p v-else>
          {{ graph.content[1] }}
        </p>
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
    isUrl(text: string): boolean {
      return text.startsWith("http");
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/graph.sass'
</style>