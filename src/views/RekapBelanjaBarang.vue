<template lang="pug">
  <d-container fluid class="main-content-container px-4 pb-4">
    <v-client-table class="dataTables_wrapper belanjaBarang" :data="belanjaBarang.tableData" :columns="belanjaBarang.columns" :options="belanjaBarang.clientTableOptions">
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
      belanjaBarang: {
        columns: ['', 'Kategori', 'Impor', 'Local Content', 'Local Expenditure'],
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
    this.presetTable();
    this.fetchBelanjaBarang();
  },

  methods: {
    presetTable() {
      var arrLetter = [
        'A','B','C','D','E','F','G','H','I','J',
        'K','L','M','N','O','P','Q','R','S','T'
      ];

      var arrKategori = [
        'HEAVY EQUIPMENT',
        'LAND TRANSPORT EQUIPMENT',
        'WATER TRANSPORT EQUIPMENT',
        'AIR TRANSPORT EQUIPMENT',
        'COMMUNICATION',
        'LAND SURVEY & RECOINASSANCE',
        'DRILLING EQUIPMENT',
        'SAMPLING & LAB',
        'REPAIR & MAINTENANCE',
        'BUILDING MATERIALS',
        'UTILITIES, FURNITURE & APPLIANCES',
        'CONSUMABLES: FUEL',
        'CONSUMABLES: FOOD',
        'MISCELLANEOUS',
        'MEDICAL: HEALTHY & SAFETY',
        'RECREATION FACILITY',
        'POWER STATION',
        'PROCESSING PLANT',
        'SCHOOL & TRAINING',
        'ENVIRONMENTAL'
      ];
      
      for(var i = 0; i < arrLetter.length; i++) {
        this.belanjaBarang.tableData.push({
          '': arrLetter[i],
          'Kategori': arrKategori[i],
          'Impor': 0,
          'Local Content': 0,
          'Local Expenditure': 0
        });
      }
    },
    fetchBelanjaBarang() {
      this.axios.get(address + ":3000/get-belanja-barang", headers).then((response) => {
        var totalImpor = 0;
        var totalLocalContent = 0;
        var totalLocalExpenditure = 0;
        for(var i = 0; i < response.data.length; i++) {
          var impor = 0;
          var localContent = 0;
          var localExpenditure = 0;
          var kategori = response.data[i].data[0]["Jenis Barang"];
          for(var j = 0; j < response.data[i].data.length; j++) {
            if(response.data[i].data[j]["Negara"]) {
              impor += response.data[i].data[j]["Total Price (US$)"];
              totalImpor += response.data[i].data[j]["Total Price (US$)"];
            }
            else if(response.data[i].data[j]["Produsen/Suplier"] == "Produsen") {
              localContent += response.data[i].data[j]["Total Price (US$)"];
              totalLocalContent += response.data[i].data[j]["Total Price (US$)"];
            }
            else if(response.data[i].data[j]["Produsen/Suplier"] == "Suplier") {
              localExpenditure += response.data[i].data[j]["Total Price (US$)"];
              totalLocalExpenditure += response.data[i].data[j]["Total Price (US$)"];
            }
          }
          for(var k = 0; k < this.belanjaBarang.tableData.length; k++) {
            if(kategori == this.belanjaBarang.tableData[k]["Kategori"]) {
              this.belanjaBarang.tableData[k]["Impor"] += impor;
              this.belanjaBarang.tableData[k]["Local Content"] += localContent;
              this.belanjaBarang.tableData[k]["Local Expenditure"] += localExpenditure;
            }
          }
        }

        var persentaseImpor = (totalImpor / (totalImpor + totalLocalContent + totalLocalExpenditure)) * 100;
        var persentaseLocalContent = (totalLocalContent / (totalImpor + totalLocalContent + totalLocalExpenditure)) * 100;
        var persentaseLocalExpenditure = (totalLocalExpenditure / (totalImpor + totalLocalContent + totalLocalExpenditure)) * 100;

        this.belanjaBarang.tableData.push({
          'Kategori': 'Total',
          'Impor': totalImpor,
          'Local Content': totalLocalContent,
          'Local Expenditure': totalLocalExpenditure
        });
        this.belanjaBarang.tableData.push({
          'Kategori': 'Persentase (%)',
          'Impor': persentaseImpor,
          'Local Content': persentaseLocalContent,
          'Local Expenditure': persentaseLocalExpenditure
        });
      })
    },
  }
}
</script>

<style scoped>

</style>
