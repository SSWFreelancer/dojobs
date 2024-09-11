<template>
  <div class="home">
    <div class="cards">
      <Card class="item" v-for="stat in stats" :key="stat.id" :stat="stat"/>
      <div class="item">
        <div class="item__sbtw">
          <ul class="item__name">
              <li v-for="stat in stats" :key="stat.id" :class="stat.color">
                {{ stat.name }}
              </li>
            </ul>
          <div class="item__percent">
            <b>
              {{ totalPercent }}%
            </b>
            <div class="item__progress">
              <p>
                <span v-for="stat in stats" 
                  :key="stat.id" 
                  :style="{ width: stat.percent + '%' }" 
                  :class="stat.color"
                  >
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="grid">
      <div class="item">
        <div class="distances">
          <DistanceCard v-for="distance in distances" :key="distance.id" :distance="distance"/>
        </div>
      </div>
      <div class="item">
        <p class="item__title">Job Details</p>
        <Series :series="series"/>  
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import statsData from "@/mixins/stats/stats.js";
import distanceData from "@/mixins/distance/distance.js";
import seriesData from "@/mixins/series/series.js";
import Card from "./Card.vue";
import DistanceCard from "./Distance.vue";
import Series from "./Series.vue";
@Component({
  components: {
    Card,
    DistanceCard,
    Series
  }
})
export default class Home extends Vue {
  stats = statsData.data().stats;
  distances = distanceData.data().distance;
  series = seriesData.data().series;
  get totalPercent() {
    return this.stats.reduce((sum, stat) => sum + stat.percent, 0);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/home.sass'
</style>