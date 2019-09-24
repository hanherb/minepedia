<template>
	<div>
	    <section class="banner_part">
	        <banner />
	    </section>
	    <section class="feature_part pt-4">
	        <featured />
	    </section>
	    <section class="new_arrival section_padding">
	        <new-arrival />
	    </section>
	    <!-- free shipping here -->
	    <section class="shipping_details section_padding">
	        <shipping />
	    </section>
	</div>
</template>

<script>
import Banner from '@/components/ecommerce/Banner.vue';
import Featured from '@/components/ecommerce/Featured.vue';
import NewArrival from '@/components/ecommerce/NewArrival.vue';
import Shipping from '@/components/ecommerce/Shipping.vue';
export default {
  name: 'home',
  components: {
    Banner,
    Featured,
    NewArrival,
    Shipping,
  },
};
</script>

<style scoped>
.container{
	padding-top: 6rem;
}
</style>
