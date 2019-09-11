<template>
<d-container>
	<d-row>
		<d-col lg="12" sm="6" class="mb-4">
	    	<ao-summary-card-public />
	  	</d-col>
	</d-row>
</d-container>
</template>

<script>
import SummaryCardPublic from '@/components/analytics/SummaryCardPublic.vue';
export default {
  name: 'home',
  components: {
  	aoSummaryCardPublic: SummaryCardPublic,
  },
};
</script>

<style scoped>

.container{
	padding-top: 6rem;
}

</style>
