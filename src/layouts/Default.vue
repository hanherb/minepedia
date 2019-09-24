<template>
  <d-container fluid>
    <d-row>
      <d-col class="main-content p-0" tag="main">

        <!-- Main Navbar -->
        <navbar />

        <!-- Content -->
        <slot />
        
        <main-footer />
      </d-col>

    </d-row>
  </d-container>
</template>

<script>
import getSidebarItems from '@/data/sidebar-nav-items';
import gql from '@/gql';
import graphqlFunction from '@/graphqlFunction';
import basicFunction from '@/basicFunction';
import address from '@/address';

// Main layout components
import Navbar from '@/components/layout/Navbar.vue';
import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

export default {
  name: 'analytics',
  components: {
    Navbar,
    MainFooter,
  },
  data() {
    return {
      
    };
  }
};
</script>

