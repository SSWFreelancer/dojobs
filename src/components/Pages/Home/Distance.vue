<template>
    <div class="distance-card" :class="distance.color">
        <div class="distance-card__count">{{ distance.count }}</div>
        <div class="distance-card__title">Total Distance</div>
        <div class="distance-card__percent">
            <span :style="'height:' + distance.percent + '%'">
                <b>
                    {{ distance.percent }}%
                </b>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DistanceCard extends Vue {
    @Prop ({ required: true }) distance!: any;
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/distance.sass'
</style>