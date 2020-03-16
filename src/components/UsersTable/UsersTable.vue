<template>
  <div class="users_table">
    <table class="resp-tab">
      <thead>
        <users-thead />
      </thead>
      <users-tbody />
    </table>

  </div>
</template>

<script>
    import {mapState} from "vuex";
    import UsersThead from './UsersThead/UsersThead.vue';
    import UsersTbody from './UsersTbody/UsersTbody.vue';
    export default {
        name: "SearchFieldSity",
        components: {
          UsersThead, UsersTbody
        }
    }
</script>

<style lang="scss" scoped>

</style>
