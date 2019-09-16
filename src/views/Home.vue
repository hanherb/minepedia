<template>
<d-container>
	<d-row>
		<d-col lg="6" sm="6" class="mb-4">
	    	<country-reports />
	  	</d-col>
	  	<d-col lg="6" class="mb-4">
	    	<province-reports />
	  	</d-col>
	</d-row>
	<d-row>
		<d-col lg="6" sm="6" class="mb-4">
	    	<ao-top-referrals />
	  	</d-col>
	</d-row>
</d-container>
</template>

<script>
import TopReferrals from '@/components/common/TopReferrals.vue';
import CountryReports from '@/components/common/CountryReports.vue';
import ProvinceReports from '@/components/common/ProvinceReports.vue';
export default {
  name: 'home',
  components: {
  	aoTopReferrals: TopReferrals,
  	CountryReports,
  	ProvinceReports,
  },
};
</script>

<style scoped>

.container{
	padding-top: 6rem;
}

</style>
