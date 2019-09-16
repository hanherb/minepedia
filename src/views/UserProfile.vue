<template>
  <d-container fluid class="main-content-container px-4">
    <d-row class="mt-4">
      <d-col lg="4" sm="12">
        <up-user-details />
      </d-col>

      <d-col lg="8">
        <up-rekap-belanja-barang-perusahaan v-if="user.role == 'user' || user.role == 'admin'" />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import gql from '@/gql';
import graphqlFunction from '@/graphqlFunction';
import basicFunction from '@/basicFunction';
import address from '@/address';
import headers from '@/headers';

import UserDetails from '@/components/user-profile/UserDetails.vue';
import RekapBelanjaBarangPerusahaan from '@/views/RekapBelanjaBarangPerusahaan.vue';

export default {
  name: 'user-profile',
  components: {
    upUserDetails: UserDetails,
    upRekapBelanjaBarangPerusahaan: RekapBelanjaBarangPerusahaan,
  },
  data(){
    return{
      user: {},
      session: {},
    }
  },

  created: function() 
  {
    this.fetchUser();
    this.session = this.$session.get('user');
  },

  watch: {
    '$route.params.id': function (id) {
      location.reload();
    }
  },

  methods: {
    fetchUser() {
      var id = window.location.href.split("user-profile/")[1];
      this.axios.get(address + ":3000/get-user", headers).then((response) => {
        let query = gql.singleUser;
        let variable = {
          userId: id
        };
        graphqlFunction.graphqlFetchOne(query, variable, (result) => {
          this.user = result.user;
        });
      })
    },
  }
};
</script>
