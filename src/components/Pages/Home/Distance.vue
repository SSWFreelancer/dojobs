<template>
    <div class="distance-card" :class="color">
        <div class="distance-card__count">{{ count }}</div>
        <div class="distance-card__title">Total Distance</div>
        <div class="distance-card__percent">
            <span :style="'height:' + percent + '%'">
                <b>
                    {{ percent }}%
                </b>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class DistanceCard extends Vue {
    @Prop ({ required: true }) count!: number;
    @Prop ({ required: true }) percent!: number;
    @Prop ({required: true}) color!: string;
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/distance.sass'
</style>