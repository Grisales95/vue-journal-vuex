<template>
  <NavBar />

  <div class="d-flex">
    <div class="col-4"><EntryList /></div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import EntryList from '../components/EntryList.vue';
export default {
  components: {
    NavBar: defineAsyncComponent(() => import('../components/NavBar.vue')),
    EntryList,
  },
};
</script>
