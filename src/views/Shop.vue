<template>
	<div>
	    <section class="cat_product_area section_padding border_top">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-3">
	                    <div class="left_sidebar_area">
	                        <aside class="left_widgets p_filter_widgets sidebar_box_shadow desktop">
	                            <div class="l_w_title">
	                                <h3>Browse Categories</h3>
	                            </div>
	                            <div class="widgets_inner">
	                                <ul class="list">
	                                    <li v-for="list in list_category">
	                                        <a v-on:click="filter_category" style="cursor: pointer;">{{list.value}}</a>
	                                    </li>
	                                </ul>
	                            </div>
	                        </aside>
	                        <aside class="left_widgets p_filter_widgets sidebar_box_shadow mobile">
	                            <div class="l_w_title">
	                                <h3>Browse Categories</h3>
	                            </div>
	                            <div class="widgets_inner">
	                                <select v-on:change="filter_category_select" class="form-control" id="exampleFormControlSelect1">
								      <option v-for="list in list_category" :value="list.value">{{list.text}}</option>
								    </select>
	                            </div>
	                        </aside>
	                    </div>
	                </div>
	                <div class="col-lg-9">
	                    <div class="row">
	                        <div class="col-lg-12">
	                            <div class="product_top_bar d-flex justify-content-between align-items-center">
	                                <div class="single_product_menu product_bar_item">
	                                    <h2>{{category}} ({{itemCount}})</h2>
	                                </div>
	                            </div>
	                        </div>
                        	<div v-for="commerce in commerces" class="col-lg-4 col-sm-6">
	                            <div class="single_category_product">
	                                <div class="single_category_img">
	                                    <img :src="require('@/assets/images/uploads/' + commerce.image + '.png')" alt="">
	                                    <div class="category_social_icon">
	                                        <ul>
	                                            <li><a href="#"><i class="ti-bag"></i></a></li>
	                                        </ul>
	                                    </div>
	                                    <div class="category_product_text">
	                                        <a href="single-product.html"><h5>{{commerce.name}}</h5></a>
	                                        <p>Rp. {{commerce.price}}</p>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                        <div class="col-lg-12 text-center">
	                            <a href="#" class="btn_2">More Items</a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>
	    <section class="shipping_details section_padding">
	        <shipping />
	    </section>
	</div>
</template>

<script>
import graphqlFunction from '@/graphqlFunction';
import gql from '@/gql';
import basicFunction from '@/basicFunction';
import address from '@/address';
import Shipping from '@/components/ecommerce/Shipping.vue';
export default {
  name: 'home',
  components: {
    Shipping,
  },
  data(){
  	return {
  		commerces: [],
  		category: 'All',
  		itemCount: 0,
  		list_category: [
            {value: 'All', text: 'All'},
            {value: 'HEAVY EQUIPMENT', text: 'A. HEAVY EQUIPMENT'},
            {value: 'LAND TRANSPORT EQUIPMENT', text: 'B. LAND TRANSPORT EQUIPMENT'},
            {value: 'WATER TRANSPORT EQUIPMENT', text: 'C. WATER TRANSPORT EQUIPMENT'},
            {value: 'AIR TRANSPORT EQUIPMENT', text: 'D. AIR TRANSPORT EQUIPMENT'},
            {value: 'COMMUNICATION', text: 'E. COMMUNICATION'},
            {value: 'LAND SURVEY & RECOINASSANCE', text: 'F. LAND SURVEY & RECOINASSANCE'},
            {value: 'DRILLING EQUIPMENT', text: 'G. DRILLING EQUIPMENT'},
            {value: 'SAMPLING & LAB', text: 'H. SAMPLING & LAB'},
            {value: 'REPAIR & MAINTENANCE', text: 'I. REPAIR & MAINTENANCE'},
            {value: 'BUILDING MATERIALS', text: 'J. BUILDING MATERIALS'},
            {value: 'UTILITIES, FURNITURE & APPLIANCES', text: 'K. UTILITIES, FURNITURE & APPLIANCES'},
            {value: 'CONSUMABLES: FUEL', text: 'L. CONSUMABLES: FUEL'},
            {value: 'CONSUMABLES: FOOD', text: 'M. CONSUMABLES: FOOD'},
            {value: 'MISCELLANEOUS', text: 'N. MISCELLANEOUS'},
            {value: 'MEDICAL: HEALTHY & SAFETY', text: 'O. MEDICAL: HEALTHY & SAFETY'},
            {value: 'RECREATION FACILITY', text: 'P. RECREATION FACILITY'},
            {value: 'POWER STATION', text: 'Q. POWER STATION'},
            {value: 'PROCESSING PLANT', text: 'R. PROCESSING PLANT'},
            {value: 'SCHOOL & TRAINING', text: 'S. SCHOOL & TRAINING'},
            {value: 'ENVIRONMENTAL', text: 'T. ENVIRONMENTAL'}
      	],
  	}
  },

  created: function() {
  	this.fetchCommerce();
  },

  methods: {
  	fetchCommerce() {
  		this.commerces = [];
  		this.itemCount = 0;
  		this.axios.get(address + ":3000/get-commerce").then((response) => {
        let query = gql.allCommerce;
        graphqlFunction.graphqlFetchAll(query, (result) => {
          for(var i = 0; i < result.commerces.length; i++) {
            if(this.category == result.commerces[i].category || this.category == 'All') {
              result.commerces[i].price = basicFunction.numberWithCommas(result.commerces[i].price);
              this.itemCount++;
              this.commerces.push(result.commerces[i]);
            }
          }
        });
      });
  	},
  	filter_category(category) {
  		this.category = category.target.innerHTML;
  		this.fetchCommerce();
  	},
  	filter_category_select(category) {
  		this.category = category.target.value;
  		this.fetchCommerce();
  	}
  }
};
</script>

<style scoped>
.container{
	padding-top: 6rem;
}

img {
	width: 250px;
	height: 250px;
}

.desktop {
	display: block;
}
.mobile {
	display: none;
}

@media screen and (max-width: 600px) {
	img {
		width: 500px;
		height: 500px;
	}
	.desktop {
		display: none;
	}
	.mobile {
		display: block;
	}
}
</style>
