<template>
	<div>
	    <div class="product_image_area section_padding">
		    <div class="container">
		      	<div class="row s_product_inner">
		        	<div class="col-lg-5" id="container_img">
		          		<div class="product_slider_img">
		            		<div id="images">
		              			<div>
		                			<img :src="require('@/assets/images/uploads/' + commerce.image + '.png')" />
		              			</div>
		            		</div>
		          		</div>
		        	</div>
		        	<div class="col-lg-5 offset-lg-1">
			          	<div class="s_product_text">
				            <h3>{{commerce.name}}</h3>
				            <h2>Rp. {{commerce.price}}</h2>
				            <ul class="list">
			              		<li>
			                		<a>
			                  		<span>Category</span> : {{commerce.category}}</a>
			              		</li>
			              		<li>
			                		<a> <span>TKDN</span> : {{commerce.tkdn}} %</a>
			              		</li>
			            	</ul>
			            	<p>
			                	Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.
			            	</p>
			            	<div class="card_area">
			              		<div class="add_to_cart">
			                  		<button id="btn_scroll" class="btn_3">Contact</button>
			              		</div>
			            	</div>
			          	</div>
		        	</div>
	      		</div>
	    	</div>
  		</div>
  		<section class="product_description_area">
		    <div class="container">
		      	<ul class="nav nav-tabs" id="myTab" role="tablist">
		        	<li class="nav-item">
		          		<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
		            	aria-selected="true">Description</a>
		        	</li>
		        	<li class="nav-item">
		          		<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
		            	aria-selected="false">Contact</a>
		        	</li>
		      	</ul>
		      	<div class="tab-content" id="myTabContent">
		        	<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
		          		<p>
				            Beryl Cook is one of Britain’s most talented and amusing artists
				            .Beryl’s pictures feature women of all shapes and sizes enjoying
				            themselves .Born between the two world wars, Beryl Cook eventually
				            left Kendrick School in Reading at the age of 15, where she went
				            to secretarial school and then into an insurance office. After
				            moving to London and then Hampton, she eventually married her next
				            door neighbour from Reading, John Cook. He was an officer in the
				            Merchant Navy and after he left the sea in 1956, they bought a pub
				            for a year before John took a job in Southern Rhodesia with a
				            motor company. Beryl bought their young son a box of watercolours,
				            and when showing him how to use it, she decided that she herself
				            quite enjoyed painting. John subsequently bought her a child’s
				            painting set for her birthday and it was with this that she
				            produced her first significant work, a half-length portrait of a
				            dark-skinned lady with a vacant expression and large drooping
				            breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
		          		</p>
		          		<p>
				            It is often frustrating to attempt to plan meals that are designed
				            for one. Despite this fact, we are seeing more and more recipe
				            books and Internet websites that are dedicated to the act of
				            cooking for one. Divorce and the death of spouses or grown
				            children leaving for college are all reasons that someone
				            accustomed to cooking for more than one would suddenly need to
				            learn how to adjust all the cooking practices utilized before into
				            a streamlined plan of cooking that is more efficient for one
				            person creating less
		          		</p>
		        	</div>
		        	<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
		          		<div class="table-responsive">
		            		<table class="table">
		              			<tbody>
		                			<tr>
					                  	<td>
					                    	<h5>Name</h5>
					                  	</td>
					                  	<td>
					                    	<h5>{{supplier.fullname}}</h5>
					                  	</td>
		                			</tr>
		                			<tr>
					                  	<td>
					                    	<h5>Email</h5>
					                  	</td>
					                  	<td>
					                    	<h5>{{supplier.email}}</h5>
					                  	</td>
		                			</tr>
		                			<tr>
					                  	<td>
					                    	<h5>Phone</h5>
					                  	</td>
					                  	<td>
					                    	<h5>{{supplier.telepon}}</h5>
					                  	</td>
		                			</tr>
		                			<tr>
					                  	<td>
					                    	<h5>Website</h5>
					                  	</td>
					                  	<td>
					                    	<h5>{{supplier.website}}</h5>
					                  	</td>
		                			</tr>
		              			</tbody>
		            		</table>
		          		</div>
		        	</div>
		      	</div>
		    </div>
	  	</section>
	  	<section class="product_list best_seller padding_bottom">
		    <div class="container">
		      	<div class="row justify-content-center">
		        	<div class="col-lg-12">
		          		<div class="section_tittle text-center">
		            		<h2>Best Sellers</h2>
		          		</div>
	        		</div>
		      	</div>
		      	<div class="row">
		          	<div>
		              	<div class="single_category_product">
		                  	<div class="single_category_img">
		                      	<img src="@/assets/images/content-management/feature_1.png" alt="">
		                      	<div class="category_social_icon">
		                          	<ul>
		                              	<li><a href="#"><i class="ti-bag"></i></a></li>
		                          	</ul>
		                      	</div>
		                      	<div class="category_product_text">
		                          	<a href="single-product.html"><h5>Green Drill</h5></a>
		                          	<p>Rp 150,000</p>
		                      	</div>
		                  	</div>
		              	</div>
		          	</div>
		          	<div>
		              	<div class="single_category_product">
		                  	<div class="single_category_img">
		                      	<img src="@/assets/images/content-management/feature_1.png" alt="">
		                      	<div class="category_social_icon">
		                          	<ul>
		                              	<li><a href="#"><i class="ti-bag"></i></a></li>
		                          	</ul>
		                      	</div>
		                      	<div class="category_product_text">
		                          	<a href="single-product.html"><h5>Green Drill</h5></a>
		                          	<p>Rp 150,000</p>
		                      	</div>
		                  	</div>
		              	</div>
		          	</div>
		          	<div>
		              	<div class="single_category_product">
		                  	<div class="single_category_img">
		                      	<img src="@/assets/images/content-management/feature_1.png" alt="">
		                      	<div class="category_social_icon">
		                          	<ul>
		                              	<li><a href="#"><i class="ti-bag"></i></a></li>
		                          	</ul>
		                      	</div>
		                      	<div class="category_product_text">
		                          	<a href="single-product.html"><h5>Green Drill</h5></a>
		                          	<p>Rp 150,000</p>
		                      	</div>
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
import $ from 'jquery';
export default {
  name: 'home',
  components: {
    Shipping,
  },
  data(){
  	return {
  		commerce: {},
  		supplier: {},
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

  mounted: function() {
  	$("#btn_scroll").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".nav-tabs").offset().top},
	        'slow');
	    $('#home-tab').removeClass('active');
		$('#profile-tab').addClass('active');
		$('#home').removeClass('show active');
		$('#profile').addClass('show active');
	});
  },

  methods: {
  	fetchCommerce() {
  		var id = window.location.href.split("product/")[1];
  		this.itemCount = 0;
  		this.axios.get(address + ":3000/get-commerce").then((response) => {
	        let query = gql.singleCommerce;
	        let variable = {
          		itemId: id
	        };
	        graphqlFunction.graphqlFetchOne(query, variable, (result) => {
	        	result.commerce.price = basicFunction.numberWithCommas(result.commerce.price);
          		this.commerce = result.commerce;
          		this.fetchSupplier();
	        });
      	})
  	},
  	fetchSupplier() {
  		this.axios.get(address + ":3000/get-user-public").then((response) => {
        	let query = gql.singleUser;
        	let variable = {
          		userId: this.commerce.user_id
        	};
        	graphqlFunction.graphqlFetchOne(query, variable, (result) => {
          		this.supplier = result.user;
        	});
      	})
  	}
  }
};
</script>

<style scoped>
#container_img {
	width: 550px;
	height: 350px;
}
#images {
	width: 550px;
	height: 350px;
}
.single_category_product {
  	width: 330px;
  	height: 350px;
}
.single_category_product img {
  	width: 300px;
  	height: 300px;
}
.desktop {
	display: block;
}
.mobile {
	display: none;
}

@media screen and (max-width: 600px) {
	#container_img {
		width: 400px;
		height: 300px;
	}
	#images img {
		width: 400px;
		height: 300px;
	}
	.single_category_product {
      	width: 130px;
      	height: 130px;
    }
    .single_category_product img {
      	width: 110px;
      	height: 90px;
    }
	.desktop {
		display: none;
	}
	.mobile {
		display: block;
	}
}
</style>
