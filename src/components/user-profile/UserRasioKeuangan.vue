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
      collectVar: [],
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
              if(response.data[i].data[j]["URAIAN"] == "Jumlah Aktiva Lancar") {
                this.collectVar.push({"jumlahAktivaLancar": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Jumlah Kewajiban Jangka Pendek") {
                this.collectVar.push({"jumlahKewajibanJangkaPendek": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Kas dan Bank") {
                this.collectVar.push({"kasDanBank": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Piutang Usaha") {
                this.collectVar.push({"piutangUsaha": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "JUMLAH AKTIVA") {
                this.collectVar.push({"jumlahAktiva": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Jumlah Kewajiban") {
                this.collectVar.push({"jumlahKewajiban": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Ekuitas") {
                this.collectVar.push({"ekuitas": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "JumlahKewajibanJangkaPanjang") {
                this.collectVar.push({"jumlahKewajibanJangkaPanjang": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
            }
          }
        }
      });
      this.axios.get(address + ":3000/get-laba-rugi", headers).then((response) => {
        for(let i = 0; i < response.data.length; i++) {
          if(response.data[i].upload_by == id) {
            var temp = [];
            for(let j = 0; j < response.data[i].data.length; j++) {
              if(response.data[i].data[j]["URAIAN"] == "Laba/ (Rugi) Operasi") {
                this.collectVar.push({"labaOperasi": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Beban bunga") {
                this.collectVar.push({"bebanBunga": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Laba/ (Rugi) Bersih") {
                this.collectVar.push({"labaBersih": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Laba (Rugi) kotor") {
                this.collectVar.push({"labaKotor": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
              if(response.data[i].data[j]["URAIAN"] == "Penjualan") {
                this.collectVar.push({"penjualan": response.data[i].data[j]["REALISASI TAHUN 2018"]});
              }
            }
          }
        }
      });
      console.log(this.collectVar);
      this.tableData = [{
        "Tahun": '2018',
      }]
    }
  }
};
</script>
