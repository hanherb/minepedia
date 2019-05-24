<template lang="pug">
  <d-container fluid class="main-content-container px-4 pb-4">
    <v-client-table class="dataTables_wrapper" :data="tableData" :columns="columns" :options="clientTableOptions">
      <!-- Column Slot -->
    </v-client-table>
  </d-container>
</template>
<script>
import graphqlFunction from '@/graphqlFunction';
import basicFunction from '@/basicFunction';
import address from '@/address';
import headers from '@/headers';
import Vue from 'vue';
import { ClientTable } from 'vue-tables-2';
import '@/assets/scss/vue-tables.scss';

Vue.use(ClientTable);

export default {
  name: 'company-table',
  components: {
    ClientTable,
  },
  data(){
    return{
      columns: ['fullname', 
                'email', 
                'badan_usaha', 
                'izin', 
                'generasi',
                'tahapan_kegiatan',
                'komoditas',
                'alamat_kantor',
                'telepon',
                'fax',
                'website',
                'npwp',
                'lokasi_tambang',
      ],
      tableData: [],
      clientTableOptions: {
        perPage: 10,
        recordsPerPage: [10, 25, 50, 100],
        skin: 'transaction-history table dataTable',
        sortIcon: {
          base: 'fas float-right mt-1 text-muted',
          up: 'fa-caret-up',
          down: 'fa-caret-down',
        },
        texts: {
          filterPlaceholder: '',
          limit: 'Show',
        },
        pagination: {
          edge: true,
          nav: 'scroll',
        },
      },
    }
  },

  created: function()
  {
    this.fetchUsers();
  },

  methods: {
    fetchUsers() {
      this.axios.get(address + ":3000/get-user", headers).then((response) => {
        let query = `query getAllUser {
          users {
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
        graphqlFunction.graphqlFetchAll(query, (result) => {
          for(var i = 0; i < result.users.length; i++) {
            if(result.users[i].role == 'user') {
              this.tableData.push(result.users[i]);
            }
          }
        });
      })
    },
    handleActionClick(type, id) {
      alert(`You have ${type} item ${id}`); // eslint-disable-line no-alert
    },
  }
}
</script>
