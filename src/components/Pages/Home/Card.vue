<template>
    <div class="card">
        <div class="card__icon" :class="stat.color">
            <i :class="stat.icon"></i>
        </div>
        <div class="card__count">{{ stat.count }}+</div>
        <div class="card__title">{{ stat.name }}</div>
        <div class="card__percent" :class="stat.color">
            <b>
                {{ stat.percent }}%
            </b>
            <p>
                <span :style="'width:' + stat.percent + '%'"></span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
    @Prop ({ required: true }) stat!: any;

}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/card.sass'
</style>