<template>
  <div class="container-fluid p-lg-0 overflow-hidden">
      <div class="row align-items-center justify-content-between">
          <div class="col-lg-4 col-sm-6">
              <div class="single_feature_post_text">
                  <img src="@/assets/images/content-management/feature_1.png" alt="#">
                  <div class="hover_text">
                      <a href="single-product.html" class="btn_2">shop</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6">
              <div class="single_feature_post_text">
                  <img src="@/assets/images/content-management/feature_2.png" alt="#">
                  <div class="hover_text">
                      <a href="single-product.html" class="btn_2">shop</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-sm-6">
              <div class="single_feature_post_text">
                  <img src="@/assets/images/content-management/feature_3.png" alt="#">
                  <div class="hover_text">
                      <a href="single-product.html" class="btn_2">shop</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'featured',
};
</script>
<style scoped>
  img {
    width: 630px;
    height: 700px;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>