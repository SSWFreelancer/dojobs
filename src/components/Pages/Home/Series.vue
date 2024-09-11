<template>
  <div class="series">
    <table>
        <thead>
            <tr>
                <th>Series</th>
                <th>Point</th>
                <th>%</th>
                <th>%</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="series in series" :key="series.id">
                <td>{{ series.series }}</td>
                <td>{{ series.point }}</td>
                <td>{{ series.percent1 }}</td>
                <td>{{ series.percent2 }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Series extends Vue {
    @Prop () series!: any
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/series.sass'
</style>