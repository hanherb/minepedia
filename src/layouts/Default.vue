<template>
  <d-container fluid>
    <d-row>
      <!-- Main Sidebar -->
      <main-sidebar :items="sidebarItems" />

      <d-col class="main-content offset-lg-2 offset-md-3 p-0" tag="main" lg="10" md="9" sm="12">

        <!-- Main Navbar -->
        <main-navbar />

        <!-- Content -->
        <slot />

        <!-- Main Footer -->
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
import MainNavbar from '@/components/layout/MainNavbar/MainNavbar.vue';
import MainSidebar from '@/components/layout/MainSidebar/MainSidebar.vue';
import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

export default {
  name: 'analytics',
  components: {
    MainNavbar,
    MainSidebar,
    MainFooter,
  },
  data() {
    return {
      sidebarItems: getSidebarItems(),
    };
  },
  created: function() 
  {
    if(this.$session.get('user')) {
      this.fetchUsers();
    }
  },

  methods: {
    fetchUsers() {
      var config = {
        headers: {
          "authorization": "Bearer " + document.cookie.split('token=')[1].split('; ')[0],
          "user_session": document.cookie.split('user_session=')[1].split('; ')[0],
          "user_authority": document.cookie.split('user_authority=')[1].split('; ')[0],
        }
      };
      this.axios.get(address + ":3000/get-user", config).then((response) => {
        let query = gql.allUser;
        graphqlFunction.graphqlFetchAll(query, (result) => {
          for(var i = 0; i < result.users.length; i++) {
            if(result.users[i].role == "user") {
              this.sidebarItems[1].items.push({
                title: result.users[i].fullname,
                htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
                to: {
                  path: '/user-profile/' + result.users[i]._id,
                  role: 'admin'
                },
              });
            }
          }
        });
      })
    },
  }
};
</script>

