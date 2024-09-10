<template>
  <router-link to="/user" class="user">
    <div class="user__image">
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="user__right">
        <div class="user__name">
            John Doe
        </div>
        <div class="user__mail">
            johndoe@gmail.com
        </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class User extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/style/aside/user.sass'
</style>