<template>
  <d-card class="card-small user-activity mb-4">

    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
      <div class="block-handle"></div>
    </d-card-header>

    <!-- Activity Items -->
    <v-client-table class="dataTables_wrapper" :data="tableData" :columns="columns" :options="clientTableOptions">
      <!-- Actions Column Slot -->
      <d-button-group slot="actions" slot-scope="props" size="small" class="d-flex justify-content-center">
        <d-link :to="'/update-user?id=' + props.row._id">
          <d-button class="btn-white" v-d-tooltip.hover="'Edit'">
            <i class="material-icons">&#xE254;</i>
          </d-button>
        </d-link>
        <d-link :to="'/delete-user?id=' + props.row._id">
          <d-button class="btn-white" v-d-tooltip.hover="'Delete'">
            <i class="material-icons">&#xE872;</i>
          </d-button>
        </d-link>
      </d-button-group>
    </v-client-table>
  </d-card>
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
  name: 'user-laba-rugi',
  props: {
    /**
     * The component title.
     */
    title: {
      type: String,
      default: 'User Laba Rugi',
    },
  },
  components: {
    ClientTable,
  },
  data() {
    return {
      columns: [],
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
      this.fetchLabaRugi();
  },

  methods: {
    fetchLabaRugi() {
      var id = window.location.href.split("?id=")[1];
      this.axios.get(address + ":3000/get-laba-rugi", headers).then((response) => {
        for(let i = 0; i < response.data.length; i++) {
          if(response.data[i].upload_by == id) {
            if(i == 0) {
              this.columns.push('Tahun');
            }
            var temp = [];
            for(let j = 0; j < response.data[i].data.length; j++) {
              if(response.data[i].data[j]["URAIAN"] == "Penjualan" ||
                response.data[i].data[j]["URAIAN"] == "Harga Pokok Penjualan" ||
                response.data[i].data[j]["URAIAN"] == "Laba (Rugi) kotor" ||
                response.data[i].data[j]["URAIAN"] == "Laba/ (Rugi) Operasi" ||
                response.data[i].data[j]["URAIAN"] == "Laba/(Rugi) sebelum Pajak" ||
                response.data[i].data[j]["URAIAN"] == "Laba/ (Rugi) Bersih") {
                this.columns.push(response.data[i].data[j]["URAIAN"]);
                if(!response.data[i].data[j]["REALISASI TAHUN 2018"]) {
                  response.data[i].data[j]["REALISASI TAHUN 2018"] = 0;
                }
                temp.push(response.data[i].data[j]["REALISASI TAHUN 2018"]);
              }
            }
            this.tableData = [{
              "Tahun": '2018',
              "Penjualan": temp[0],
              "Harga Pokok Penjualan": temp[1], 
              "Laba (Rugi) kotor": temp[2],
              "Laba/ (Rugi) Operasi": temp[3],
              "Laba/(Rugi) sebelum Pajak": temp[4],
              "Laba/ (Rugi) Bersih": temp[5],
            }]
          }
        }
      });
    }
  }
};
</script>
