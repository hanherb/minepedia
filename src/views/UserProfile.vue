<template>
  <d-container fluid class="main-content-container px-4">
    <d-row class="mt-4">
      <d-col lg="4" sm="12">
        <up-user-details />
        <up-user-activity />
      </d-col>

      <d-col lg="8">
        <up-user-laba-rugi v-if="user.role == 'user' || user.role == 'admin'" />
        <up-user-neraca v-if="user.role == 'user' || user.role == 'admin'" />
        <up-user-rasio-keuangan v-if="user.role == 'user' || user.role == 'admin'" />
        <up-user-goods v-if="user.role == 'supplier' || user.role == 'admin'" />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import graphqlFunction from '@/graphqlFunction';
import basicFunction from '@/basicFunction';
import address from '@/address';
import headers from '@/headers';

import UserDetails from '@/components/user-profile/UserDetails.vue';
import UserActivity from '@/components/user-profile/UserActivity.vue';
import UserLabaRugi from '@/components/user-profile/UserLabaRugi.vue';
import UserNeraca from '@/components/user-profile/UserNeraca.vue';
import UserRasioKeuangan from '@/components/user-profile/UserRasioKeuangan.vue';
import UserGoods from '@/components/user-profile/UserGoods.vue';

export default {
  name: 'user-profile',
  components: {
    upUserDetails: UserDetails,
    upUserActivity: UserActivity,
    upUserLabaRugi: UserLabaRugi,
    upUserNeraca: UserNeraca,
    upUserRasioKeuangan: UserRasioKeuangan,
    upUserGoods: UserGoods,
  },
  data(){
    return{
      user: {},  
    }
  },

  created: function() 
  {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      var id = window.location.href.split("?id=")[1];
      this.axios.get(address + ":3000/get-user", headers).then((response) => {
        let query = `query getSingleUser($userId: String!) {
          user(_id: $userId) {
            _id
            fullname
            email
            role
            status
            authority
            badan_usaha
            izin
            generasi
            tahapan_kegiatan
            komoditas
            alamat_kantor
            telepon
            fax
            website
            npwp
            lokasi_tambang
            profile_picture
          }
        }`;
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
