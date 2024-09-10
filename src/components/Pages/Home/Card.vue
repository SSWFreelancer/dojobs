<template>
    <div class="card">
        <div class="card__icon" :class="color">
            <i :class="icon"></i>
        </div>
        <div class="card__count">{{ count }}+</div>
        <div class="card__title">{{ name }}</div>
        <div class="card__percent" :class="color">
            <b>
                {{ percent }}%
            </b>
            <p>
                <span :style="'width:' + percent + '%'"></span>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
    @Prop ({ required: true }) icon!: string;
    @Prop ({ required: true }) name!: string;
    @Prop ({ required: true }) count!: number;
    @Prop ({ required: true }) percent!: number;
    @Prop ({required: true}) color!: string;
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/Pages/Home/card.sass'
</style>