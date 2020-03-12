<template>
  <section class="users_progress">
    <div class="container">
      <h1>Достижения пользователей</h1>
      <panel-filter />
      <users-table />
    </div>
  </section>
</template>

<script>

import UsersTable from './UsersTable/UsersTable.vue';
import PanelFilter from './PanelFilter/PanelFilter.vue';

export default {
  components: { UsersTable, PanelFilter }
};
</script>

<style lang="scss" scoped>

</style>
