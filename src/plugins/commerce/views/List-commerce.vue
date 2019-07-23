<template>
  <div>
    <d-row>
      <d-col md="6" lg="3" class="mb-4" v-for="commerce in commerces">
        <d-card style="max-width: 300px">
          <d-card-header style="background-color: #efeeee">{{commerce.category}}</d-card-header>
          <d-card-img :src="require('@/assets/images/uploads/' + commerce.image + '.png')"/>
          <d-card-body :title="commerce.name">
              <p>{{commerce.description}}</p>
              <p>By: 
                <d-link :to="'/user-profile?id=' + commerce.user_id">{{commerce.user}}</d-link>
              </p>
          </d-card-body>
          <d-card-footer style="background-color: #efeeee">Rp. {{commerce.price}}</d-card-footer>
        </d-card>
      </d-col>
    </d-row>
  </div>
</template>

<script>
import gql from '@/gql';
import graphqlFunction from '@/graphqlFunction';
import basicFunction from '@/basicFunction';
import address from '@/address';
import headers from '@/headers';

export default {
  name: 'list-commerce',
  data(){
      return{
          input: {
            qty: ""
          },
          commerces: [],
          carts: [],
          totalShoppingPrice: 0
      }
  },

  created: function()
  {
      this.fetchItems();
  },

  methods: {
      fetchItems() {
        this.axios.get(address + ":3000/get-commerce", headers).then((response) => {
          let query = gql.allCommerce;
          graphqlFunction.graphqlFetchAll(query, (result) => {
            for(var i = 0; i < result.commerces.length; i++) {
              result.commerces[i].price = basicFunction.numberWithCommas(result.commerces[i].price);
              this.commerces.push(result.commerces[i]);
            }
          });
        });
      },
  }
};
</script>

<style scoped>
  img {
    width: 300px;
    height: 250px;
  }
</style>