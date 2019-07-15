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
  name: 'user-rasio-keuangan',
  props: {
    /**
     * The component title.
     */
    title: {
      type: String,
      default: 'User Rasio Keuangan',
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
      collectVar: {},
    }
  },

  created: function()
  {
      this.fetchRasioKeuangan((result) => {
        this.createTable(result);
      });
  },

  methods: {
    fetchRasioKeuangan(callback) {
      var id = window.location.href.split("?id=")[1];
      var temp = {};
      this.axios.get(address + ":3000/get-neraca", headers).then((response) => {
        for(let i = 0; i < response.data.length; i++) {
          if(response.data[i].upload_by == id) {
            for(let j = 0; j < response.data[i].data.length; j++) {
              if(response.data[i].data[j]["URAIAN"] == "Jumlah Aktiva Lancar") {
                temp.jumlahAktivaLancar = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
              if(response.data[i].data[j]["URAIAN"] == "Jumlah Kewajiban Jangka Pendek") {
                temp.jumlahKewajibanJangkaPendek = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
              if(response.data[i].data[j]["URAIAN"] == "Kas dan Bank") {
                temp.kasDanBank = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
              if(response.data[i].data[j]["URAIAN"] == "Piutang Usaha") {
                temp.piutangUsaha = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
              if(response.data[i].data[j]["URAIAN"] == "JUMLAH AKTIVA") {
                temp.jumlahAktiva = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
              if(response.data[i].data[j]["URAIAN"] == "Jumlah Kewajiban ") {
                temp.jumlahKewajiban = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
              if(response.data[i].data[j]["URAIAN"] == "Ekuitas") {
                temp.ekuitas = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
              if(response.data[i].data[j]["URAIAN"] == "JumlahKewajibanJangkaPanjang") {
                temp.jumlahKewajibanJangkaPanjang = response.data[i].data[j]["REALISASI TAHUN 2018"];
              }
            }
          }
        }
        this.axios.get(address + ":3000/get-laba-rugi", headers).then((response) => {
          for(let i = 0; i < response.data.length; i++) {
            if(response.data[i].upload_by == id) {
              for(let j = 0; j < response.data[i].data.length; j++) {
                if(response.data[i].data[j]["URAIAN"] == "Laba/ (Rugi) Operasi") {
                  temp.labaOperasi = response.data[i].data[j]["REALISASI TAHUN 2018"];
                }
                if(response.data[i].data[j]["URAIAN"] == "Beban bunga") {
                  temp.bebanBunga = response.data[i].data[j]["REALISASI TAHUN 2018"];
                }
                if(response.data[i].data[j]["URAIAN"] == "Laba/ (Rugi) Bersih") {
                  temp.labaBersih = response.data[i].data[j]["REALISASI TAHUN 2018"];
                }
                if(response.data[i].data[j]["URAIAN"] == "Laba (Rugi) kotor") {
                  temp.labaKotor = response.data[i].data[j]["REALISASI TAHUN 2018"];
                }
                if(response.data[i].data[j]["URAIAN"] == "Penjualan") {
                  temp.penjualan = response.data[i].data[j]["REALISASI TAHUN 2018"];
                }
              }
            }
          }
          if(callback)
            return callback(temp);
        });
      });
    },
    createTable(result) {
      if(result.jumlahAktivaLancar) {
        this.tableData = [{
          "Tahun": '2018',
          "Rasio Lancar": result.jumlahAktivaLancar / result.jumlahKewajibanJangkaPendek,
          "Rasio Sangat Lancar": (result.kasDanBank + result.piutangUsaha) / result.jumlahKewajibanJangkaPendek,
          "Rasio Kas": result.piutangUsaha / result.jumlahKewajibanJangkaPendek,
          "Rasio Utang Terhadap Aset": result.jumlahKewajiban / result.jumlahAktiva,
          "Rasio Utang Terhadap Modal": result.jumlahKewajiban / result.ekuitas,
          "Rasio Utang Jangka Panjang Terhadap Modal": result.jumlahKewajibanJangkaPanjang / result.ekuitas,
          "Rasio Kelipatan Bunga yang Dihasilkan": result.labaOperasi / result.bebanBunga,
          "Rasio Laba Operasional Terhadap Kewajiban": result.labaOperasi / result.jumlahKewajiban,
          "Hasil Pengembalian atas Aset": result.labaBersih / result.jumlahAktiva,
          "Hasil Pengembalian atas Ekuitas": result.labaBersih / result.ekuitas,
          "Marjin Laba Kotor": result.labaKotor / result.penjualan,
          "Marjin Laba Operasional": result.labaOperasi / result.penjualan,
          "Marjin Laba Bersih": result.labaBersih / result.penjualan
        }];
        for(var k in this.tableData[0]) this.columns.push(k);
      }
    }
  }
};
</script>
