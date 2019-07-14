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
  name: 'user-neraca',
  props: {
    /**
     * The component title.
     */
    title: {
      type: String,
      default: 'User Neraca',
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
      this.fetchNeraca();
  },

  methods: {
    fetchNeraca() {
      var id = window.location.href.split("?id=")[1];
      this.axios.get(address + ":3000/get-neraca", headers).then((response) => {
        for(let i = 0; i < response.data.length; i++) {
          if(i == 0) {
            this.columns.push('Tahun');
          }
          if(response.data[i].upload_by == id) {
            var temp = [];
            for(let j = 0; j < response.data[i].data.length; j++) {
              if(response.data[i].data[j]["URAIAN"] == "Kas dan Bank" ||
                response.data[i].data[j]["URAIAN"] == "Piutang Usaha" ||
                response.data[i].data[j]["URAIAN"] == "Persediaan" ||
                response.data[i].data[j]["URAIAN"] == "Jumlah Aktiva Lancar" ||
                response.data[i].data[j]["URAIAN"] == "Aktiva Tetap" ||
                response.data[i].data[j]["URAIAN"] == "Aktiva Eksplorasi dan Evaluasi" ||
                response.data[i].data[j]["URAIAN"] == "Jumlah Aktiva Tidak Lancar" ||
                response.data[i].data[j]["URAIAN"] == "Hutang Usaha" ||
                response.data[i].data[j]["URAIAN"] == "Hutang Afiliasi" ||
                response.data[i].data[j]["URAIAN"] == "Jumlah Kewajiban Jangka Pendek" ||
                response.data[i].data[j]["URAIAN"] == "Hutang Bank" ||
                response.data[i].data[j]["URAIAN"] == "Hutang Afiliasi" ||
                response.data[i].data[j]["URAIAN"] == "Provisi untuk Reklamasi dan Penutupan Tambang" ||
                response.data[i].data[j]["URAIAN"] == "Jumlah Kewajiban Jangka Panjang" ||
                response.data[i].data[j]["URAIAN"] == "Modal Yang Disetor" ||
                response.data[i].data[j]["URAIAN"] == "Laba (rugi) ditahan" ||
                response.data[i].data[j]["URAIAN"] == "Ekuitas") {
                this.columns.push(response.data[i].data[j]["URAIAN"]);
                if(!response.data[i].data[j]["REALISASI TAHUN 2018"]) {
                  response.data[i].data[j]["REALISASI TAHUN 2018"] = 0;
                }
                temp.push(response.data[i].data[j]["REALISASI TAHUN 2018"]);
              }
            }
            this.tableData = [{
              "Tahun": '2018',
              "Kas dan Bank": temp[0],
              "Piutang Usaha": temp[1],
              "Persediaan": temp[2],
              "Jumlah Aktiva Lancar": temp[3],
              "Aktiva Tetap": temp[4],
              "Aktiva Eksplorasi dan Evaluasi": temp[5],
              "Jumlah Aktiva Tidak Lancar": temp[6],
              "Hutang Usaha": temp[7],
              "Hutang Afiliasi": temp[8],
              "Jumlah Kewajiban Jangka Pendek": temp[9],
              "Hutang Bank": temp[10],
              "Hutang Afiliasi": temp[11],
              "Provisi untuk Reklamasi dan Penutupan Tambang": temp[12],
              "Jumlah Kewajiban Jangka Panjang": temp[13],
              "Modal Yang Disetor": temp[14],
              "Laba (rugi) ditahan": temp[15],
              "Ekuitas": temp[16]
            }]
          }
        }
      });
    }
  }
};
</script>
