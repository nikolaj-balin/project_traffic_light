<template>
  <section class="users_progress">
    <div class="container">
      <h1>Достижения пользователей</h1>
      <users-table />
    </div>
  </section>
</template>

<script>

import UsersTable from './UsersTable/UsersTable.vue';

export default {
  components: { UsersTable }
};
</script>

<style lang="scss" scoped>

</style>
