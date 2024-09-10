<template>
    <DefaultPage>
        Страница пользователя
    </DefaultPage>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultPage from "@/components/DefaultPage.vue";
@Component({
  components: {
    DefaultPage
  }
})
export default class UserView extends Vue {}
</script>