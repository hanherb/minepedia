<template lang="pug">
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-button class="btn-white" id="anggaranBelanja" v-on:click="toggleTable($event.currentTarget.id)">Anggaran Belanja</d-button>
    <v-client-table class="dataTables_wrapper anggaranBelanja" :data="anggaranBelanja.tableData" :columns="anggaranBelanja.columns" :options="anggaranBelanja.clientTableOptions">
    </v-client-table>
    <d-button class="btn-white" id="arusKas" v-on:click="toggleTable($event.currentTarget.id)">Arus Kas</d-button>
    <v-client-table class="dataTables_wrapper arusKas" :data="arusKas.tableData" :columns="arusKas.columns" :options="arusKas.clientTableOptions">
    </v-client-table>
    <d-button class="btn-white" id="asumsiKeuangan" v-on:click="toggleTable($event.currentTarget.id)">Asumsi Keuangan</d-button>
    <v-client-table class="dataTables_wrapper asumsiKeuangan" :data="asumsiKeuangan.tableData" :columns="asumsiKeuangan.columns" :options="asumsiKeuangan.clientTableOptions">
    </v-client-table>
    <d-button class="btn-white" id="investasi" v-on:click="toggleTable($event.currentTarget.id)">Investasi</d-button>
    <v-client-table class="dataTables_wrapper investasi" :data="investasi.tableData" :columns="investasi.columns" :options="investasi.clientTableOptions">
    </v-client-table>
    <d-button class="btn-white" id="keuanganLainnya" v-on:click="toggleTable($event.currentTarget.id)">Keuangan Lainnya</d-button>
    <v-client-table class="dataTables_wrapper keuanganLainnya" :data="keuanganLainnya.tableData" :columns="keuanganLainnya.columns" :options="keuanganLainnya.clientTableOptions">
    </v-client-table>
    <d-button class="btn-white" id="neraca" v-on:click="toggleTable($event.currentTarget.id)">Neraca Keuangan</d-button>
    <v-client-table class="dataTables_wrapper neraca" :data="neraca.tableData" :columns="neraca.columns" :options="neraca.clientTableOptions">
    </v-client-table>
    <d-button class="btn-white" id="penerimaanNegara" v-on:click="toggleTable($event.currentTarget.id)">Penerimaan Negara</d-button>
    <v-client-table class="dataTables_wrapper penerimaanNegara" :data="penerimaanNegara.tableData" :columns="penerimaanNegara.columns" :options="penerimaanNegara.clientTableOptions">
    </v-client-table>
    <d-button class="btn-white" id="sumberPembiayaan" v-on:click="toggleTable($event.currentTarget.id)">Sumber Pembiayaan</d-button>
    <v-client-table class="dataTables_wrapper sumberPembiayaan" :data="sumberPembiayaan.tableData" :columns="sumberPembiayaan.columns" :options="sumberPembiayaan.clientTableOptions">
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
  name: 'data-keuangan-op',
  components: {
    ClientTable,
  },
  data(){
    return{
      anggaranBelanja: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
      arusKas: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
      asumsiKeuangan: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
      investasi: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
      keuanganLainnya: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
      neraca: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
      penerimaanNegara: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
      sumberPembiayaan: {
        columns: [],
        tableData: [],
        clientTableOptions: {
          perPage: 40,
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
      },
    }
  },

  created: function()
  {
    this.fetchAnggaranBelanja();
    this.fetchArusKas();
    this.fetchAsumsiKeuangan();
    this.fetchInvestasi();
    this.fetchKeuanganLainnya();
    this.fetchNeraca();
    this.fetchPenerimaanNegara();
    this.fetchSumberPembiayaan();
  },

  methods: {
    fetchAnggaranBelanja() {
      this.axios.get(address + ":3000/get-anggaran-belanja", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.anggaranBelanja.columns = Object.keys(response.data[0].data[0]);
            this.anggaranBelanja.tableData = response.data[0].data;
          }
        }  
      })
    },
    fetchArusKas() {
      this.axios.get(address + ":3000/get-arus-kas", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.arusKas.columns = Object.keys(response.data[0].data[0]);
            this.arusKas.tableData = response.data[0].data;
          }
        }  
      })
    },
    fetchAsumsiKeuangan() {
      this.axios.get(address + ":3000/get-asumsi-keuangan", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.asumsiKeuangan.columns = Object.keys(response.data[0].data[0]);
            this.asumsiKeuangan.tableData = response.data[0].data;
          }
        }  
      })
    },
    fetchInvestasi() {
      this.axios.get(address + ":3000/get-investasi", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.investasi.columns = Object.keys(response.data[0].data[0]);
            this.investasi.tableData = response.data[0].data;
          }
        }  
      })
    },
    fetchKeuanganLainnya() {
      this.axios.get(address + ":3000/get-keuangan-lainnya", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.keuanganLainnya.columns = Object.keys(response.data[0].data[0]);
            this.keuanganLainnya.tableData = response.data[0].data;
          }
        }  
      })
    },
    fetchNeraca() {
      this.axios.get(address + ":3000/get-neraca", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.neraca.columns = Object.keys(response.data[0].data[0]);
            this.neraca.tableData = response.data[0].data;
          }
        }  
      })
    },
    fetchPenerimaanNegara() {
      this.axios.get(address + ":3000/get-penerimaan-negara", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.penerimaanNegara.columns = Object.keys(response.data[0].data[0]);
            this.penerimaanNegara.tableData = response.data[0].data;
          }
        }  
      })
    },
    fetchSumberPembiayaan() {
      this.axios.get(address + ":3000/get-sumber-pembiayaan", headers).then((response) => {
        for(var i = 0; i < response.data.length; i++) {
          if (response.data[i].upload_by == this.$session.get('user')._id) {
            this.sumberPembiayaan.columns = Object.keys(response.data[0].data[0]);
            this.sumberPembiayaan.tableData = response.data[0].data;
          }
        }
      })
    },
    toggleTable(id) {
      if(document.getElementsByClassName(id)[0].style.display == 'none') {
        document.getElementsByClassName(id)[0].style.display = 'block';
      }
      else if(document.getElementsByClassName(id)[0].style.display == 'block') {
        document.getElementsByClassName(id)[0].style.display = 'none';
      }
      else {
        document.getElementsByClassName(id)[0].style.display = 'block';
      }
    }
  }
}
</script>

<style scoped>
  .dataTables_wrapper {
    display: none;
  }
</style>
