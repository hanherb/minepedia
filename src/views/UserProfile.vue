<template>
  <d-container fluid class="main-content-container px-4">
    <d-row class="mt-4">
      <d-col lg="4" sm="12">
        <up-user-details />
        <up-user-activity />
      </d-col>

      <d-col lg="8">
        <up-user-laba-rugi />
        <up-user-neraca />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import UserDetails from '@/components/user-profile/UserDetails.vue';
import UserActivity from '@/components/user-profile/UserActivity.vue';
import UserLabaRugi from '@/components/user-profile/UserLabaRugi.vue';
import UserNeraca from '@/components/user-profile/UserNeraca.vue';

export default {
  name: 'user-profile',
  components: {
    upUserDetails: UserDetails,
    upUserActivity: UserActivity,
    upUserLabaRugi: UserLabaRugi,
    upUserNeraca: UserNeraca,
  },
};
</script>
