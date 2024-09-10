<template>
  <div class="home">
    <div class="cards">
      <Card class="item" v-for="stat in stats" :key="stat.id" :icon="stat.icon" :name="stat.name" :count="stat.count" :percent="stat.percent" :color="stat.color"/>
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
          <DistanceCard v-for="distance in distances" :key="distance.id" :count="distance.count" :percent="distance.percent" :color="distance.color"/>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import statsData from "@/mixins/stats/stats.js";
import distanceData from "@/mixins/distance/distance.js";
import Card from "./Card.vue";
import DistanceCard from "./Distance.vue";
@Component({
  components: {
    Card,
    DistanceCard
  }
})
export default class Home extends Vue {
  stats = statsData.data().stats;
  distances = distanceData.data().distance;
  get totalPercent() {
    return this.stats.reduce((sum, stat) => sum + stat.percent, 0);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/home.sass'
</style>