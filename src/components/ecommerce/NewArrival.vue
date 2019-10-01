<template>
  <div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-8">
                <div class="arrival_tittle">
                    <h2>new arrival</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="new_arrival_iner filter-container">
                    <div class="single_arrivel_item weidth mix shoes">
                        <img src="@/assets/images/content-management/arrivel_5.png" alt="#">
                        <div class="hover_text">
                            <p>Canvas</p>
                            <a href="single-product.html"><h3>Lorem Canvas Low-Top Sneaker</h3></a>
                            <div class="rate_icon">
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                            </div>
                            <h5>$150</h5>
                            <div class="social_icon">
                                <a href="#"><i class="ti-bag"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="single_arrivel_item weidth mix women">
                        <img src="@/assets/images/content-management/arrivel_2.png" alt="#">
                        <div class="hover_text">
                            <p>Canvas</p>
                            <a href="single-product.html"><h3>Lorem Canvas Low-Top Sneaker</h3></a>
                            <div class="rate_icon">
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                            </div>
                            <h5>$150</h5>
                            <div class="social_icon">
                                <a href="#"><i class="ti-bag"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="single_arrivel_item weidth mix shoes women" >
                        <img src="@/assets/images/content-management/arrivel_3.png" alt="#">
                        <div class="hover_text">
                            <p>Canvas</p>
                            <a href="single-product.html"><h3>Lorem Canvas Low-Top Sneaker</h3></a>
                            <div class="rate_icon">
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                            </div>
                            <h5>$150</h5>
                            <div class="social_icon">
                                <a href="#"><i class="ti-bag"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="single_arrivel_item weidth mix women men">
                        <img src="@/assets/images/content-management/arrivel_4.png" alt="#">
                        <div class="hover_text">
                            <p>Canvas</p>
                            <a href="single-product.html"><h3>Lorem Canvas Low-Top Sneaker</h3></a>
                            <div class="rate_icon">
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                            </div>
                            <h5>$150</h5>
                            <div class="social_icon">
                                <a href="#"><i class="ti-bag"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="single_arrivel_item weidth mix men women">
                        <img src="@/assets/images/content-management/arrivel_1.png" alt="#">
                        <div class="hover_text">
                            <p>Canvas</p>
                            <a href="single-product.html"><h3>Lorem Canvas Low-Top Sneaker</h3></a>
                            <div class="rate_icon">
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                            </div>
                            <h5>$150</h5>
                            <div class="social_icon">
                                <a href="#"><i class="ti-bag"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="single_arrivel_item weidth mix shoes men">
                        <img src="@/assets/images/content-management/arrivel_6.png" alt="#">
                        <div class="hover_text">
                            <p>Canvas</p>
                            <a href="single-product.html"><h3>Lorem Canvas Low-Top Sneaker</h3></a>
                            <div class="rate_icon">
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                                <a href="#"> <i class="fas fa-star"></i> </a>
                            </div>
                            <h5>$150</h5>
                            <div class="social_icon">
                                <a href="#"><i class="ti-bag"></i></a>
                            </div>
                        </div>
                    </div>
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
    .weidth {
        width: 630px;
        height: 550px;
    }
    @media screen and (max-width: 600px) {
        img {
          width: 160px;
          height: 150px;
        }
        .single_arrivel_item {
            width: 160px;
            height: 150px;
        }
        .weidth  {
            width: 120px;
            height: 150px;
        }
        .hover_text a h3, .rate_icon, .hover_text p, .hover_text h5 {
            display: none;
        }
        .social_icon {
            margin-top: 20px;
        }
    }
</style>