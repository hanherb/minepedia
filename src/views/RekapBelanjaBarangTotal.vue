<template lang="pug">
  <d-container fluid class="main-content-container px-4 pb-4">
    <label>Filter Asal Barang :</label>
    <d-col md="1" class="form-group">
      <d-input-group seamless>
        <d-form-select :options="origins" @change="filterBelanjaBarang($event)">
        </d-form-select>
      </d-input-group>
    </d-col>
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
      origins: ['All'],
      belanjaBarang: {
        columns: ['', 'Kategori', 'Nasional', 'Provinsi', 'Kabupaten', 'Negara', 'Total Harga', 'Kuantitas'],
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
          'Nasional': 0, 
          'Provinsi': 0, 
          'Kabupaten': 0, 
          'Negara': 0, 
          'Kuantitas': 0, 
          'Total Harga': 0
        });
      }
    },
    fetchBelanjaBarang() {
      this.belanjaBarang.tableData = [];
      this.presetTable();
      this.axios.get(address + ":3000/get-belanja-barang", headers).then((response) => {
        var totalNegara = 0;
        var totalNasional = 0;
        var totalProvinsi = 0;
        var totalKabupaten = 0;
        var totalQty = 0;
        for(var i = 0; i < response.data.length; i++) {
          var negara = 0;
          var nasional = 0;
          var provinsi = 0;
          var kabupaten = 0;
          var qty = 0;
          var kategori = response.data[i].data[0]["Jenis Barang"];
          for(var j = 0; j < response.data[i].data.length; j++) {
            if(response.data[i].data[j]["Negara"]) {
              if(!this.origins.includes(response.data[i].data[j]["Negara"])) {
                this.origins.push(response.data[i].data[j]["Negara"]);
              }
              negara += response.data[i].data[j]["Total Price (US$)"];
              qty += parseInt(response.data[i].data[j]["Kuantitas"]);
              totalNegara += response.data[i].data[j]["Total Price (US$)"];
              totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
            }
            else if(response.data[i].data[j]["Nasional"]) {
              if(!this.origins.includes(response.data[i].data[j]["Nasional"])) {
                this.origins.push(response.data[i].data[j]["Nasional"]);
              }
              nasional += response.data[i].data[j]["Total Price (US$)"];
              qty += parseInt(response.data[i].data[j]["Kuantitas"]);
              totalNasional += response.data[i].data[j]["Total Price (US$)"];
              totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
            }
            else if(response.data[i].data[j]["Provinsi"]) {
              if(!this.origins.includes(response.data[i].data[j]["Provinsi"])) {
                this.origins.push(response.data[i].data[j]["Provinsi"]);
              }
              provinsi += response.data[i].data[j]["Total Price (US$)"];
              qty += parseInt(response.data[i].data[j]["Kuantitas"]);
              totalProvinsi += response.data[i].data[j]["Total Price (US$)"];
              totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
            }
            else if(response.data[i].data[j]["Kabupaten"]) {
              if(!this.origins.includes(response.data[i].data[j]["Kabupaten"])) {
                this.origins.push(response.data[i].data[j]["Kabupaten"]);
              }
              kabupaten += response.data[i].data[j]["Total Price (US$)"];
              qty += parseInt(response.data[i].data[j]["Kuantitas"]);
              totalKabupaten += response.data[i].data[j]["Total Price (US$)"];
              totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
            }
          }
          for(var k = 0; k < this.belanjaBarang.tableData.length; k++) {
            if(kategori == this.belanjaBarang.tableData[k]["Kategori"]) {
              this.belanjaBarang.tableData[k]["Negara"] += negara;
              this.belanjaBarang.tableData[k]["Nasional"] += nasional;
              this.belanjaBarang.tableData[k]["Provinsi"] += provinsi;
              this.belanjaBarang.tableData[k]["Kabupaten"] += kabupaten;
              this.belanjaBarang.tableData[k]["Kuantitas"] += qty;
              this.belanjaBarang.tableData[k]["Total Harga"] += (negara + nasional + provinsi + kabupaten);
            }
          }
        }

        this.belanjaBarang.tableData.push({
          'Kategori': 'Total',
          'Negara': totalNegara,
          'Nasional': totalNasional,
          'Provinsi': totalProvinsi,
          'Kabupaten': totalKabupaten,
          'Kuantitas': totalQty,
          'Total Harga': totalNegara + totalNasional + totalProvinsi + totalKabupaten
        });
      })
    },
    filterBelanjaBarang(origin) {
      if(origin == 'All') {
        this.fetchBelanjaBarang();
      }
      else {
        this.belanjaBarang.tableData = [];
        this.presetTable();
        this.axios.get(address + ":3000/get-belanja-barang", headers).then((response) => {
          var totalNegara = 0;
          var totalNasional = 0;
          var totalProvinsi = 0;
          var totalKabupaten = 0;
          var totalQty = 0;
          for(var i = 0; i < response.data.length; i++) {
            var negara = 0;
            var nasional = 0;
            var provinsi = 0;
            var kabupaten = 0;
            var qty = 0;
            var kategori = response.data[i].data[0]["Jenis Barang"];
            for(var j = 0; j < response.data[i].data.length; j++) {
              if(response.data[i].data[j]["Negara"]) {
                if(response.data[i].data[j]["Negara"] == origin) {
                  negara += response.data[i].data[j]["Total Price (US$)"];
                  qty += parseInt(response.data[i].data[j]["Kuantitas"]);
                  totalNegara += response.data[i].data[j]["Total Price (US$)"];
                  totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
                }
              }
              else if(response.data[i].data[j]["Nasional"]) {
                if(response.data[i].data[j]["Nasional"] == origin) {
                  nasional += response.data[i].data[j]["Total Price (US$)"];
                  qty += parseInt(response.data[i].data[j]["Kuantitas"]);
                  totalNasional += response.data[i].data[j]["Total Price (US$)"];
                  totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
                }
              }
              else if(response.data[i].data[j]["Provinsi"]) {
                if(response.data[i].data[j]["Provinsi"] == origin) {
                  provinsi += response.data[i].data[j]["Total Price (US$)"];
                  qty += parseInt(response.data[i].data[j]["Kuantitas"]);
                  totalProvinsi += response.data[i].data[j]["Total Price (US$)"];
                  totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
                }
              }
              else if(response.data[i].data[j]["Kabupaten"]) {
                if(response.data[i].data[j]["Kabupaten"] == origin) {
                  kabupaten += response.data[i].data[j]["Total Price (US$)"];
                  qty += parseInt(response.data[i].data[j]["Kuantitas"]);
                  totalKabupaten += response.data[i].data[j]["Total Price (US$)"];
                  totalQty += parseInt(response.data[i].data[j]["Kuantitas"]);
                }
              }
            }
            for(var k = 0; k < this.belanjaBarang.tableData.length; k++) {
              if(kategori == this.belanjaBarang.tableData[k]["Kategori"]) {
                this.belanjaBarang.tableData[k]["Negara"] += negara;
                this.belanjaBarang.tableData[k]["Nasional"] += nasional;
                this.belanjaBarang.tableData[k]["Provinsi"] += provinsi;
                this.belanjaBarang.tableData[k]["Kabupaten"] += kabupaten;
                this.belanjaBarang.tableData[k]["Kuantitas"] += qty;
                this.belanjaBarang.tableData[k]["Total Harga"] += (negara + nasional + provinsi + kabupaten);
              }
            }
          }

          this.belanjaBarang.tableData.push({
            'Kategori': 'Total',
            'Negara': totalNegara,
            'Nasional': totalNasional,
            'Provinsi': totalProvinsi,
            'Kabupaten': totalKabupaten,
            'Kuantitas': totalQty,
            'Total Harga': totalNegara + totalNasional + totalProvinsi + totalKabupaten
          });
        })
      }
    },
  }
}
</script>

<style scoped>

</style>
